import { View, Text ,SafeAreaView, FlatList, TouchableOpacity  } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import Style from "./Style";
import Color from "../../constants/colors";
import { useEffect, useState } from "react";
import HotelCard from "../../components/HotelCard/HotelCard";
import { ImgPath } from "../../constants/images";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from "../Auth/configuration";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUsermail, setUsername, setUserpassword } from "../../Redux/userSlice";

const HomeScreen = ({navigation})=>{

    const [greeting, setGreeting] = useState('');
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const [selected,setSelected]=useState(0);
    const [name,setName]=useState('');

    const HotelsDummy = [
        {id : 0 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :ImgPath.hotelImage2 ,details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"1763"}
        ,
        {id : 1 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :ImgPath.hotelImage1 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"1765"}
        ,
        {id : 2 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :ImgPath.hotelImage2 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"1502"}
        ,
        {id : 3 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :ImgPath.hotelImage1 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"1302"}
        ,
        {id : 4 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :ImgPath.hotelImage2 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"2210"}
        ,
        {id : 5 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :ImgPath.hotelImage1 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"7832"}
        ,
        {id : 6 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :ImgPath.hotelImage2 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"1532"}
        ,
        {id : 7 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :ImgPath.hotelImage1 , details_1:"Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you." , details_2:"Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby." , details_3 :"You will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.",reviews:"3333"}
    ]

    useEffect(() => {
        
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good Afternoon');
        } else if (currentHour >= 17 && currentHour < 20) {
        setGreeting('Good Evening');
        } else {
        setGreeting('Good Night');
        }

    
  }, []);

    useEffect(()=>{
        const checkUser =async()=>{

            if(user.email.length == 0){
            const [mail,name,password] = await AsyncStorage.multiGet(['mail','name','password']);
           
           console.log(name[1]);
            
            setName(name[1]);
            
            if(user.email==='') {
               const usernameLogin = await signInWithEmailAndPassword(auth,mail[1], password[1]);

               if(usernameLogin){
                dispatch(setUsermail({email:mail[1]}));
                dispatch(setUsername({username:name[1]}));
                dispatch(setUserpassword({password:password[1]}));
               }
            }
            
        }else if (user.email){
            setName(user.username)
        }
        
    }

        checkUser();
     
        

},[]);




    return(
        <SafeAreaView style={Style.ScreenContainerSafe} >

        <View style={Style.ScreenContainer}>
            
            <View  style={Style.Iconstyle}> 
                {/* Icon section */}
            <TouchableOpacity onPress={()=>{
                auth.signOut();
            }}>
            <Feather name="award" size={24} color={Color.grey} />
            </TouchableOpacity>
            </View>  

        <View style={Style.Greeting}>
            {/* Greeting Section */}
            <Text numberOfLines={2} ellipsizeMode="tail" style={Style.GreetingMsg}>{greeting},</Text>
            <Text numberOfLines={2} ellipsizeMode="tail" style={Style.GreetingMsg}>{name}!</Text>
        </View>

        <View style={Style.categoriesContainer}>

        <View style={Style.selectCategories}>
            {/* Choose categories */}

            <TouchableOpacity onPress={()=>{setSelected(0)}} style={Style.categories}>
            <Text style={selected == 0 ? Style.Selected : Style.NotSelected}>Recommend</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setSelected(1)}} style={Style.categories}> 
            <Text style={selected == 1 ? Style.Selected : Style.NotSelected}>Popular</Text> 
            </TouchableOpacity>

           <TouchableOpacity onPress={()=>{setSelected(2)}} style={Style.categories}>
           <Text style={selected == 2 ? Style.Selected : Style.NotSelected}>Trending</Text>
           </TouchableOpacity>
            
            
        </View>

        <View style={Style.pointerContainer}>

            {selected == 0 ? <Text style={{color:Color.success , fontSize:75,lineHeight:30,marginEnd:'2%'}}>.</Text> : <></>}
            
            {selected == 1 ? <Text style={{color:Color.success , fontSize:75,lineHeight:30,marginStart:'50%'}}>.</Text> :<></>}

            {selected == 2 ?  <Text style={{color:Color.success , fontSize:75,lineHeight:30,marginStart:'93%'}}>.</Text> : <></>}
            
            
            

           

        </View>
        
       </View>

        <View style={Style.Hotels}>
            <FlatList
            data={HotelsDummy}
            renderItem={({item})=>(
            
            <HotelCard  name={item.hotelName} 
                        location={item.location} 
                        rate={item.rate} 
                        image={item.imgUrl}  
                        navigation={navigation} 
                        details = {{d1 :item.details_1 , d2: item.details_2 , d3 : item.details_3}}
                        totalReview ={item.reviews}
                        />
          
            )}
            keyExtractor={(item)=>item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={true}
            initialNumToRender={2}
            />   
        </View>

        </View>
        </SafeAreaView>
    );
}



export default HomeScreen;