import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';

export default function CustomStackNavigator({ navigation, route }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons
          name="menu"
          size={30}
          color={
            route.name === 'Assados' || route.name === 'Adicionais'
              ? colors.primary
              : colors.light
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 5
  }
});
