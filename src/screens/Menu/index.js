import { Text, View, Button } from "react-native";
import colors from "../../colors";


export default function Menu({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.dark }}>
      <Text>Menu</Text>
      <Button title="Iniciar" onPress={() => navigation.navigate('Convidados')} />
    </View>
  );
}