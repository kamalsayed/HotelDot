import { Text,Image,View,SafeAreaView ,Alert} from "react-native";
import Logo from "../../components/Logo/Logo";
import Style from "./Style";
import { auth } from "./configuration";


const AuthScreen = ()=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Account created successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Logged in successfully');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };




    return(
        <SafeAreaView>
            <View style={Style.logo}>
            <Logo props={{type:0}} />
            </View>
        <View style={Style.AuthSelect}>
            <Text>Login</Text>
            <Text>Sign Up</Text>
        </View>
        </SafeAreaView>
    )
}

export default AuthScreen;