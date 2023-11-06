import { View, Text ,SafeAreaView, FlatList, TouchableOpacity  } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import Style from "./Style";
import Color from "../../constants/colors";
import { useEffect, useState } from "react";
import HotelCard from "../../components/HotelCard/HotelCard";
import { ImgPath } from "../../constants/images";


const HomeScreen = ({navigation})=>{

    const [greeting, setGreeting] = useState('');
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const [selected,setSelected]=useState(0);

    const HotelsDummy = [
        {id : 0 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :`${ImgPath.hotelImage2}` }
        ,
        {id : 1 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :`${ImgPath.hotelImage1}` }
        ,
        {id : 2 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :`${ImgPath.hotelImage2}` }
        ,
        {id : 3 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :`${ImgPath.hotelImage1}` }
        ,
        {id : 4 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :`${ImgPath.hotelImage2}` }
        ,
        {id : 5 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :`${ImgPath.hotelImage1}` }
        ,
        {id : 6 , hotelName: 'Tropicasa De Hotel' , location : 'Amsterdam, Netherlands' , rate : '4.6' , imgUrl :`${ImgPath.hotelImage2}` }
        ,
        {id : 7 , hotelName: 'Luxe Hotel' , location : 'Jakarta, Indonesia' , rate : '4.3' , imgUrl :`${ImgPath.hotelImage1}` }
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

    return(
        <SafeAreaView style={Style.ScreenContainerSafe} >

        <View style={Style.ScreenContainer}>
            
            <View style={Style.Iconstyle}> 
                {/* Icon section */}
            <Feather name="award" size={24} color={Color.grey} />
            </View>  

        <View style={Style.Greeting}>
            {/* Greeting Section */}
            <Text numberOfLines={2} ellipsizeMode="tail" style={Style.GreetingMsg}>{greeting}, {user.username}!</Text>
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
            renderItem={({item})=>(<HotelCard name={item.hotelName} location={item.location} rate={item.rate} image={item.imgUrl} />)}
            keyExtractor={(item)=>item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={true}

            />   
        </View>

        </View>
        </SafeAreaView>
    );
}



export default HomeScreen;