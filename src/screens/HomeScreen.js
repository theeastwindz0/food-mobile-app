import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SanityClient from "../../sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories]=useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(()=>{
    SanityClient.fetch(`*[_type=='featured']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...,
        }
      }
    }`).then(data=>setFeaturedCategories(data))
  },[])
  return (
    <SafeAreaView className="bg-white flex-1 " >
      <View className="px-2 pb-2">
        <View className="flex-row space-x-4 ">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-7 h-7 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-slate-400">Delivery Now!</Text>
            <Text className="text-xl font-bold">Current Location</Text>
          </View>
          <Ionicons name="person" size={24} color="#00CCBB" className="" />
        </View>

        <View className="flex-row items-center space-x-2">
          <View className="flex-row flex-1 bg-gray-200 p-2">
            <Ionicons name="search" size={24} color="#00CCBB" />
            <TextInput
              placeholder="Restaurants and Cafes"
              keyboardType="default"
            />
          </View>
          <Ionicons name="filter-outline" size={24} color="#00CCBB" />
        </View>
      </View>

      <ScrollView className="bg-gray-100 p-2 pt-4 pb-4" showsVerticalScrollIndicator={false}>
        <Categories />
        {featuredCategories.map((item,i)=>
        <FeaturedRow
          key={i}
          id={item._id}
          title={item.name}
          description={item.short_description}
        />
        )}

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
