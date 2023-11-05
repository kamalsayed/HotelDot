import { useEffect, useState } from "react";
import { Text, TouchableOpacity ,Button } from "react-native";
import Style from "./Style";
import { useSelector, useDispatch } from 'react-redux';

const MyButton = ({props,onCallback})=>{
    const user = useSelector((state) => state.users.user);
    const [size,setSize]=useState('small');
    useEffect(()=>{
        setSize(`${props.size}`)
    }
    
    ,[]);
    
    

    return(
    <>
    <TouchableOpacity activeOpacity={1} style={size ==='small' ? Style.button : Style.buttonL} onPress={()=>{
        if(user.username !== ''){
            if(user.username == user.email){
                onCallback(user,0);
            }else{
                onCallback(user,1);
            }
        }else{
            onCallback();
        }
    }}>
        {size === 'small' ?  
            <Text style={Style.small}> {props.Action} </Text> :
            <Text style={Style.large}> {props.Action} </Text>
        }
      
    </TouchableOpacity>
    </>
    );
}

export default MyButton;