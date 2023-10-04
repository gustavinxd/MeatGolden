import { NavigationContainer } from '@react-navigation/native';
import DrawerRoute from './drawer.routes';
import ThemeProvider from '../contexts/theme';

export default function RoutesApp() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <DrawerRoute />
      </NavigationContainer>
    </ThemeProvider>
  );
}
