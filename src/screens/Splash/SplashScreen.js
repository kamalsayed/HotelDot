import { Text,View} from "react-native";
import Logo from "../../components/Logo/Logo";
import { Style } from "./Style";
const SplashScreen = ()=>{
    return(
    <View style={Style.mainContainer}>
        <Logo />
    </View>
    );

}

export default SplashScreen;