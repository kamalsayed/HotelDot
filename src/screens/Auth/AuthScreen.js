import { Text,Image,View,SafeAreaView ,Alert, Touchable, TouchableOpacity} from "react-native";
import Logo from "../../components/Logo/Logo";
import Style from "./Style";
import { auth ,database } from "./configuration";
import { useCallback, useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MyButton from "../../components/Button/MyButton";
import { useSelector, useDispatch } from 'react-redux'
import { setUser , ResetUser } from '../../Redux/userSlice'
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc ,getDocs,query, collection , where , limit,get} from "firebase/firestore";


const AuthScreen = ()=>{

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

  const handleSignUp = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const docRef = await addDoc(collection(database, 'users'), {
        username,
        email,
      });

      Alert.alert('Success', 'Account created successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleSignIn = async (emailOrUsername, password) => {
    try {
      let user;
      if(emailOrUsername.includes('@')){
        user = await signInWithEmailAndPassword(auth,emailOrUsername, password);
      }else{
        const querySnapshot = await getDocs(query(collection(database,'users') , where('username', '==', emailOrUsername) , limit(1)));
      }
      Alert.alert('Success', 'Logged in successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };




    return(
        <SafeAreaView style={{backgroundColor:'#FAFAFA'}}>

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
             
            </View>
            <MyButton  onCallback={ActionAuth} props={{
              
              Action:`${selected == 0 ? 'Login' : 'Sign Up'}`,
              size:"large" 
             
          }} />

        </SafeAreaView>
    )
}

export default AuthScreen;