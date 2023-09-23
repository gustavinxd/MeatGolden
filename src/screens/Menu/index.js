import { Text, View, Button } from "react-native";


export default function Menu({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button title="Convidados" onPress={() => navigation.navigate('Convidados')} />
    </View>
  );
}