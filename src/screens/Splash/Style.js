import { StyleSheet } from "react-native";
import Color from "../../constants/colors";
export const Style=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:`${Color.darkgreen}`,
        flexDirection:'column',

    },
    mainContainerRTL:{
        flex:1,
        backgroundColor:`${Color.darkgreen}`,
        flexDirection:'column',
        justifyContent:'flex-end',
        
    },
    mid:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       resizeMode:'contain'
    }
    ,bot:{
        tintColor:`${Color.white}`,
        alignSelf:'flex-end',
        resizeMode:'contain',
  
    },
   
    top:{
        tintColor:`${Color.white}`,
        transform: [{rotate: '-180deg'}],
        resizeMode:'contain',
        alignSelf:'flex-start'
    },
   
   
});