import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../../../colors";

export default function MenuButton({navigation,route}) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
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
  );
}
