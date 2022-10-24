import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import client from "../../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  console.log(id)
  useEffect(() => {
    client
      .fetch(
        `*[_type=='featured' && _id==$id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          type->{
          name
        }
        }
      }
    }[0]`,
        { id:id }
      )
      .then((data) => {
        console.log(data?.restaurants)
        setRestaurants(data?.restaurants)
      });
  }, []);



  return (
    <View className="pt-4">
      <View className="flex-row justify-between">
        <Text className="text-lg font-bold">{title}</Text>
        <Ionicons name="arrow-forward" size={24} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 ">{description}</Text>

      <ScrollView
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((item, i) => 
          <RestaurantCard
            key={item._id}
            id={item._id}
            imageUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type?.name}
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
