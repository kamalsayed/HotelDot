import { Text,View,TextInput,TouchableOpacity } from "react-native";
import MyButton from "../../components/Button/MyButton";
import Style from "./Style";
import { useEffect, useState } from "react";
import { Feather } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { useSelector, useDispatch } from 'react-redux'
import { changeValidState, setUsermail, setUsername, setUserpassword} from '../../Redux/userSlice'



const LoginScreen =({props})=>{

    const user = useSelector((state) => state.users.user);
    const localRTl = useSelector((state) => state.localizationState.isRTL);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false); 
    const [inputErr , setInputErr] = useState('');
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    //to make user data valid before login
    useEffect(()=>{
        if(!user.valid){
        dispatch(changeValidState());
        }
    },[]);
    
    const userCheckValid = ()=>{
        if(user.email && user.password){
            if(!user.valid){
              dispatch(changeValidState());
            }
          }    
        }
      


    return(
        <View style={!localRTl?Style.LoginContainer:Style.LoginContainerRTL}>

        <View style={Style.inputContainer}>
            <Text style={Style.label}>Username or E-mail</Text>
            <TextInput placeholder="Enter your e-mail or username" underlineColorAndroid="transparent"  
            onEndEditing={userCheckValid}
            onChangeText={(text)=>{
            dispatch(setUsermail({email:text}));
            dispatch(setUsername({username:text}));
            
            }} 
        value={user.email}  style={Style.input} />

        </View>

         <View style={Style.inputContainerPass}>
            <View>
         <Text style={Style.label}>Password</Text>

         <View style={!localRTl?Style.passEye:Style.passEyeRTL}>
         <TextInput
            onEndEditing={userCheckValid}
            onChangeText={(text)=>{
            dispatch(setUserpassword({password:text}));
            
            }} 
            value={user.password}   
            placeholder="Enter your password" 
            secureTextEntry={!showPassword} 
            textContentType="password" 
            style={Style.input}  />

        <TouchableOpacity activeOpacity={1} style={!localRTl?Style.eye:Style.eyeRTL}  onPress={toggleShowPassword} >
         <Feather     name={!showPassword ? 'eye-off' : 'eye'} size={20} color={Color.grey} />
         </TouchableOpacity> 

         </View>

         </View>
         
         {!user.valid ? <Text style={Style.errorMsg}>Invalid username/email or password. Please try again. </Text> : <></>}  
        </View>
       
        {/* Add error message */}
        <View style={Style.questionContainer}>
            <TouchableOpacity style={Style.questionBtn}> 
                <Text style={Style.questionBtnTxt}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
}

export default LoginScreen;

