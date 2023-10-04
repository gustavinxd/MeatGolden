/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../colors';
import TeamLogo from '../TeamLogo';
import { useThemeContext } from '../../contexts/theme';

export default function CustomDrawerContent(props) {
  const {theme, toggleTheme} = useThemeContext();

  const themeColor = theme === 'light' ? colors.dark : colors.light
  const themeIcon = theme === 'light' ? 'moon' : 'sun'

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drawerTop}>
        <TouchableOpacity onPress={() => {
          toggleTheme()
        }}>
          <Feather name={themeIcon} size={30} color={themeColor} />
        </TouchableOpacity> 
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.drawerBottom}>
        <TeamLogo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerTop: {
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20
  },
  drawerBottom: {
    alignItems: 'center',
    marginBottom: 20
  }
});
