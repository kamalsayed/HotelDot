import { Text,Image,View,SafeAreaView ,Alert, Touchable, TouchableOpacity} from "react-native";
import Logo from "../../components/Logo/Logo";
import Style from "./Style";
import { auth ,db } from "./configuration";
import { useCallback, useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import MyButton from "../../components/Button/MyButton";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../Redux/userSlice'



const AuthScreen = ()=>{

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [selected,SetSelected]=useState(0);

  

  const handleSignUp = async (email, password, username) => {
    try {
      const {user} = await auth().createUserWithEmailAndPassword(email, password);

      await db().collection('users').doc(user.uid).set({
        email,
        username,
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
        await auth().signInWithEmailAndPassword(emailOrUsername, password);
      }else{
        const querySnapshot = await db()
          .collection('users')
          .where('username', '==', emailOrUsername)
          .limit(1)
          .get();
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
              <TouchableOpacity activeOpacity={1} onPress={()=>{SetSelected(0)}} style={selected ==0 ? Style.AuthSelect : Style.AuthNoSelect}>
              <Text style={selected ==0 ? Style.selected : Style.notSelect}>Log In</Text>
              </TouchableOpacity>
               <TouchableOpacity activeOpacity={1} onPress={()=>{SetSelected(1)}} style={selected ==1 ? Style.AuthSelect : Style.AuthNoSelect}>
               <Text style={selected ==1 ? Style.selected : Style.notSelect}>Sign Up</Text>
               </TouchableOpacity>
                
            </View>

            <View style={Style.AuthContainer}>
             {/* Here we put the auth content depending on chosen method */}
              {selected ==0 ? <LoginScreen/> : <RegisterScreen />}
             
            </View>
            <MyButton  props={{Action:`${selected == 0 ? 'Login' : 'Sign Up'}`,size:"large"}} />

        </SafeAreaView>
    )
}

export default AuthScreen;