import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const Style = StyleSheet.create({
    container:{
        marginEnd:25,
        //width:'100%'
        borderRadius: 25,
        overflow: 'hidden',
        //backgroundColor: 'linear-gradient(180deg, rgba(36, 36, 36, 0.00) 52.71%, #3C3C3C 95.95%)',
    },
    image:{
        width:256,
        height:424,
        resizeMode:'cover',
        borderRadius:25,
        flexShrink:0,
        backgroundColor: 'transparent',
        
        
    },
    cardInside:{
        flex:1,
        zIndex:1000 ,
        position:'absolute',
        width:'100%',
        height:'90%'
        
    },
    rateRectangle:{
        flexDirection:'row',
        width:'30%',
        paddingHorizontal:'4%',
        paddingVertical:'3.5%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'rgba(62, 62, 62, 0.6)',
        alignSelf:'flex-end',
        marginEnd:10,
        marginTop:10,
    },
    rateTxt:{
        fontFamily:'NunitoSans_400Regular',
        fontSize:14,
        color:`${Color.white}`,
        fontWeight:'600',
    },
    name:{
        letterSpacing:0.5,
        fontFamily:'NunitoSans_700Bold',
        fontSize:20,
        fontWeight:'700',
        lineHeight:30,
        color:`${Color.white}`,
        marginStart:24,
        top:'68%',
    },
    location:{
        fontFamily:'NunitoSans_700Bold',
        fontSize:14,
        fontWeight:'600',
        lineHeight:30,
        color:`${Color.white}`,
        marginStart:24,
        top:'69%',

    },
    gradientContainer:{
        overflow:'hidden',
        borderRadius:25,
       ...StyleSheet.absoluteFillObject,
    }

});

export default Style;