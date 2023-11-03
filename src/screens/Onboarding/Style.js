import { StyleSheet } from "react-native";
import Color from "../../constants/colors";

const Style = StyleSheet.create({
 Img:{
    borderTopRightRadius:35,
    borderBottomRightRadius:35,
    marginRight:5,
    height:'77%',
    width:'88%',
    top:'8%',
    resizeMode:'cover'
 },
 Header:{
    fontFamily:'NunitoSans_700Bold',
    fontWeight:'700',
    fontSize:24,
    lineHeight:33,
    color:`${Color.dark}`,
    marginBottom:15
   // left:25
 },
 paragraph:{
    fontFamily:'NunitoSans_400Regular',
    fontWeight:'400',
    fontSize:16,
    lineHeight:28,
    color:`${Color.lightdark}`,
   // left:25
 },
 txtContainer:{
    marginHorizontal:25,
    flex:1,
    
 },
 btn:{
   marginTop:'25%',
    
 }
});

export default Style;