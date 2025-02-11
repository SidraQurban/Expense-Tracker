import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ApiScreen = () => {
const [name,setName] = useState("");
const [age,setAge] = useState("");
const[email,setEmail] =useState("");

const[nameError,setNameError] = useState(false);
const [ageError, setAgeError] = useState(false);
const [emailError, setEmailError] = useState(false);

const saveData = async() => { 

if(!name){
    setNameError(true);
}else{
    setNameError(false);
}

if(!age){
    setAgeError(true);
}else{
    setAgeError(false);
}

if(!email){
    setEmailError(true);
}else{
    setEmailError(false);
}

if(!name || !age || !email){
    return false;
}

const url ="http://10.0.2.2:3000/users"
let result = await fetch(url , {
    method: 'POST',
    header:{'Content-Type':'applicatiom/json'},
    body:JSON.stringify({name, age, email})
})

}

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
         {/* Form */}
         <View style={{ padding: responsiveWidth(10) }}>
           <TextInput
             placeholder="Enter Your Name"
             value={name}
             onChangeText={(text) => setName(text)}
             style={{
               marginTop: responsiveHeight(2),
               borderColor: "green",
               borderWidth: 2,
               width: responsiveWidth(70),
             }}
           />
           {nameError ? (
             <View>
               <Text style={{ color: "red" }}>Invalid Name</Text>
             </View>
           ) : null}
           {/* age */}
           <TextInput
             placeholder="Enter Your Age"
             value={age}
             onChangeText={(text) => setAge(text)}
             style={{
               marginTop: responsiveHeight(2),
               borderColor: "green",
               borderWidth: 2,
               width: responsiveWidth(70),
             }}
           />
           {ageError ? (
             <View>
               <Text style={{ color: "red" }}>Invalid Name</Text>
             </View>
           ) : null}
           {/* email */}
           <TextInput
             placeholder="Enter Your Email"
             value={email}
             onChangeText={(text) => setEmail(text)}
             style={{
               marginTop: responsiveHeight(2),
               borderColor: "green",
               borderWidth: 2,
               width: responsiveWidth(70),
             }}
           />
           {emailError ? (
             <View>
               <Text style={{ color: "red" }}>Invalid Name</Text>
             </View>
           ) : null}
           <TouchableOpacity
             onPress={saveData}
             style={{
               backgroundColor: "green",
               width: responsiveWidth(50),
               height: responsiveHeight(5),
               borderRadius: responsiveHeight(20),
               justifyContent: "center",
               alignItems: "center",
               marginTop: responsiveHeight(2),
               marginLeft: responsiveWidth(10),
             }}
           >
             <Text
               style={{
                 fontSize: responsiveFontSize(2),
                 color: "blue",
                 fontWeight: "bold",
               }}
             >
               Submit
             </Text>
           </TouchableOpacity>
         </View>
       </View>
     </SafeAreaView>
   );
}

export default ApiScreen



// // SUBMIT API
// const [name,setName] = useState("");
// const [age,setAge] = useState("");
// const[email,setEmail] = useState("");


// const saveApiData = async () => {
//     console.warn(name);
//     console.warn(age);
//     console.warn(email);
//     const url = "http://10.0.2.2:3000/users";
//     let result = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, age, email }),
//     });

// }


// <View style={{ marginTop: responsiveHeight(2) }}>
//            <TextInput
//              placeholder="Enter your Name"
//              value={name}
//              onChangeText={(text) => setName(text)}
//              style={{
//                width: responsiveWidth(60),
//                height: responsiveHeight(5),
//                borderColor: "blue",
//                borderWidth: 1,
//                alignSelf: "center",
//                paddingHorizontal: responsiveWidth(2),
//                fontSize: responsiveFontSize(2),
//                borderRadius: 5,
//                color: "black",
//                marginTop:responsiveHeight(2)
//              }}
//            />
//            {/* age */}
//            <TextInput
//              placeholder="Enter age"
//              value={age}
//              onChangeText={(text) => setAge(text)}
//              style={{
//                width: responsiveWidth(60),
//                height: responsiveHeight(5),
//                borderColor: "blue",
//                borderWidth: 1,
//                alignSelf: "center",
//                paddingHorizontal: responsiveWidth(2),
//                fontSize: responsiveFontSize(2),
//                borderRadius: 5,
//                color: "black",
//                marginTop:responsiveHeight(2)
//              }}
//            />
//            {/* email */}
//            <TextInput
//              placeholder="Enter your email"
//              value={email}
//              onChangeText={(text) => setEmail(text)}
//              style={{
//                width: responsiveWidth(60),
//                height: responsiveHeight(5),
//                borderColor: "blue",
//                borderWidth: 1,
//                alignSelf: "center",
//                paddingHorizontal: responsiveWidth(2),
//                fontSize: responsiveFontSize(2),
//                borderRadius: 5,
//                color: "black",
//                marginTop:responsiveHeight(2)
//             }}

//            />
//            <View style={{ marginTop: responsiveHeight(2) }}>
//              <Button title="Save Data" onPress={saveApiData} />
//            </View>
//          </View>
// POST API
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