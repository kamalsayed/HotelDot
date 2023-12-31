import { View , Text , Image, TouchableOpacity } from "react-native";
import Style from "./Style";
import { AntDesign } from '@expo/vector-icons';
import Color from "../../constants/colors";
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from "react";
import { useSelector } from "react-redux";

const HotelCard = ({name,location,rate,image,details , totalReview , navigation})=>{

    const localRTl = useSelector((state) => state.localizationState.isRTL);
    return(
       
       
    
        <View style={!localRTl?Style.container:Style.containerRTL}> 
            <View style={Style.cardInside}>
                
            <TouchableOpacity 
            
            style={
            {borderRadius: 25,
                width:256,
                height:424,
            }
            }
            onPress={()=>{navigation.navigate('Description' , {data: details , img: image ,name: name ,location: location ,rate: rate, review : totalReview})}}
            >
            <LinearGradient
            colors={['rgba(36, 36, 36, 0.00)', '#3C3C3C']}
            style={Style.gradientContainer}
             >
            <View style={!localRTl?Style.rateRectangle:Style.rateRectangleRTL}>

                <AntDesign name="star" size={20} color={Color.yellow} />    
                <Text style={Style.rateTxt}>{rate}</Text>
                
            
            </View> 
            
            <Text style={!localRTl?Style.name:Style.nameRTL}>{name}</Text>
            <Text style={!localRTl?Style.location:Style.locationRTL}>{location}</Text>
            </LinearGradient>
             </TouchableOpacity>  
            </View>
            
            <Image source={image} style={Style.image}  />
            
        </View>
      
    );

}

export default HotelCard;