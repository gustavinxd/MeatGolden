import { Text, View, Button } from "react-native";

export default function Bebidas({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bebidas</Text>
      <Button title="Adicionais" onPress={() => navigation.navigate('Adicionais')} />

    </View>
  );
}