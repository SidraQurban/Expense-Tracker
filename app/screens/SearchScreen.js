import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const SearchScreen = () => {
const [data,setData] = useState([]);

const SearchUser = async (text) => {
  const url = `http://10.0.2.2:3000/users?q=${text}`;
  console.warn(url);
  
  let result = await fetch(url);
  result = await result.json();
  if (result) {
    setData(result);
  }
};
  return (
    <View>
      <View
        style={{ marginTop: responsiveHeight(4), padding: responsiveWidth(5) }}
      >
        <TextInput
          placeholder="Search Here..."
          style={{ borderColor: "blue", borderWidth: 1 }}
          onChangeText={(text) => searchUser(text)}
        />
        {data.length
          ? data.map((item) => 
              <View key={item.id}>
                <Text>{item.name}</Text>
              </View>
           )
          : null}
      </View>
    </View>
  );
}

export default SearchScreen