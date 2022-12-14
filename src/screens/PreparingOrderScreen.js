import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const PreparingOrderScreen = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 3000);
    },[])
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center '>
      <Animatable.Image animation='slideInUp' iterationCount={1} source={require('../../assets/preparing_order.gif')} className='w-96 h-96' />
      <Animatable.Text animation='slideInUp' delay={1} iterationCount={1} className='text-lg my-10 text-white font-bold text-center'>
        Waiting for Restaurant to accept your order.
      </Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen