import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import colors from "../../colors";
import { useThemeContext } from '../../contexts/theme';


export default function PreviewResults({dia, data, colorText = 'light'}){
    const { theme } = useThemeContext();  
    const themeColor = theme === 'light' ? colors.primary : colors.light;
    const colorSelection = colorText === 'red' ? themeColor : colors.light;

    return (
      <View style={styles.container}>
        <Text style={[styles.data, { color: colorSelection }]}>
          {dia}
        </Text>
        <View style={styles.convidadosSection}>
          <MaterialCommunityIcons
            name="face-man-outline"
            size={18}
            color={colorSelection}
          />
          <Text style={[styles.convidados, { color: colorSelection }]}>
            {data.convidados.homens}
          </Text>
          <MaterialCommunityIcons
            name="face-woman-outline"
            size={18}
            color={colorSelection}
          />
          <Text style={[styles.convidados, { color: colorSelection }]}>
            {data.convidados.mulheres}
          </Text>
          <MaterialIcons name="child-care" size={18} color={colorSelection} />
          <Text style={[styles.convidados, { color: colorSelection }]}>
            {data.convidados.criancas}
          </Text>
          <MaterialIcons name="people-alt" size={18} color={colorSelection} />
          <Text style={[styles.convidados, { color: colorSelection }]}>
            {data.convidados.total}
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 10
  },
  convidadosSection: {
    flexDirection: 'row',
    gap: 5
  },
  data: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 16,
    alignItems: 'center'
  },
  convidados: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 14
  }
});