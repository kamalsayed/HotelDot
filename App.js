import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen';
import { useEffect, useState } from 'react';
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


const Stack = createNativeStackNavigator();


export default function App() {

 
  const [splash , setSplash] = useState(true);
 
  const fontsLoaded = loadFonts();

  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    setTimeout(async ()=>{
      setSplash(!splash);
    },3000);
    
  },[])
    
  useEffect(()=>{
    
    const checkCurrentUser = async () => {
      const userToken = await AsyncStorage.getItem('name');
      if(userToken){
      setUser(userToken)
     
      };
    };

    checkCurrentUser();

   
  },[]);
    

    
  return (
    <>
      <Provider store={store}>

      {splash ?  <CustomSplashScreen /> 
     :  <>


      <NavigationContainer  fallback={false}   >

      <Stack.Navigator   screenOptions={{
        gestureEnabled:false,
      }}>
      {!user ?  <Stack.Group>
        <Stack.Screen options={{
          headerShown:false,
          gestureEnabled:false,
        }} name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen options={{
          headerShown:false,
          gestureEnabled:false,
        }} name="Auth"
        component={AuthScreen} />
        </Stack.Group> :

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
              fontWeight: '700', // Adjust the font weight as needed           
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




