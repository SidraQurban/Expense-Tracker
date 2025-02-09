import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const HomeScreen = () => {
const [data,setData] = useState([]);

const getAPIData =async () =>{
   const url = ("https://jsonplaceholder.typicode.com/posts");
   let result = await fetch(url);
   result = await result.json();
   setData(result);
  
}


useEffect (() => {
  getAPIData();
},[])

  return <View>{data.length ? data.map((item) => <View>
    <Text key={item.id}>{item.id}</Text>
    <Text>{item.title}</Text>
  </View>) : null}</View>;
}

export default HomeScreen