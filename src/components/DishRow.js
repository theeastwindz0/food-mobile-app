import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { urlFor } from "../../sanity";
import {FontAwesome} from '@expo/vector-icons'
const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
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
    <TouchableOpacity activeOpacity={0.8}>
        <FontAwesome size={28} name='minus-circle' color='#00CCBB'/>
    </TouchableOpacity>

    <Text>0</Text>

    <TouchableOpacity activeOpacity={0.8}>
        <FontAwesome size={28} name='plus-circle' color='#00CCBB'/>
    </TouchableOpacity>
    </View>}
    </>
  );
};

export default DishRow;
