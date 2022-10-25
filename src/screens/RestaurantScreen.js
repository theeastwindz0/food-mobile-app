import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
const RestaurantScreen = () => {
  // const route=useRoute();
  //Clever Destructing , lol
  const {
    params: {
      id,
      imageUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();



  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <ScrollView className='mb-4' showsVerticalScrollIndicator={false}>
        
      <View className="relative">
        <Image
          source={{ uri: urlFor(imageUrl).url() }}
          className="w-full h-56 bg-gray-200 p-4 "
        />
        <TouchableOpacity
          className="absolute top-8 left-2"
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle" size={48} color="white" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-2 space-y-2">
          <Text className="text-2xl font-bold">{title}</Text>
          <View className="flex-row items-center space-x-2">
            <Ionicons name="star" size={20} color="green" />
            <Text className="text-green-500">{rating}</Text>
            <Ionicons name="location" size={20} color="black" />
            {/* <Text className='text-xs'>{address}</Text> */}
          </View>
          <Text className="text-gray-500">{short_description}</Text>

          <TouchableOpacity
            activeOpacity={0.4}
            className="flex-row py-2 items-center space-x-2"
          >
            <FontAwesome name="question-circle-o" size={24} color="black" />
            <Text className="flex-1">Have a food allergy ?</Text>
            <Ionicons name="arrow-forward" size={24} color="#00CCBB" />
          </TouchableOpacity>

        </View>
          <View className='bg-white '>
            <Text className='text-xl font-bold p-4 '>Menu</Text>
            {dishes.map((item,i)=>
            <DishRow key={item._id} 
            id={item._id}
            name={item.name}
            description={item.short_description}
            price={item.price}
            image={item.image}
            />)}
          </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
