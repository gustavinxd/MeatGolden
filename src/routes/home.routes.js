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

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerTitle: () => {
            return <CustomStackNavigator navigation={navigation} />;
          },
          headerBackTitleVisible: false, 
          headerStyle:{
            backgroundColor: colors.primary
          },
          headerLeftLabelVisible: false
        };
      }}
    >

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerStyle: {
            backgroundColor: colors.dark
          }
        }}
      />

      <Stack.Screen name="Convidados" component={Convidados} />
      <Stack.Screen name="Assados" component={Assados} />
      <Stack.Screen name="Bebidas" component={Bebidas} />
      <Stack.Screen name="Adicionais" component={Adicionais} />
      <Stack.Screen name="Resultados" component={Resultados} />
    </Stack.Navigator>
  );
}
