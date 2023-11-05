import { Text,View,TextInput,TouchableOpacity } from "react-native";
import MyButton from "../../components/Button/MyButton";
import { useState } from "react";
import Style from "./Style";
import { Feather } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../Redux/userSlice'

const RegisterScreen =()=>{
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false); 
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    return(
        <View style={Style.LoginContainer}>

        <View style={Style.inputContainer}>
            <Text style={Style.label}>Username</Text>
            <TextInput
            
            onEndEditing={()=>{dispatch(setUser({username:username}))
             console.log(user) 
            }} onBlur={()=>{dispatch(setUser({username:username}))
             console.log(user) 
            }}

            placeholder="Create your username" underlineColorAndroid="transparent" textContentType="username" onChangeText={text=>setUsername(text)} value={username}  style={Style.inputReg} />
        </View>
        <View style={Style.inputContainer}>
            <Text style={Style.label}>E-mail</Text>
            <TextInput 
            
            onEndEditing={()=>{dispatch(setUser({email:email}))
            console.log(user) 
           }} onBlur={()=>{dispatch(setUser({email:email}))
            console.log(user) 
           }}
            
            placeholder="Enter your e-mail" underlineColorAndroid="transparent" textContentType="emailAddress" onChangeText={text=>setEmail(text)} value={email}  style={Style.inputReg} />
        </View>
         <View style={Style.inputContainerPass}>
            <View>
         <Text style={Style.label}>Password</Text>
         <TextInput 
         
         onEndEditing={()=>{dispatch(setUser({password:password}))
         console.log(user) 
        }} onBlur={()=>{dispatch(setUser({password:password}))
         console.log(user) 
        }}
         
         
         placeholder="Create your password"   secureTextEntry={!showPassword} textContentType="password" style={Style.inputReg} onChangeText={text=>setPassword(text)} value={password} />
         </View>
        
         <Feather  style={Style.eye}  onPress={toggleShowPassword} name={showPassword ? 'eye-off' : 'eye'} size={20} color={Color.grey} />

        </View>

        </View>
    );
}

export default RegisterScreen;

