/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './home.routes';
import Churrascos from '../screens/Meus Churrascos/index';
import Convite from '../screens/Convite/index';
import Precos from '../screens/Preços/index';
import colors from '../colors';
import CustomDrawerContent from '../components/CustomDrawer';
import Receitas from './receitas.routes';
import Menu from '../screens/Menu';
import CustomHeader from '../components/CustomHeader';
import { useThemeContext } from '../contexts/theme';

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.dark;
  const themeColorText = theme === 'light' ? colors.dark : colors.light;
  const themeColorItem = theme === 'light' ? colors.light : colors.darkGrey;

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation, route }) => {
        return {
          drawerPosition: 'right',
          initialRouteName: 'Home',
          drawerLabelStyle: {
            fontFamily: 'Lalezar_400Regular',
            fontSize: 16,
            marginLeft: -20
          },
          drawerActiveBackgroundColor: colors.focusPrimary,
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: themeColorText,
          drawerInactiveBackgroundColor: themeColorItem,
          drawerStyle: {
            backgroundColor: themeColor
          },
          headerTitle: () => (
            <CustomHeader navigation={navigation} route={route} />
          ),
          headerLeft: () => {
            return null;
          },
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerShadowVisible: false
        };
      }}
    >
      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={({ navigation, route }) => {
          return {
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="grill-outline"
                size={30}
                color={color}
              />
            ),
            headerTitle: () => (
              <CustomHeader
                removeBackButton
                navigation={navigation}
                route={route}
              />
            ),
            headerStyle: {
              backgroundColor: colors.black
            }
          };
        }}
      />
      <Drawer.Screen
        name="Calculadora"
        component={Home}
        options={{
          headerShown: false,
          drawerItemStyle: {
            display: 'none'
          }
        }}
      />
      <Drawer.Screen
        name="Meus churrascos"
        component={Churrascos}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={30} color={color} />
          ),
          headerStyle: {
            backgroundColor: themeColor
          }
        }}
      />
      <Drawer.Screen
        name="Receitas"
        component={Receitas}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="restaurant" size={30} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Criar convite"
        component={Convite}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="mail" size={30} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Configurar preços"
        component={Precos}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="monetization-on" size={30} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
