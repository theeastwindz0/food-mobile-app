import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import { selectBasketTotal } from '../../store/slices/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
const BasketIcon = () => {
    const items=useSelector((state)=>state.basket.items);
    const navigation=useNavigation();
    const basketTotal=useSelector(selectBasketTotal);
    if(items.length===0)return null;
  return (
    <View className='absolute bottom-10 items-center  w-full z-10'>
        <TouchableOpacity className='flex-row justify-between p-4  bg-[#00CCBB] w-[90%] rounded-lg' onPress={()=>navigation.navigate('Basket')} activeOpacity={0.8}
        >
            <Text className='text-lg text-white font-semibold bg-[#01A296] py-1 px-1 '>{items.length}</Text>
            <Text className='text-lg text-white font-semibold'>View Basket</Text>
            <Text className='text-lg text-white font-semibold'>₹ {basketTotal}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon