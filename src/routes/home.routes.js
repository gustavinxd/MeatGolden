/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import Convidados from '../screens/Convidados/index';
import Assados from '../screens/Assados/index';
import Bebidas from '../screens/Bebidas/index';
import Adicionais from '../screens/Adicionais/index';
import Resultados from '../screens/Resultados/index';
import CustomStackNavigator from '../components/CustomHeader/index';
import colors from '../colors';
import BackButton from '../components/Buttons/BackButton';
import ProgressProvider from '../contexts/progress';
import ProgressBar from '../components/ProgressBar/index';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <ProgressProvider>
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
        initialRouteName='Convidados'
      >

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
      <ProgressBar/>
    </ProgressProvider>
  );
}
