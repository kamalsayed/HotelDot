import { Text,Image,View,SafeAreaView } from "react-native";
import { ImgPath } from "../../constants/images";
import MyButton from "../../components/Button/MyButton";
import Style from "./Style";
import { useCallback } from "react";


const OnboardingScreen = ({navigation})=>{

    const go = useCallback(()=>{
        navigation.navigate('Auth');
    },[]);

    return(
        <>
        <SafeAreaView>
        <View>
            <View>
                <Image style={Style.Img} source={ImgPath.onboard} />
            </View>

            <View style={Style.txtContainer}>
            <Text style={Style.Header}>
                Travel with no worry
            </Text>
            <Text style={Style.paragraph}>
                You can now experience the next level travel experience for hotel bookings.
            </Text>
            </View>

            
        </View>

            <View style={Style.btn}>
           <MyButton  props={{Action:"Next",size:"small",onCallback:go}} />
           </View>
           </SafeAreaView>
        </>
    );

}

export default OnboardingScreen;