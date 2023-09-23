import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';

export default function CustomStackNavigator({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        styles={styles.btnBack}
      >
        <MaterialIcons name="arrow-back" size={24} color={colors.light} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        styles={styles.btnBack}
      >
        <MaterialIcons name="menu" size={24} color={colors.light} />
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
    justifyContent: 'space-between'
  },
  btnBack: {
    borderRadius: 8,
    borderColor: colors.light,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  btnDrawer: {}
});
