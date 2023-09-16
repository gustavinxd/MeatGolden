import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';

function Page({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Histórico de churrascos"
          onPress={() => navigation.navigate('Histórico')}
        />
        <Button
          title="Detalhes do churrasco"
          onPress={() => navigation.navigate('Detalhes')}
        />
        <Button
          title="Home voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

const Stack = createStackNavigator();

export default function MeusChurrascos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Histórico" component={Page} />
      <Stack.Screen name="Detalhes" component={Page} />
    </Stack.Navigator>
  );
}