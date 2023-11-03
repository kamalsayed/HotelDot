import { Text,View,Image} from "react-native";
import Logo from "../../components/Logo/Logo";
import { Style } from "./Style";

import { ImgPath } from "../../constants/images";
const CustomSplashScreen = ()=>{
    return(
        <View style={Style.mainContainer}>
           
           <Image style={Style.top} source={ImgPath.vector}/>

            <View style={Style.mid}>    
                <Logo />
            </View>
            <Image style={Style.bot} source={ImgPath.vector}/>
         </View>
            
    
    );

}

export default CustomSplashScreen;