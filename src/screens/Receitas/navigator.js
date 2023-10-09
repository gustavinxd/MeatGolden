import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReceitasHome from '../Receitas/Home/index'; // Importe o seu componente ReceitasHome aqui
import Bovina from '../Receitas/Bovina/index'; // Importe os outros componentes de tela aqui
import Frango from '../Receitas/Frango/index';
import Suina from '../Receitas/Suína/index';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={ReceitasHome} />
      <Stack.Screen name="Bovina" component={Bovina} />
      <Stack.Screen name="Frango" component={Frango} />
      <Stack.Screen name="Suina" component={Suina} />
    </Stack.Navigator>
  );
};

export default Navigator;
