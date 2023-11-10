import { StatusBar } from 'expo-status-bar';
import { AppState, View , I18nManager } from 'react-native';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import { createContext, useEffect, useState } from 'react';
import CustomSplashScreen from './src/screens/Splash/SplashScreen';
import { loadFonts } from './src/constants/expo-fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/Auth/AuthScreen';
import { store } from './src/Redux/store'
import { Provider, useSelector } from 'react-redux'
import HomeScreen from './src/screens/Home/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsScreen from './src/screens/Details/Details';
import Color from './src/constants/colors';
import { auth } from './src/screens/Auth/configuration';
import * as Localization from 'expo-localization';
import MainComponent from './MainComponent';



const Stack = createNativeStackNavigator();

//create context to pass isRTL  to first screen and set localiztion state

export default function App() {

  
    
  return (
    <>
      <Provider store={store}>

      <MainComponent />
     
      

     </Provider>

    
     </>
  );
}




