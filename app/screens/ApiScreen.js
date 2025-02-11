import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ApiScreen = () => {
const [name,setName] = useState("");
   return (
    <SafeAreaView>
      <View style={{ marginTop: responsiveHeight(2) }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Submission Form
        </Text>
        <View style={{ marginTop: responsiveHeight(2) }}>
          <TextInput
            placeholder="Enter your email"
            value={name}
           onChangeText={(text) =>setName(text)}
            style={{
              width: responsiveWidth(60),
              height: responsiveHeight(5),
              borderColor: "blue",
              borderWidth: 1,
              alignSelf: "center",
              paddingHorizontal: responsiveWidth(2),
              fontSize: responsiveFontSize(2),
              borderRadius: 5,
              color:"black"
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ApiScreen





// const saveApiData = async() => {
//     const data = {
//         name: "Ali",
//         age:29, 
//         email: "ali@test.com"
//     }
//   const url = "http://10.0.2.2:3000/users";
//   let result = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body:JSON.stringify(data)
//   });
//   result = await result.json();
//   console.warn(result);
  
// }

{/* <Button   title="Save Data" onPress={saveApiData} /> */}