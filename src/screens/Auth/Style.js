import { StyleSheet } from "react-native";
import Color from "../../constants/colors";


const Style = StyleSheet.create({
    logo:{
        //flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
        marginTop:'15%',
    },
    Headers:{
        felx:1,
        flexDirection:'row',
        backgroundColor:`${Color.white}`,
        height:66,
       // marginVertical:'10%',
        alignItems:'center',
        
    },
    HeadersRTL:{
        felx:1,
        flexDirection:'row',
        backgroundColor:`${Color.white}`,
        height:66,
       // marginVertical:'10%',
        alignItems:'center',
        
    },
    AuthSelect:{
        borderColor:`${Color.success}`,
        flex:1,
        borderBottomWidth:2,
        
        alignItems:'center',
        
        justifyContent:'center',
        height:'100%' 
    },
    AuthNoSelect:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'600',
        
    },
    selected:{
        color:`${Color.dark}`,
        fontFamily:'NunitoSans_700Bold',
        fontWeight:'700',
        fontSize:18,
        lineHeight:28,
    },
    notSelect:{
        color:`${Color.grey}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'600',
        fontSize:18,
        lineHeight:28,
    },
    AuthScreen:{
        backgroundColor:'#FAFAFA',
        flex:1,
        
    },
    //// Login Style
    AuthContainer:{
        
        flexDirection:'column',
        marginHorizontal:'8%',
        marginTop:'1%',
        marginBottom:'10%',
        overflow:'hidden',
        width:'85%',
        height:'100%',
    },
    LoginContainer:{
        paddingTop:'10%',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'flex-start',
      
        
    },LoginContainerRTL:{
        paddingTop:'10%',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'flex-end',
      
        
    },
    inputContainer:{
       
        flexDirection:'column',
        justifyContent:'space-between',
        alignContent:'center',
        marginBottom:'12%',
        overflow:'hidden',
        width:'100%',
        
        
    },
    eye:{
        zIndex:1000,
        position:'absolute',
        alignSelf:'center',
        end:'5%',
   
    },
    eyeRTL:{
        zIndex:1000,
        position:'absolute',
        alignSelf:'center',
        end:'90%',
   
    },
   passEye:{
    flexDirection:'row',
    justifyContent:'space-between'
   },
   passEyeRTL:{
    flexDirection:'row-reverse',
    justifyContent:'space-between'
   },
    inputContainerPass:{
        alignContent:'center',
        marginBottom:'12%',
        overflow:'hidden',
        width:'100%',
 
    },
    inputContainerPassMsg:{
        alignContent:'center',
        marginBottom:'3%',
        overflow:'hidden',
        width:'100%',
 
    },
    label:{
        fontSize:16,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'600',
        lineHeight:22,
        marginBottom:'6%',
        color:`${Color.dark}`
    },
    input:{
        paddingHorizontal:'8%',
        width:'100%',
        paddingVertical:15,
        borderRadius:25,
        overflow:'hidden',
        backgroundColor:`${Color.white}`,
        color:`${Color.dark}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:"600",
        fontSize:16,
        lineHeight:22,
        shadowColor:'#939393',
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.1,
        shadowRadius:75,
        textAlign:'left',    
        
    },
    inputReg:{
        
        paddingHorizontal:'8%',
        width:'100%',
        paddingVertical:15,
        borderRadius:25,
        overflow:'hidden',
        backgroundColor:`${Color.white}`,
        color:`${Color.dark}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:"600",
        fontSize:14,
        lineHeight:22,
        shadowColor:'#939393',
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.1,
        shadowRadius:75,
        textAlign:'left',    
        
    },
    questionContainer:{
        alignSelf:'flex-end',
        marginBottom:'5%',
    },
    questionContainerRTL:{
        alignSelf:'flex-start',
        marginBottom:'5%',
    },
    questionBtn:{

    },
    questionBtnTxt:{
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'400',
        fontSize:14,
        lineHeight:25,
        color:`${Color.lightdark}`,
    },
    errorMsg:{
        fontSize:10,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'100',
        lineHeight:13,
        color:`${Color.error}`,
    }

    ,

    inputReg2:{
        flex:1,
        paddingHorizontal:'8%',
        width:'100%',
        paddingVertical:15,
        borderRadius:25,
        overflow:'hidden',
        backgroundColor:`${Color.white}`,
        color:`${Color.dark}`,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:"600",
        fontSize:14,
        lineHeight:22,
        shadowColor:'#939393',
        shadowOffset:{width:0,height:10},
        shadowOpacity:0.1,
        shadowRadius:75,
        textAlign:'left',    
        
    },
});

export default Style;