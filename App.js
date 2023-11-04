import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import { useEffect, useState } from 'react';
import CustomSplashScreen from './src/screens/Splash/SplashScreen';
import { loadFonts } from './src/constants/expo-fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/Auth/AuthScreen';


const Stack = createNativeStackNavigator();
export default function App() {

  const [splash , setSplash] = useState(true);
 
  const fontsLoaded = loadFonts();
  
  useEffect(()=>{
    setTimeout(()=>{
      setSplash(!splash);
    },3000);
  },[])
    
  
    

    
  return (
    <>
      
      {splash ?  <CustomSplashScreen /> 
     :  <>
      <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown:false,
        }} name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen options={{
          headerShown:false,
        }} name="Auth" component={AuthScreen} />
      </Stack.Navigator>
     </NavigationContainer>
     </>

     


      }
     
      

    

    
     </>
  );
}




