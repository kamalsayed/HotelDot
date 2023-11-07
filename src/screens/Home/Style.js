import { StyleSheet } from "react-native";
import Color from "../../constants/colors";


const Style = StyleSheet.create({
    ScreenContainerSafe:{
        flex:1,
        //marginTop:'10%',
        //marginHorizontal:'5%',
        
        backgroundColor:`${Color.white}`,
    },
    ScreenContainer:{
        flex:1,
        marginTop:'10%',
        marginHorizontal:'5%',
        backgroundColor:`${Color.white}`,
    },
    Greeting:{
        flex:2,
    },

    Iconstyle:{
        flex:1,
       alignSelf:'flex-end',
       justifyContent:'flex-end',
       marginBottom:'10%',
       marginEnd:'6%'
    },
    GreetingMsg:{
        fontSize:28,
        fontFamily:'NunitoSans_400Regular',
        fontWeight:"800",
        width:"65%",
        lineHeight:50,
    },
    categories:{
        marginEnd:'10%',
    },
    selectCategories:{
        flex:1.5,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    Selected:{
        marginEnd:'5%',
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'bold',
        fontSize:18,
        color:`${Color.dark}`,
    }
    ,
    NotSelected:{
        marginEnd:'5%',
        fontFamily:'NunitoSans_400Regular',
        fontWeight:'100',
        fontSize:18,
        color:`${Color.grey}`,
    },
    SelectedPointer:{
        flex:1,
        width:'100%',
        height:'100%',
        color:`${Color.success}`,
        borderRadius:9999,  
        
        
    },
    categoriesContainer:{
        flex:1,
        marginTop:"10%",
        flexDirection:'column',
        paddingVertical:'5%',
    },
    pointerContainer:{
        flex:1,
        flexDirection:'row',
        
        justifyContent:'space-between',
        paddingHorizontal:'9%',
        marginLeft:'2%'

        
        

    },
    Hotels:{
        flex:10,
        //width:'100%',
        flexDirection:'row',
        
        
       
    }


});

export default Style;