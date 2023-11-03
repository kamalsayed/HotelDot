import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const Style = StyleSheet.create({
    small:{
        paddingVertical:15,
        paddingHorizontal:'15%',
        borderRadius:25,
        backgroundColor:`${Color.darkgreen}`,
        color:`${Color.white}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'700',
        fontSize:18,
        lineHeight:24.5,
        alignSelf:'center',
    },
    large:{
        paddingVertical:15,
        paddingHorizontal:'38%',
        borderRadius:25,
        backgroundColor:`${Color.darkgreen}`,
        color:`${Color.white}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'700',
        fontSize:18,
        lineHeight:24.5,
        alignSelf:'center',
    },
    button:{
       
    }

});


export default Style;