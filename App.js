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



const Stack = createNativeStackNavigator();


export default function App() {

  const locale = Localization.locale;

  const isRTL = locale.startsWith('ar') || locale.startsWith('he');

  

  const [appState, setAppState] = useState(AppState.currentState);
 
  const [splash , setSplash] = useState(true);
 
  const fontsLoaded = loadFonts();

  const [user, userStateChange] = useState(null);


  const handleAppStateChange = (nextAppState) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      userStateChange(null);
    } else if (appState === 'active' && nextAppState.match(/inactive|background/)) {
      AsyncStorage.clear(); 
    }
    
    setAppState(nextAppState);

    
};

   
  
  useEffect(()=>{

    //rtl
    if(isRTL){
      I18nManager.forceRTL(false);
    }
    
    setTimeout(async ()=>{
      setSplash(!splash);
    },3000);
    
  },[])

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      userStateChange(authenticatedUser);
      
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);


  useEffect(()=>{
    const checkCurrentUser = async () => {
      const userToken = await AsyncStorage.getItem('name');
      
      if(userToken){
        userStateChange(userToken) 
      }
    };
    
    checkCurrentUser();
   
  },[]);

    
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);    
  }, [appState]);

    

    
  return (
    <>
      <Provider store={store}>

      {splash ?  <CustomSplashScreen /> 
     :  <>


      <NavigationContainer  fallback={false}   >

      <Stack.Navigator   screenOptions={{
        gestureEnabled:false,
      }}>

      {!user ? 

       <Stack.Group>
        <Stack.Screen options={{
          headerShown:false,
          gestureEnabled:false,
        }} name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen options={{
          headerShown:false,
          gestureEnabled:false,
        }} name="Auth"
        component={AuthScreen} />

        </Stack.Group> 
        
        
        
        :

         <Stack.Group  initialRouteName='Home'>

         <Stack.Screen  options={{
           headerShown:false,
           gestureEnabled:false,
         }} name="Home" component={HomeScreen} />

        <Stack.Screen  options={{
           headerShown:true,
           headerBackground: () => (
            <View style={{ backgroundColor: `${Color.screen}`, flex: 1  }} />
          ),
          headerTitleStyle:{
              fontFamily:'NunitoSans_400Regular',
              fontSize:25,
              fontWeight: '700',          
              color:`${Color.dark}`
          },
         }} name="Description" component={DetailsScreen} />

       </Stack.Group>
        
        
        
        }
     

     

      </Stack.Navigator>
     </NavigationContainer>

       
     </>

      }
     
      

     </Provider>

    
     </>
  );
}




