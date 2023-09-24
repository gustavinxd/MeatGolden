/* eslint-disable react/jsx-props-no-spreading */
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../colors';
import TeamLogo from '../TeamLogo';

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drawerTop}>
        <TouchableOpacity>
          <Feather name="moon" size={30} color={colors.dark} />
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
