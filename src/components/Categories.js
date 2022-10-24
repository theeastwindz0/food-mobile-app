import React from 'react'
import { ScrollView, Text } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal
    contentContainerStyle={{

    }}
    showsHorizontalScrollIndicator={false}
    className='pt-2 '
    >
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers'/>
    </ScrollView>
  )
}

export default Categories