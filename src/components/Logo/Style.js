import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

export const Style = StyleSheet.create({
    imgContainer:{
        
        borderRadius:5,
        backgroundColor:`${Color.white}`
    },
    imgStyle:{
        margin:20,
        resizeMode:'contain',
        height:30,
        width:30,
    },
    imgLoginStyle:{
        margin:20,
        resizeMode:'contain',
        height:25,
        width:25,
        tintColor:`${Color.white}`,
    },
    imgLoginContainer:{
        borderRadius:5,
        backgroundColor:`${Color.darkgreen}`
    }

});