import { Text,View,TextInput,TouchableOpacity } from "react-native";
import MyButton from "../../components/Button/MyButton";
import Style from "./Style";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { useSelector, useDispatch } from 'react-redux'
import { setUsermail, setUsername, setUserpassword} from '../../Redux/userSlice'



const LoginScreen =({props})=>{

    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false); 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    return(
        <View style={Style.LoginContainer}>

        <View style={Style.inputContainer}>
            <Text style={Style.label}>Username or E-mail</Text>
            <TextInput placeholder="Enter your e-mail or username" underlineColorAndroid="transparent"  
            
            onChangeText={(text)=>{
            dispatch(setUsermail({email:text}));
            dispatch(setUsername({username:text}));
            console.log(user.email);
            }} 
        value={user.email}  style={Style.input} />
        </View>
         <View style={Style.inputContainerPass}>
            <View>
         <Text style={Style.label}>Password</Text>

         <TextInput
        
        
         onChangeText={(text)=>{
            dispatch(setUserpassword({password:text}))
            console.log(user.password);
         }} value={user.password}   
            
            placeholder="Enter your password" secureTextEntry={!showPassword} textContentType="password" style={Style.input}  />
         </View>
         <TouchableOpacity activeOpacity={1} style={Style.eye}  onPress={toggleShowPassword} >
         <Feather     name={!showPassword ? 'eye-off' : 'eye'} size={20} color={Color.grey} />
         </TouchableOpacity> 

        

        </View>
        <View style={Style.questionContainer}>
            <TouchableOpacity activeOpacity={1} style={Style.questionBtn}> 
                <Text style={Style.questionBtnTxt}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>

        </View>
    );
}

export default LoginScreen;

