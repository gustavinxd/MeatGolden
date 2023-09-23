import { Text, View, Button } from "react-native";

export default function Adicionais({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações adicionais</Text>
      <Button title="Resultados" onPress={() => navigation.navigate('Resultados')} />

    </View>
  );
}
