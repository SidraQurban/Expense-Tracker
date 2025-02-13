import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const SearchScreen = () => {
const [data,setData] = useState([]);

const searchUser = async () => {
  const url = "http://10.0.2.2:3000/users";
  let result = await fetch(url);
  result = await result.json();
  if (result) {
    setData(result);
  }
};
  return (
    <View
      style={{ marginTop: responsiveHeight(4), padding: responsiveWidth(5) }}
    >
      <TextInput
        placeholder="Search Here..."
        style={{ borderColor: "blue", borderWidth: 1 }}
        onChangeText={(text) =>searchUser( text)}
      />
    </View>
  );
}

export default SearchScreen