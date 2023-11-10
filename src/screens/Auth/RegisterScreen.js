import { Text,View,TextInput,TouchableOpacity, KeyboardAvoidingView } from "react-native";
import MyButton from "../../components/Button/MyButton";
import { useRef, useState } from "react";
import Style from "./Style";
import { Feather } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { useSelector, useDispatch } from 'react-redux'
import { setUsermail, setUsername, setUserpassword , changeValidState} from '../../Redux/userSlice'
import { database } from "./configuration";
import { getDocs,query, collection , where , limit} from "firebase/firestore";

const RegisterScreen =()=>{
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false); 

    const localRTl = useSelector((state) => state.localizationState.isRTL);

    //const [usr, setUsr] = useState('');

    const usernameRef = useRef(null);

    const emailRef = useRef(null);

    const passwordRef = useRef(null);

    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

    //validation states

    const [isUsernameValid,setIsUsernameValid] = useState();
    const [isEmailValid,setIsEmailValid] =useState();
    const [isPasswordValid,setIsPasswordValid] = useState();

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


    const ValidateSignupUsername=()=>{ //debug this
    
        const username = usernameRef.current.value;
        
        //username 1- input validation ,  email 1- input validation  , password input validation
       
        
       if(username){
        let valid = usernameRegex.test(username);
        setIsUsernameValid(valid);      
        //username 2- uniqueness validation -> from firebase
        if(valid){
          setUsernameErr('');
         }else {
          setUsernameErr('Username must be 3 to 25 characters long and can only contain letters, numbers, and underscores.');
         }
      }else{
        setIsUsernameValid(true);
        setUsernameErr('');
      }
     
    }

    const CheckUsernameAvailablity = async ()=>{
      const username = usernameRef.current.value;
      if(username){
      const usernameDb = await getDocs(query(collection(database,'users') , where('username', '==', username) , limit(1)))
      .then((usernameDb)=>{
        if(usernameDb.size>0){
          
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
      setUsernameErr('');
    }
    }
  
    const ValidateSignupEmail =()=>{

      const email = emailRef.current.value;

      if(email){
        let valid = emailRegex.test(email);
        setIsEmailValid(emailRegex.test(email));

        
        //email 2- uniqueness validation -> from firebase
        if(valid){
          setEmailErr('');
          //reset email error msg

        }else{
          setEmailErr('Please enter a valid email address.');
        }
    }else{
      setEmailErr('');
      setIsEmailValid(true);
    }
  }
  const CheckEmailAvailablity = async ()=>{
    const email = emailRef.current.value;

      if(email){
        const emailDb = await getDocs(query(collection(database,'users') , where('email', '==', email) , limit(1)))
        .then((emailDb)=>{
          if(emailDb.size>0){

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
        setEmailErr('');
      }
  }

  const ValidateSignupPassword = ()=>{
    const password = passwordRef.current.value;
    if(password){
      const valid =passwordRegex.test(password);
      setIsPasswordValid(valid);

      if(valid){
        setPasswordErr('');
      }else{
        setPasswordErr('Password must be at least 8 characters with 1 lowercase, 1 uppercase, 1 digit, and 1 special character (@ $ ! % * ? &).');
      }
  }else{
    setIsPasswordValid(true);
    setPasswordErr('');
  }
  }

  const userCheckValid = ()=>{
    if(user.username && user.email && user.password){
      if(isEmailValid && isUsernameValid && isPasswordValid && isEmailAvail && isUsernameAvail){
        if(!user.valid){
          dispatch(changeValidState());
        }
      }else{
        if(user.valid){
          dispatch(changeValidState());
        }
      }
    }
  }








    return(
        
        <View style={!localRTl?Style.LoginContainer:Style.LoginContainerRTL}>

        <View style={Style.inputContainer}>
            <Text style={Style.label}>Username</Text>
            <TextInput

            ref={usernameRef}
           onEndEditing={()=>{
            CheckUsernameAvailablity();
            userCheckValid(); 
          }}
            onChangeText={(text)=>{
              usernameRef.current.value = text;
              dispatch(setUsername({username:text}));
              ValidateSignupUsername();
              
              }}
            value={user.username}             
            placeholder="Create your username" underlineColorAndroid="transparent" textContentType="username"    style={Style.inputReg} />
           {!isUsernameValid || !isUsernameAvail ? <Text style={Style.errorMsg}>{usernameErr}</Text> : <></>} 
        </View>
        
        <View style={Style.inputContainer}>
            <Text style={Style.label}>E-mail</Text>
            <TextInput      
              autoCapitalize="none"
              
              ref={emailRef}
              onEndEditing={()=>{
                CheckEmailAvailablity();
                userCheckValid(); 
              }}
              onChangeText={(text)=>{
              emailRef.current.value = text;
              dispatch(setUsermail({email:text}));
              ValidateSignupEmail();
              userCheckValid();
              }} value={user.email}
            placeholder="Enter your e-mail" underlineColorAndroid="transparent" textContentType="emailAddress"   style={Style.inputReg} />

        {!isEmailAvail || !isEmailValid ? <Text style={Style.errorMsg}>{emailErr}</Text> : null }
        </View>
         <View style={!passwordErr? Style.inputContainerPass : Style.inputContainerPassMsg}>

           <View>

         <Text style={Style.label}>Password</Text>
         <View style={!localRTl?Style.passEye:Style.passEyeRTL}>

         <TextInput        
          ref={passwordRef}
          onEndEditing={userCheckValid}
          onChangeText={(text)=>{
            passwordRef.current.value=text;
            dispatch(setUserpassword({password:text}));
            ValidateSignupPassword();
          }} 
          value={user.password} 
         placeholder="Create your password"   secureTextEntry={!showPassword} textContentType="password" style={!localRTl?Style.inputReg2:Style.inputReg2RTL} />

          <TouchableOpacity activeOpacity={1} style={!localRTl?Style.eye:Style.eyeRTL}  onPress={toggleShowPassword} >
         <Feather     name={!showPassword ? 'eye-off' : 'eye'} size={20} color={Color.grey} />
         </TouchableOpacity> 

         </View>
        {!isPasswordValid ? <Text style={Style.errorMsg}>{passwordErr}</Text> : <></>} 
         </View>
        
         

        </View>

        </View>
       
    );
}

export default RegisterScreen;

