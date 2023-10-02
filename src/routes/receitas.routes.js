/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../screens/Menu/index';
import Convidados from '../screens/Convidados/index';
import Assados from '../screens/Assados/index';
import Bebidas from '../screens/Bebidas/index';
import Adicionais from '../screens/Adicionais/index';
import Resultados from '../screens/Resultados/index';
import CustomStackNavigator from '../components/CustomHeader/index';
import colors from '../colors';
import BackButton from '../components/Buttons/BackButton';
import ReceitasHome from '../screens/Receitas/Home';
import ReceitasBovina from '../screens/Receitas/Bovina';
import ReceitasFrango from './../screens/Receitas/Frango/index';
import ReceitasSuina from './../screens/Receitas/Suína/index';

const Stack = createStackNavigator();

export default function Receitas() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
            headerShown: false
        };
      }}
    >
      <Stack.Screen
        name="Receitas Home"
        component={ReceitasHome}
        options={{

        }}
      />

      <Stack.Screen name="Bovina" component={ReceitasBovina} options={{}} />
      <Stack.Screen name="Frango" component={ReceitasFrango} options={{}} />
      <Stack.Screen name="Suína" component={ReceitasSuina} options={{}} />

    </Stack.Navigator>
  );
}
