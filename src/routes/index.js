import { NavigationContainer } from '@react-navigation/native';
import DrawerRoute from './drawer.routes';

export default function RoutesApp() {
  return (
    <NavigationContainer>
      <DrawerRoute />
    </NavigationContainer>
  );
}
