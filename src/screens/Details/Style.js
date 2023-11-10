import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const Style = StyleSheet.create({
    outerContainer:{
        flex:1,
        backgroundColor: `${Color.screen}` ,
    },
    ScreenContainer:{  
        flex:1,
        marginHorizontal:'5%',
        

    },
    rightDetailsContainer:{
        flex:2,
        flexDirection:'column',
        justifyContent:'space-around',
        height:'80%',
        

    },
    imgContainer:{
        flex:1,
        marginStart:15,
    
    },
    SmallCardContainer:{
        flex:2,
        backgroundColor: `${Color.white}` ,
        flexDirection:'row',
        height:125,
        borderRadius:10,
        marginBottom:35,
        marginTop:15,
        justifyContent:"space-around",
        alignItems:'center'
    },
    SmallCardContainerRTL:{
        flex:2,
        backgroundColor: `${Color.white}` ,
        flexDirection:'row-reverse',
        height:125,
        borderRadius:10,
        marginBottom:35,
        marginTop:15,
        justifyContent:"space-around",
        alignItems:'center'
    },
    smallImage:{
        width:95,
        height:95,
        resizeMode:'cover',
        borderRadius:6,
    },
    hotelName:{
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'700',
        fontSize:18,
        letterSpacing:0.7,
        color:`${Color.dark}`,
        
    },
    hotelLocation:{
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'300',
        fontSize:14,
        
        color:`${Color.grey}`,
    },
    rateContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between',
        alignItems:'baseline',
        marginEnd:'20%'
    },
    rateContainerRTL:{
        flexDirection:'row-reverse',
        alignContent:'center',
        justifyContent:'space-between',
        alignItems:'baseline',
        marginEnd:'20%'
    },
    hotelRate:{
        color:`${Color.yellow}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'700',
        fontSize:15,
    },
    totalReview:{
        color:`${Color.grey}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'400',
        fontSize:14,
        lineHeight:25,
    },
    detailsContainer:{
        flex:8,
        flexDirection:'column',
        justifyContent:'space-between',
        marginBottom:75,
    },
    details:{
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'400',
        fontSize:14,
        lineHeight:25,
        color:`${Color.lightdark}`,
        marginBottom:25,
    },
    btnContainer:{
        flex:1,
    }
});

export default Style;