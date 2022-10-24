import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
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
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 ">
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

      <ScrollView className="bg-gray-100 p-2 pt-4">
        <Categories />

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid Placements from our partners !"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone been enjoying the juicy dicsounts !"
        />
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Why not support your local restaurant tonight !"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
