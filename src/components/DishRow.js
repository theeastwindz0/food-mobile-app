import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { urlFor } from "../../sanity";
import {FontAwesome} from '@expo/vector-icons'
import {useDispatch,useSelector} from 'react-redux'
import { basketActions } from "../../store/slices/basketSlice";
const DishRow = ({ id, name, description, price, image }) => {

  const items=useSelector((state)=>state.basket.items.filter((item)=>item.id===id))
  const [isPressed, setIsPressed] = useState(false);
  const dispatch=useDispatch();
  const addItemToBasket=()=>{
    dispatch(basketActions.addToBasket({id,name,description,price,image}));
  }

  const removeItemFromBasket=()=>{
    if(items.length===0)return
    dispatch(basketActions.removeFromBasket({id}));
  }
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white   px-4 py-2 ${!isPressed ? 'border-b-[1px] border-gray-200':''}`}
        activeOpacity={0.8}
      >
        <View className="flex-row">
          <View className="flex-1 space-y-1 pr-2">
            <Text className="text-xl font-semibold">{name}</Text>
            <Text className="text-gray-500">{description}</Text>
            <Text className="text-gray-500">₹{price}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && 
      <View className='px-4 flex-row items-center space-x-2 p-2'>
    <TouchableOpacity activeOpacity={0.8} onPress={removeItemFromBasket} disabled={!items.length}>
        <FontAwesome size={28} name='minus-circle' color={`${items.length>0 ? '#00ADB5' : 'gray' }`}/>
    </TouchableOpacity>

    <Text>{items.length}</Text>

    <TouchableOpacity activeOpacity={0.8} onPress={addItemToBasket}>
        <FontAwesome size={28} name='plus-circle' color='#00ADB5'/>
    </TouchableOpacity>
    </View>}
    </>
  );
};

export default DishRow;
