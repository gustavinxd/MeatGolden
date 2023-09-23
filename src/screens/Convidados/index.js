import { Text, View, Button } from "react-native";
import colors from "../../colors";

export default function Convidados({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary }}>
      <Text>Convidados</Text>
      <Button title="Assados" onPress={() => navigation.navigate('Assados')} />

    </View>
  );
}