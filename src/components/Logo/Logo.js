import { View , Text ,Image } from "react-native";
import {ImgPath} from '../../constants/images';
import { Style } from "./Style";

const Logo = ()=>{
    return(
        <View style={Style.imgContainer}>
            <Image style={Style.imgStyle} source={ImgPath.logo} />
        </View>
    );
}

export default Logo;