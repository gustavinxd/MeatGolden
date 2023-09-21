import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../colors';

export default function CustomStackNavigator({goBack, openDrawer}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack}>
        <MaterialIcons name='arrow-back' size={24} color={colors.light} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openDrawer}>
        <MaterialIcons name='menu' size={24} color={colors.light} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.primary,
  },
  btnBack: {

  },
  btnDrawer:{

  }
});
