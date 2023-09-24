import { Text, View, Button } from "react-native";
import colors from "../../colors";


export default function Assados({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.light }}>
      <Text>Assados</Text>
      <Button title="Bebidas" onPress={() => navigation.navigate('Bebidas')} />
    </View>
  );
}
