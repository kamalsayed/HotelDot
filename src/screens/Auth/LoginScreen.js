import { Text,View,TextInput,TouchableOpacity } from "react-native";
import MyButton from "../../components/Button/MyButton";
import Style from "./Style";
import { useState } from "react";
import { Feather } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../Redux/userSlice'



const LoginScreen =({props})=>{

    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    return(
        <View style={Style.LoginContainer}>

        <View style={Style.inputContainer}>
            <Text style={Style.label}>Username or E-mail</Text>
            <TextInput onEndEditing={()=>{dispatch(setUser({email:email,username:email}))
             console.log(user) 
            }} onBlur={()=>{dispatch(setUser({email:email,username:email}))
             console.log(user) 
        }} placeholder="Enter your e-mail or username" underlineColorAndroid="transparent"  onChangeText={text=>setEmail(text)} value={email}  style={Style.input} />
        </View>
         <View style={Style.inputContainerPass}>
            <View>
         <Text style={Style.label}>Password</Text>
         <TextInput
         onEndEditing={()=>{dispatch(setUser({email:email,username:email}))
         console.log(user) 
        }
        
        }
         onBlur={()=>{dispatch(setUser({password:password}))
         console.log(user) 
            } 
            
        } placeholder="Enter your password" secureTextEntry={!showPassword} textContentType="password" style={Style.input} onChangeText={text=>setPassword(text)} value={password}  />
         </View>
        
         <Feather  style={Style.eye}  onPress={toggleShowPassword} name={showPassword ? 'eye-off' : 'eye'} size={20} color={Color.grey} />


        

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

