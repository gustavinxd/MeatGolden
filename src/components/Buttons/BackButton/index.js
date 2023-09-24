import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../../colors/index';

export default function BackButton({ navigation, route }) {
  return (
    <TouchableOpacity
      style={[
        styles.btnBack,
        {
          borderColor:
            route.name === 'Assados' || route.name === 'Adicionais'
              ? colors.primary
              : colors.light
        }
      ]}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons
        name="arrow-back"
        size={25}
        color={
          route.name === 'Assados' || route.name === 'Adicionais'
            ? colors.primary
            : colors.light
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnBack: {
    borderRadius: 8,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    marginLeft: 15
  }
});
