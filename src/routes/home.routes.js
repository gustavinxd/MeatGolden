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

const Stack = createStackNavigator();

export default function Home() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerTitle: () => {
            return (
              <CustomStackNavigator navigation={navigation} route={route} />
            );
          },
          headerLeft: () => {
            return <BackButton navigation={navigation} route={route} />;
          },
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerShadowVisible: false
        };
      }}
    >
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerLeft: null,
          headerStyle: {
            backgroundColor: colors.dark
          }
        }}
      />

      <Stack.Screen name="Convidados" component={Convidados} options={{}} />

      <Stack.Screen
        name="Assados"
        component={Assados}
        options={{
          headerStyle: {
            backgroundColor: colors.light
          }
        }}
      />

      <Stack.Screen name="Bebidas" component={Bebidas} />

      <Stack.Screen
        name="Adicionais"
        component={Adicionais}
        options={{
          headerStyle: {
            backgroundColor: colors.light
          }
        }}
      />
      <Stack.Screen name="Resultados" component={Resultados} />
    </Stack.Navigator>
  );
}
