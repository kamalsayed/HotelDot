import { Text,Image,View,SafeAreaView ,Alert, Touchable, TouchableOpacity} from "react-native";
import Logo from "../../components/Logo/Logo";
import Style from "./Style";
import { auth ,database } from "./configuration";
import { useCallback, useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MyButton from "../../components/Button/MyButton";
import { useSelector, useDispatch } from 'react-redux'
import { ResetUser , changeValidState } from '../../Redux/userSlice';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc ,getDocs,query, collection , where , limit} from "firebase/firestore";


const AuthScreen = ({navigation})=>{

  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const [selected,SetSelected]=useState(0);






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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = await addDoc(collection(database, 'users'), {
        username,
        email,
      });

      Alert.alert('Success', 'Account created successfully');
      dispatch(ResetUser());
      SetSelected(0);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  //signin -> firebase
  const handleSignIn = async (emailOrUsername, password) => {
    try {
      let authed;
      let usernameLogin;
      let emailLogin;
      if(emailOrUsername !=='' && password !==''){
      if(emailOrUsername.includes('@')){
        emailLogin = await signInWithEmailAndPassword(auth,emailOrUsername, password);
      }else{
        authed = await getDocs(query(collection(database,'users') , where('username', '==', emailOrUsername) , limit(1)));
        if(authed.size>0){
        email =authed.docs[0].data().email;
        console.log(email);
        usernameLogin = await signInWithEmailAndPassword(auth,email, password);
         }
        }
      if(usernameLogin || emailLogin){
      Alert.alert('Success', 'Logged in successfully');
      navigation.navigate('Home');
      }else if(user.valid){
          dispatch(changeValidState())
        }
      } //EO --> if
    
    } catch (error) {
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

            <View style={Style.Headers}>
              <TouchableOpacity activeOpacity={1} onPress={()=>{
                if(selected===1){
                  dispatch(ResetUser());
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

            <View style={Style.AuthContainer}>
             {/* Here we put the auth content depending on chosen method */}
              {selected ==0 ? <LoginScreen/> : <RegisterScreen />}
             
              <MyButton  onCallback={ActionAuth} props={{
              
              Action:`${selected == 0 ? 'Login' : 'Sign Up'}`,
              size:"large" 
             
            }} />

            </View>
            

        </SafeAreaView>
    )
}

export default AuthScreen;