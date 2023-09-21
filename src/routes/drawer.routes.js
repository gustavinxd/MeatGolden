import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home.routes';
import Churrascos from '../screens/Meus Churrascos/index';
import Receitas from '../screens/Receitas/index';
import Convite from '../screens/Convite/index';
import Precos from '../screens/Preços/index';

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition: 'right',
      initialRouteName: 'Home',
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Meus churrascos" component={Churrascos} />
      <Drawer.Screen name="Receitas" component={Receitas} />
      <Drawer.Screen name="Criar convite" component={Convite} />
      <Drawer.Screen name="Configurar preços" component={Precos} />
    </Drawer.Navigator>
  );
}