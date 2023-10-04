import { useFonts } from 'expo-font';
import { Lalezar_400Regular } from '@expo-google-fonts/lalezar';
import {
  InriaSans_300Light,
  InriaSans_400Regular,
  InriaSans_700Bold
} from '@expo-google-fonts/inria-sans';
import RoutesApp from './src/routes/index';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InriaSans_300Light,
    InriaSans_400Regular,
    InriaSans_700Bold,
    Lalezar_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <RoutesApp/>
    // <Precos/>
  );
}
