import { Text, View, Button } from "react-native";

export default function Assados({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Assados</Text>
      <Button title="Bebidas" onPress={() => navigation.navigate('Bebidas')} />
    </View>
  );
}