/* eslint-disable react/no-unstable-nested-components */
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Home from './home.routes';
import Churrascos from '../screens/Meus Churrascos/index';
import Receitas from '../screens/Receitas/index';
import Convite from '../screens/Convite/index';
import Precos from '../screens/Preços/index';
import colors from '../colors';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="aaaa" icon={({focused, color, size})=> <Feather name='moon' size={30} color='#000'/>} />
    </DrawerContentScrollView>
  );
}

export default function DrawerRoute() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />} 
    screenOptions={{
      drawerPosition: 'right',
      initialRouteName: 'Home',
      drawerLabelStyle: {fontFamily: 'Lalezar_400Regular', fontSize: 16},
      drawerActiveBackgroundColor: colors.focusPrimary,
      drawerActiveTintColor: colors.primary
    }}>
      <Drawer.Screen name="Home" component={Home} options={{
        drawerIcon: () => <MaterialIcons name='outdoor-grill' size={22} color='#000' />
      }}/>
      <Drawer.Screen name="Meus churrascos" component={Churrascos} />
      <Drawer.Screen name="Receitas" component={Receitas} />
      <Drawer.Screen name="Criar convite" component={Convite} />
      <Drawer.Screen name="Configurar preços" component={Precos} />
    </Drawer.Navigator>
  );
}