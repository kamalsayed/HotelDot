import { View , Text ,Image } from "react-native";
import {ImgPath} from '../../constants/images';
import { Style } from "./Style";
import { useEffect, useState } from "react";

const Logo = ({props})=>{
    const [splash,setSplash] = useState(1);
    useEffect(()=>{
     setSplash(props.type);
    },[]);
    return(
        <>
        {splash? <View style={Style.imgContainer}>          
        <Image style={Style.imgStyle} source={ImgPath.logo} />
        </View> : 
        <View style={Style.imgLoginContainer}>          
        <Image style={Style.imgLoginStyle} source={ImgPath.logo} />
        </View>
        }
        </>
        
    );
}

export default Logo;