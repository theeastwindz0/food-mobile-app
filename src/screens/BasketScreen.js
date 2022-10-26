import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { urlFor } from "../../sanity";
import { basketActions, selectBasketTotal } from "../../store/slices/basketSlice";
const BasketScreen = () => {
  const [groupedItems, setGroupItems] = useState({});
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  const items = useSelector((state) => state.basket.items);
  const navigation = useNavigation();
  const dispatch=useDispatch();
  const basketTotal=useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupItems(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-gray-200">
        <View className=" bg-white flex-row justify-between items-center p-4 shadow-xs">
          <View></View>
          <View>
            <Text className="text-xl font-bold text-center ">Basket</Text>
            <Text className="text-center">{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="circle-with-cross" size={40} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="flex-row p-2 bg-white space-x-4 mt-4 items-center">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-7 h-7 p-4 rounded-full"
          />
          <Text className="flex-1">Delivery in 30 minutes</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItems).map(([key, items]) => (
            <View key={key} className='flex-row items-center space-x-3 px-4 py-2 bg-white'>
              <Text>{items.length} X</Text>
              <Image source={{uri:urlFor(items[0]?.image).url()}} className='w-12 h-12 rounded-full' />
              <Text className='flex-1'>{items[0]?.name}</Text>
              <Text>₹ {items[0]?.price}</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={()=>dispatch(basketActions.removeFromBasket({id:key}))}>
                <Text className='text-[#00CCBB]'>
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='bg-white p-2 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>₹ {basketTotal}</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>₹ 0</Text>
          </View>

          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text>₹ {basketTotal}</Text>
          </View>

          <TouchableOpacity className='bg-[#00CCBB] p-2 rounded-md' onPress={()=>navigation.navigate('PreparingOrder')}>
            <Text className='text-white text-center font-bold text-xl'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
