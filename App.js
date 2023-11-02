import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/screens/Splash/SplashScreen';

export default function App() {
  return (
    <>
      <StatusBar  style='light'/>
     <SplashScreen />
     </>
  );
}


