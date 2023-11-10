import { Text,Image,View,SafeAreaView ,Alert, Modal , ActivityIndicator, TouchableOpacity, ScrollView} from "react-native";
import Logo from "../../components/Logo/Logo";
import Style from "./Style";
import { auth ,database } from "./configuration";
import { useCallback, useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MyButton from "../../components/Button/MyButton";
import { useSelector, useDispatch } from 'react-redux'
import { ResetUser , changeValidState , setUsername , setUsermail  } from '../../Redux/userSlice';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc ,getDocs,query, collection , where , limit} from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from "../../constants/colors";




const AuthScreen = ({navigation})=>{

  const user = useSelector((state) => state.users.user);

  const localRTl = useSelector((state) => state.localizationState.isRTL);
  
  const dispatch = useDispatch();

  const [selected,SetSelected]=useState(0); //0 login , 1 sign up

  const [loading , setLoading] =useState(false);





  const ActionAuth = useCallback((user,selected)=>{
      if(selected===0){
        handleSignIn(user.email,user.password);
      }else if(selected === 1){
        handleSignUp(user.email,user.password,user.username);
      }
  },[user,selected]);

  //signup -> firebase
  const handleSignUp = async (email, password, username) => {
    try {
      setLoading(true); //start process
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = await addDoc(collection(database, 'users'), {
        username,
        email,
      });
      setLoading(false); //end process
      Alert.alert('Success', 'Welcome onboard !');
      dispatch(ResetUser());
      SetSelected(0);
    } catch (error) {
      setLoading(false); //end process
      Alert.alert('Error', error.message);
    }
  };

  //signin -> firebase
  const handleSignIn = async (emailOrUsername, password) => {
    try {
      let authed;
      let usernameLogin;
      let emailLogin;
      let email;
      let username;
      if(emailOrUsername !=='' && password !==''){

      if(emailOrUsername.includes('@')){

        setLoading(true); //start process

        authed = await getDocs(query(collection(database,'users') , where('email', '==', emailOrUsername) , limit(1)));
       
        if(authed){
          
        username = authed.docs[0].data().username;
        
        dispatch(setUsername({username:username}));
        
        
        
        emailLogin = await signInWithEmailAndPassword(auth,emailOrUsername, password);

        

       
        }
        
      }else{

        setLoading(true); //start process

        authed = await getDocs(query(collection(database,'users') , where('username', '==', emailOrUsername) , limit(1)));

        if(authed.size>0){

        email =authed.docs[0].data().email;
        
      
        
        
        usernameLogin = await signInWithEmailAndPassword(auth,email, password);
        dispatch(setUsermail({email:email}));
       
         }
        }
      if(usernameLogin || emailLogin){

        if(usernameLogin){

          await AsyncStorage.multiSet([
          ['mail', email],
          ['name', emailOrUsername],
          ['password',password]
          ]);
        
        }else if(emailLogin){
    
          await AsyncStorage.multiSet([
            ['mail', emailOrUsername], 
            ['name', username],
            ['password',password]
            ]);
          }
    
      setLoading(false);
      Alert.alert('Success', 'Welcome Back !');

      navigation.navigate('Home');

      }else{
          if(user.valid){
          dispatch(changeValidState());
          setLoading(false);
          }
        }
      } //EO --> if
     }//EOT 
     catch (error) {
      console.log(error)
      setLoading(false);
      if(user.valid){
        dispatch(changeValidState())
      }
     // Alert.alert('Error', error.message);
    }

  };

  




    return(
        <SafeAreaView style={Style.AuthScreen}>
            
            <View style={Style.logo}>
            <Logo props={{type:0}} />
            </View>

            <View style={!localRTl?Style.Headers:Style.HeadersRTL}>
              <TouchableOpacity activeOpacity={1} onPress={()=>{
                if(selected===1){
                  dispatch(ResetUser());
                  if(!user.valid){
                  dispatch(changeValidState())
                  }
                  SetSelected(0)
                }
              
              
              }} style={selected ==0 ? Style.AuthSelect : Style.AuthNoSelect}>
              <Text style={selected ==0 ? Style.selected : Style.notSelect}>Log In</Text>
              </TouchableOpacity>

               <TouchableOpacity activeOpacity={1} onPress={()=>{
                 if(selected===0){
                  dispatch(ResetUser());
                  SetSelected(1)
                }  
                }} style={selected ==1 ? Style.AuthSelect : Style.AuthNoSelect}>
               <Text style={selected ==1 ? Style.selected : Style.notSelect}>Sign Up</Text>
               </TouchableOpacity>
                
            </View>
            <ScrollView showsVerticalScrollIndicator={false} scrollToOverflowEnabled={false}>
            <View style={Style.AuthContainer}>
             
             {/* Here we put the auth content depending on chosen method */}
              {selected ==0 ? <LoginScreen/> : <RegisterScreen />}
             
              <MyButton  onCallback={ActionAuth} props={{
              
              Action:`${selected == 0 ? 'Login' : 'Sign Up'}`,
              size:"large" 
             
            }} />

            </View>
            </ScrollView>
            
           
            <Modal transparent={true} animationType="fade"   visible={loading}>
            <View style={{position:'absolute',alignSelf:'center',top:'45%' , backgroundColor:`${Color.lightdark}`, padding:30,borderRadius:25,}}>
            <ActivityIndicator size={"large"}  /> 
            </View>
            </Modal>
           
            
        </SafeAreaView>
    )
}

export default AuthScreen;