import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const HomeScreen = () => {
const [data,setData] = useState(undefined);

const getAPIData =async () =>{
   const url = ("https://jsonplaceholder.typicode.com/posts/1");
   let result = await fetch(url);
   result = await result.json();
   setData(result);
}

useEffect (() => {
  getAPIData();
},[])

  return (
    <View>
      {data ? (
        <View>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default HomeScreen