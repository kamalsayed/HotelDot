import { Image, ScrollView, Text, View } from "react-native"
import Color from "../../constants/colors";
import MyButton from "../../components/Button/MyButton";
import { AntDesign } from '@expo/vector-icons';
import Style from "./Style";
import { useSelector } from "react-redux";

const DetailsScreen = ({route})=>{
    const receivedData = route.params?.data || {};
    const img = route.params?.img || {};
    const name = route.params?.name || {};
    const location = route.params?.location || {};
    const rate = route.params?.rate || {};
    const review = route.params?.review || {};
    const localRTl = useSelector((state) => state.localizationState.isRTL);
    return(
        <ScrollView style={Style.outerContainer}>
        <View style={Style.ScreenContainer}>

          
            <View style={!localRTl?Style.SmallCardContainer:Style.SmallCardContainerRTL}>

                <View style={Style.imgContainer}>
                <Image source={img} style={Style.smallImage}  />
                </View>

                <View style={Style.rightDetailsContainer}>

                <Text style={Style.hotelName}>{name}</Text>
                <Text style={Style.hotelLocation}>{location}</Text>   

                <View style={!localRTl?Style.rateContainer:Style.rateContainerRTL}>

                    <AntDesign name="star" size={20} color={Color.yellow} /> 
                    <Text style={Style.hotelRate}>{rate}</Text>
                    <Text style={Style.totalReview}>({review} Reviews)</Text>

                </View>

                </View>

            </View>  

            <View style={Style.detailsContainer}>

            <Text style={Style.details}>{receivedData.d1}</Text>
            <Text style={Style.details}>{receivedData.d2}</Text>    
            <Text style={Style.details}>{receivedData.d3}</Text>
            
            </View>      

            <View style={Style.btnContainer}>
            <MyButton onCallback={()=>{}}  props={{Action:"Book",size:"small"}} />

            </View>



        </View>

        </ScrollView>
    )
}

export default DetailsScreen;