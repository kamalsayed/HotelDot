import { Text,View,Image} from "react-native";
import Logo from "../../components/Logo/Logo";
import { Style } from "./Style";
import { ImgPath } from "../../constants/images";
import { useSelector } from "react-redux";

const CustomSplashScreen = ()=>{
    const localRTl = useSelector((state) => state.localizationState.isRTL);
    return(
        <View style={!localRTl?Style.mainContainer:Style.mainContainerRTL}>
           
           <Image style={!localRTl?Style.top:Style.topRTl} source={ImgPath.vector}/>

            <View style={Style.mid}>    
                <Logo props={{type:1}} />
            </View>
            <Image style={!localRTl?Style.bot:Style.botRTL} source={ImgPath.vector}/>
         </View>
            
    
    );

}

export default CustomSplashScreen;