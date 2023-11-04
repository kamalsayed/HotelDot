import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const Style = StyleSheet.create({
    small:{
        color:`${Color.white}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'700',
        fontSize:18,
        lineHeight:24.5,
        alignSelf:'center',
    },
    large:{
        
        color:`${Color.white}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'700',
        fontSize:18,
        lineHeight:24.5,
        alignSelf:'center',
        
    },
    buttonL:{
        paddingVertical:15,
        paddingHorizontal:'30%',
        marginHorizontal:'1%',
        borderRadius:25,
        backgroundColor:`${Color.success}`,
        width:'90%',
        alignSelf:'center'
    },
    button:{
        paddingVertical:15,
        //paddingHorizontal:'15%',
        borderRadius:25,
        backgroundColor:`${Color.success}`,
        width:'50%',
        alignSelf:'center',
        marginBottom:0,
    }

});


export default Style;