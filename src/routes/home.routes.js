/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import Convidados from '../screens/Convidados/index';
import Assados from '../screens/Assados/index';
import Bebidas from '../screens/Bebidas/index';
import Adicionais from '../screens/Adicionais/index';
import Resultados from '../screens/Resultados/index';
import colors from '../colors';
import ProgressProvider from '../contexts/progress';
import CustomHeader from '../components/CustomHeader/index';
import ProgressBar from '../components/ProgressBar/index';
import { ValueProvider } from '../contexts/values';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <ValueProvider>
      <ProgressProvider>
        <Stack.Navigator
          screenOptions={({ navigation, route }) => {
            return {
              headerTitle: () => {
                return <CustomHeader navigation={navigation} route={route} />;
              },
              headerLeft: () => {
                return null;
              },
              headerStyle: {
                backgroundColor: colors.primary
              },
              headerShadowVisible: false
            };
          }}
          initialRouteName="Convidados"
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
        <ProgressBar />
      </ProgressProvider>
    </ValueProvider>
  );
}
