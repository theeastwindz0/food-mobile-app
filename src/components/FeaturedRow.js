import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title,description,id}) => {

  return (
    <View className='pt-4'>
        <View className='flex-row justify-between'> 
            <Text className='text-lg font-bold'>{title}</Text>
            <Ionicons name='arrow-forward' size={24} color='#00CCBB'/>
        </View>
        <Text className='text-xs text-gray-500 '>{description}</Text>

        <ScrollView contentContainerStyle={{}} horizontal showsHorizontalScrollIndicator={false} className='pt-4'>
            <RestaurantCard
            id={1}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main Street'
            short_description='One of highly preferred japanese dish .'
            dishes={[]}
            long={2.3}
            lat={3.1}
            />

<RestaurantCard
            id={1}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main Street'
            short_description='One of highly preferred japanese dish .'
            dishes={[]}
            long={2.3}
            lat={3.1}
            />

<RestaurantCard
            id={1}
            imageUrl='https://links.papareact.com/gn7'
            title='Yo Sushi'
            rating={4.5}
            genre='Japanese'
            address='123 Main Street'
            short_description='One of highly preferred japanese dish .'
            dishes={[]}
            long={2.3}
            lat={3.1}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow