import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth ,getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { AppRegistry } from 'react-native';

import { name as appName } from '../../../app.json';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {

    apiKey: "AIzaSyAg485PCh5-iVWudPu8MamsLA8aySrymnI",
  
    authDomain: "hoteldot-ddcd9.firebaseapp.com",
  
    projectId: "hoteldot-ddcd9",
  
    storageBucket: "hoteldot-ddcd9.appspot.com",
  
    messagingSenderId: "473721376859",
  
    appId: "1:473721376859:web:5957f1df969d090edbef7e",
  
    measurementId: "G-5E4FTMSWTE"
  
  };
  

const app = initializeApp(firebaseConfig);

/* const auth = getAuth(app); */

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const database = getFirestore(app);

AppRegistry.registerComponent(appName, () => app);



export  {app , auth , database};