import { Text,View,TextInput,TouchableOpacity } from "react-native";
import MyButton from "../../components/Button/MyButton";
import { useRef, useState } from "react";
import Style from "./Style";
import { Feather } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { useSelector, useDispatch } from 'react-redux'
import { setUsermail, setUsername, setUserpassword} from '../../Redux/userSlice'
import { database } from "./configuration";
import { getDocs,query, collection , where , limit} from "firebase/firestore";

const RegisterScreen =()=>{
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false); 

    const usernameRef = useRef(null);

    const emailRef = useRef(null);

    const passwordRef = useRef(null);

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

    //validation states

    const [isUsernameValid,setIsUsernameValid] = useState(true);
    const [isEmailValid,setIsEmailValid] =useState(true);
    const [isPasswordValid,setIsPasswordValid] = useState(true);

    //Availablility

    const [isUsernameAvail , setIsUsernameAvail] =useState(true);
    
    const [isEmailAvail , setIsEmailAvail] = useState(true);


    //Valdation Expressions

    const usernameRegex = /^[a-zA-Z0-9_]{3,25}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //Error Message for each form input

    
    const [usernameErr , setUsernameErr]=useState('');

    const [emailErr , setEmailErr]=useState('');

    const [passwordErr , setPasswordErr]=useState(''); 


    const ValidateSignupUsername=async ()=>{ //debug this
    
        const username = usernameRef.current.value;
        
        //username 1- input validation ,  email 1- input validation  , password input validation
 
       if(username.length > 0){
        console.log(usernameRegex.test(username));
        setIsUsernameValid(usernameRegex.test(username));

        
        //username 2- uniqueness validation -> from firebase
        if(isUsernameValid){
          setUsernameErr('');
          //reset username error msg
         

          const usernameDb = await getDocs(query(collection(database,'users') , where('username', '==', username) , limit(1)))
          .then((usernameDb)=>{
            if(usernameDb.size>0){
              console.log('dbcall '+usernameDb.docs);
              setIsUsernameAvail(false);
              setUsernameErr('Username already in use. Please choose a different username.');
            }else{
              setIsUsernameAvail(true);
              setUsernameErr('');
            }})
            .catch((error) => {

            const errorCode = error.code;

            const errorMessage = error.message;


            console.error("Signup failed:", errorMessage);

          });
         }else{
          setUsernameErr('Username must be 3 to 25 characters long and can only contain letters, numbers, and underscores.');
         }
 
       

      }else{
        setUsernameErr('');
      }
    }
  
    const ValidateSignupEmail = async ()=>{

      const email = emailRef.current.value;

      if(email.length > 0){
        setIsEmailValid(emailRegex.test(email));

        
        //email 2- uniqueness validation -> from firebase
        if(isEmailValid){
          setEmailErr('');
      
          //reset email error msg

          
          
          const emailDb = await getDocs(query(collection(database,'users') , where('email', '==', email) , limit(1)))
          .then((emailDb)=>{
            if(emailDb){

              setIsEmailAvail(false);
             setEmailErr('Email already in use. Please choose a different email.');
            }else{

              setIsEmailAvail(true);
              setEmailErr('');

            }
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Signup failed:", errorMessage);
          });
        }else{
          setEmailErr('Please enter a valid email address.');
        }


    }else{
      setEmailErr('');
    }
  }

  const ValidateSignupPassword = ()=>{
    const password = passwordRef.current.value;
    if(password){
      setIsPasswordValid(passwordRegex.test(password));

      if(isPasswordValid){
        setPasswordErr('');
      }else{
        setPasswordErr('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@ $ ! % * ? &).');
      }
  }
  }








    return(
        <View style={Style.LoginContainer}>

        <View style={Style.inputContainer}>
            <Text style={Style.label}>Username</Text>
            <TextInput
            ref={usernameRef}
            
            onChangeText={async(text)=>{
              usernameRef.current.value = text;
              dispatch(setUsername({username:text}));
              await ValidateSignupUsername();
              console.log(user) 
              }}
            value={user.username}
              
             
            placeholder="Create your username" underlineColorAndroid="transparent" textContentType="username"    style={Style.inputReg} />
           {usernameErr ? <Text>{usernameErr}</Text> : null} 
        </View>
        <View style={Style.inputContainer}>
            <Text style={Style.label}>E-mail</Text>
            <TextInput      
              ref={emailRef}
              onChangeText={async (text)=>{
              emailRef.current.value = text;
              dispatch(setUsermail({email:text}));
              await ValidateSignupEmail();
              console.log(user) 
              }} value={user.email}
            placeholder="Enter your e-mail" underlineColorAndroid="transparent" textContentType="emailAddress"   style={Style.inputReg} />

        {emailErr ? <Text>{emailErr}</Text> : null }
        </View>
         <View style={Style.inputContainerPass}>
            <View>
         <Text style={Style.label}>Password</Text>
         <TextInput        
          ref={passwordRef}
          onChangeText={(text)=>{
            passwordRef.current.value=text;
            dispatch(setUserpassword({password:text}));
            ValidateSignupPassword();
            console.log(user) 
          }} 
          value={user.password} 
         placeholder="Create your password"   secureTextEntry={!showPassword} textContentType="password" style={Style.inputReg} />

        {passwordErr ? <Text>{passwordErr}</Text> : <></>} 
         </View>
        
         <TouchableOpacity activeOpacity={1} style={Style.eye}  onPress={toggleShowPassword} >
         <Feather     name={!showPassword ? 'eye-off' : 'eye'} size={20} color={Color.grey} />
         </TouchableOpacity> 

        </View>

        </View>
    );
}

export default RegisterScreen;

