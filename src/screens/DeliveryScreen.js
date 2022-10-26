import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from "@expo/vector-icons";
import MapView, { Marker } from 'react-native-maps'
const DeliveryScreen = () => {
    const navigation=useNavigation();
    const restaurant=useSelector((state)=>state.restaurant.restaurant)
  return (
    <View className='flex-1 bg-[#00ADB5]'> 
    <SafeAreaView>
    <View className='p-2 flex-row justify-between items-center'>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('Home')}>
        <Entypo name="circle-with-cross" size={40} color="white" />
        </TouchableOpacity>
        <Text className=' text-lg text-white font-light'>Order Help</Text>
    </View>
    </SafeAreaView>
    <View className='bg-white mx-4  p-6 rounded-md z-10 shadow-md '>
        <View className='flex-row justify-between'>
        <View>
            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
            <Text className='text-4xl font-bold textwhite'>25-30 Minutes</Text>
        </View>
        <Image source={{uri:'https://links.papareact.com/fls'}} className='h-20 w-20' />
        </View>
        <Text className='text-gray-600 mt-2 '>
            Your order at {restaurant.title} is begin prepared.
        </Text>
    </View>

    <MapView initialRegion={{
        latitude:restaurant.lat,
        longitude:restaurant.long,
        latitudeDelta:0.005,
        longitudeDelta:0.005
    }} className='flex-1 -mt-10 z-0' mapType='mutedStandard'>
    <Marker coordinate={{
        latitude:restaurant.lat,
        longitude:restaurant.long
    }}
    title={restaurant.title}
    identifier='origin'
    pinColor='#00ADB5'
    />
    </MapView>
    <View className='bg-white flex-row space-x-5 p-2 pb-10 items-center'>
    <Image source={{uri:'https://links.papareact.com/wru'}} className='w-10 h-10 rounded-full'/>
    <View className='flex-1 '>
        <Text className='text-lg'>Himanshu Chauhan</Text>
        <Text className='text-gray-400'>Your Rider</Text>
    </View>
    <Text className='text-[#00ADB5] text-lg'>Call</Text>
    </View>
    </View>
  )
}

export default DeliveryScreen