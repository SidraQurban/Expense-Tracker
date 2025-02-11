import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ApiScreen = () => {

const [data,setData] = useState([]);
const getAPI =async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    

}

useEffect(()=> {
getAPI();
},[])

  return (
    <SafeAreaView>
      <View style={{ marginTop: responsiveHeight(2) }}>
        <Text style={{ fontSize: responsiveFontSize(2), textAlign: "center" }}>
          Getting API's
        </Text>
      </View>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", padding: responsiveWidth(2) }}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.email}</Text>
            </View>
          )}
        />
      ) : null}
    </SafeAreaView>
  );
}

export default ApiScreen