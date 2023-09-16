import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import Home from './home.routes';
import MeusChurrascos from './historico.routes';

function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
  
  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
  return (
    <Drawer.Navigator screenOptions={{
        drawerPosition: 'right'
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Meus churrascos" component={MeusChurrascos} />
      <Drawer.Screen name="Mapa" component={Feed} />
      <Drawer.Screen name="Receitas" component={Article} />
      <Drawer.Screen name="Criar convite" component={Article} />
      <Drawer.Screen name="Configurar preços" component={Article} />
    </Drawer.Navigator>
  );
}