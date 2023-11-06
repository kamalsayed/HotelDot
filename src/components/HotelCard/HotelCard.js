import { View , Text , Image } from "react-native";
import Style from "./Style";
import { AntDesign } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { LinearGradient } from 'expo-linear-gradient';

const HotelCard = ({name,location,rate,image})=>{

    return(
       
      
    
        <View style={Style.container}> 
           
            <View style={Style.cardInside}>
            <LinearGradient
            colors={['rgba(36, 36, 36, 0.00)', '#3C3C3C']}
            style={Style.gradientContainer}
             >
            <View style={Style.rateRectangle}>

                <AntDesign name="star" size={20} color={Color.yellow} />    
                <Text style={Style.rateTxt}>{rate}</Text>
                
            
            </View> 
            
            <Text style={Style.name}>{name}</Text>
            <Text style={Style.location}>{location}</Text>
            </LinearGradient>
            </View>
            
            <Image source={image} style={Style.image}  />
            
        </View>
        
    );

}

export default HotelCard;