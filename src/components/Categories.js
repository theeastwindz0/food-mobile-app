import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import CategoryCard from './CategoryCard'
import { useEffect } from 'react'
import client, { urlFor } from '../../sanity'
const Categories = () => {
  const [categories,setCategories]=useState([]);
  useEffect(() => {
    client.fetch(`*[_type=='category']`)
    .then((data)=>setCategories(data))
  }, [])
  
  return (
    <ScrollView horizontal
    contentContainerStyle={{

    }}
    showsHorizontalScrollIndicator={false}
    className='pt-2 '
    >
      {categories.map((item,i)=>
        <CategoryCard key={item._id} imgUrl={urlFor(item.image).url()} title={item.title}/>
      )}
    </ScrollView>
  )
}

export default Categories