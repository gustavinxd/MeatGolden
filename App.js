import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Lalezar_400Regular } from '@expo-google-fonts/lalezar';
import {
  InriaSans_300Light,
  InriaSans_400Regular,
  InriaSans_700Bold
} from '@expo-google-fonts/inria-sans';
import RoutesApp from './src/routes/index';
import { initDB } from './src/services/index';  // Atualize com o caminho real para o seu arquivo de banco de dados

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    InriaSans_300Light,
    InriaSans_400Regular,
    InriaSans_700Bold,
    Lalezar_400Regular
  });

  useEffect(() => {
    if (fontsLoaded && !fontError) {
      initDB().then(() => {
        console.log('Database initialized');
      }).catch((error) => {
        console.error('Error initializing database', error);
      });
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <RoutesApp/>
  );
}
