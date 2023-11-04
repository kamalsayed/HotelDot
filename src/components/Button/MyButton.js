import { useEffect, useState } from "react";
import { Text, TouchableOpacity ,Button } from "react-native";
import Style from "./Style";

const MyButton = ({props})=>{
    const [size,setSize]=useState('small');
    useEffect(()=>{
        setSize(`${props.size}`)
    }
    
    ,[]);
    
    

    return(
    <>
    <TouchableOpacity activeOpacity={1} style={size ==='small' ? Style.button : Style.buttonL} onPress={()=>{props.onCallback()}}>
        {size === 'small' ?  
            <Text style={Style.small}> {props.Action} </Text> :
            <Text style={Style.large}> {props.Action} </Text>
        }
      
    </TouchableOpacity>
    </>
    );
}

export default MyButton;