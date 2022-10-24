import {  Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity activeOpacity={.8} className='relative bg-gray-100  mx-2 items-center justify-end'>
        <Image source={{uri:imgUrl}} className='h-20 w-20' />
      <Text className='absolute bottom-0 text-white font-bold '>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard