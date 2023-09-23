import { Text, View, Button } from "react-native";

export default function Resultados({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Resultados</Text>
      <Button title="Início" onPress={() => navigation.navigate('Menu')} />

    </View>
  );
}