import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Menu"
          onPress={() => navigation.navigate('Menu')}
        />
        <Button
          title="Convidados"
          onPress={() => navigation.navigate('Convidados')}
        />
        <Button
          title="Assados"
          onPress={() => navigation.navigate('Assados')}
        />
        <Button
          title="Bebidas"
          onPress={() => navigation.navigate('Bebidas')}
        />
        <Button
          title="Adicionais"
          onPress={() => navigation.navigate('Adicionais')}
        />
        <Button
          title="Resultados"
          onPress={() => navigation.navigate('Resultados')}
        />
        <Button
          title="Home voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={HomeScreen} />
      <Stack.Screen name="Convidados" component={HomeScreen} />
      <Stack.Screen name="Assados" component={HomeScreen} />
      <Stack.Screen name="Bebidas" component={HomeScreen} />
      <Stack.Screen name="Adicionais" component={HomeScreen} />
      <Stack.Screen name="Resultados" component={HomeScreen} />
    </Stack.Navigator>
  );
}