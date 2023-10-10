import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../../colors';

export default function ButtonIcon({ onPress, icon, colorButton = 'red' }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        color={colorButton === 'light' ? colors.light : colors.primary}
        size={25}
      />
    </TouchableOpacity>
  );
}
