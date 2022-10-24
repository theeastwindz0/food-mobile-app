import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { urlFor } from "../../sanity";
const RestaurantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} className='bg-white shadow-md  w-64 mr-4'>
        <Image source={{uri:urlFor(imageUrl).url()}} className='h-36 w-64'/>
        <View className='p-2'>
            <Text className='text-lg font-bold'>{title}</Text>
            <View className='flex-row items-center space-x-2'>
                <Ionicons name="star" size={24} color='green' />
                <Text className='text-xs text-gray-500'>
                    <Text className='text-green-500'>{rating}</Text> . {genre}
                </Text>
            </View>
            <View className='flex-row items-center opacity-50'>
            <Ionicons name="location" size={24}  />
            <Text>Nearby {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
