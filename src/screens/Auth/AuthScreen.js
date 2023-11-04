import { Text,Image,View,SafeAreaView } from "react-native";
import Logo from "../../components/Logo/Logo";
import Style from "./Style";

const AuthScreen = ()=>{
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