import { Text,Image,View,SafeAreaView } from "react-native";
import { ImgPath } from "../../constants/images";
import MyButton from "../../components/Button/MyButton";
import Style from "./Style";
import { useCallback, useEffect } from "react";
import { ResetUser } from "../../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const OnboardingScreen = ({navigation})=>{
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    const go = useCallback(()=>{
        navigation.navigate('Auth');
    },[]);

    useEffect(()=>{
        dispatch(ResetUser());
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
           <MyButton onCallback={go}  props={{Action:"Next",size:"small"}} />
           </View>
           </SafeAreaView>
        </>
    );

}

export default OnboardingScreen;