import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../../../colors";
import { useThemeContext } from "../../../contexts/theme";

export default function MenuButton({navigation,route}) {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.primary : colors.light;
  
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
      <MaterialIcons
        name="menu"
        size={30}
        color={
          route.name === 'Assados' || route.name === 'Adicionais' || route.name === 'Meus churrascos'
            ? themeColor
            : colors.light
        }
      />
    </TouchableOpacity>
  );
}
