import { View, Text, Button, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ApiScreen = () => {
const [data, setData] = useState([]);
const [showModal,SetShowModal] = useState(false);
const [selectedUser, setSelectedUser] = useState(undefined);

const getAPIData =async () => {
const url = "http://10.0.2.2:3000/users";
let result = await fetch(url);
result = await result.json();

if(result){
  setData(result);
}
}
// Delete
const deleteUser = async(id) => {
  const url ="http://10.0.2.2:3000/users";
  let result = await fetch(`${url}/${id}`, {
    method: "delete",
  });
  result = await result.json();
  if(result){
   console.warn("User deleted");
   setData(result);
    getAPIData();
  }
}

// Update
const showUser = (data) =>{
  SetShowModal(true);
  setSelectedUser(data)
}

// Search
const searchUser = async (text)=>{
  const url = `http://10.0.2.2:3000/users?q=${text}`;
  console.warn(url);
  
  let result = await fetch(url);
  result = await result.json();
  if(result){
    setData(result);
  }  

  console.warn(result);
  if(result.length == 0){
    setData([]);
  }
  console.warn(result.length);
  
}

useEffect(()=> {
  getAPIData();
},[])

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
         <View style={{ marginTop: 20 }}>
           <TextInput
             placeholder={"Search Here.."}
             onChangeText={(text) => searchUser(text)}
             style={{
               borderWidth: 1,
               borderColor: "blue",
               width: responsiveWidth(90),
               marginLeft: responsiveWidth(2),
             }}
           />
           {data.length ? (
             data.map((item) => 
               <View key={item.id}>
                 <Text>{item.name}</Text>
               </View>
             )
           ) : (
             <View>
               <Text>Result not found</Text>
             </View>
           )}
         </View>
         <View
           style={{
             flexDirection: "row",
             marginBottom: responsiveHeight(2),
             marginTop: responsiveHeight(2),
           }}
         >
           <Text style={{ flex: 1, marginLeft: responsiveWidth(2) }}>Name</Text>
           <Text style={{ flex: 2 }}>Age</Text>
           <Text style={{ flex: 1 }}>Operations</Text>
         </View>
         {data.length
           ? data.map((item) => (
               <View>
                 <View
                   style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     padding: responsiveWidth(2),
                   }}
                 >
                   <View style={{ flex: 1 }}>
                     <Text>{item.name}</Text>
                   </View>

                   <View style={{ flex: 1 }}>
                     <Text>{item.age}</Text>
                   </View>

                   <View style={{ flex: 1 }}>
                     <Button
                       title="Delete"
                       onPress={() => deleteUser(item.id)}
                     />
                   </View>

                   <View style={{ flex: 1 }}>
                     <Button title="Update" onPress={() => showUser(item)} />
                   </View>
                 </View>
               </View>
             ))
           : null}
         <Modal visible={showModal} transparent={true}>
           <UserModal
             SetShowModal={SetShowModal}
             selectedUser={selectedUser}
             getAPIData={getAPIData}
           />
         </Modal>
       </View>
     </SafeAreaView>
   );
};

const UserModal = (props) =>{
const[name,setName] = useState([]);
const[age,setAge] = useState([]);
const[email,setEmail] = useState([]);

useEffect(()=>{

  if(props.selectedUser){
    setName(props.selectedUser.name);
    setAge(props.selectedUser.age.toString());
    setEmail(props.selectedUser.email);
  }
},[props.selectedUser])
const updateUser = async()=>{
  console.warn(name,age,email);
  const url = "http://10.0.2.2:3000/users";
  const id = props.selectedUser.id;
  let result = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, email }),
  });
  result =await result.json();
  if(result){
  console.warn(result);
  props.getAPIData();
  props.SetShowModal(false);
  }  
}
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          marginTop: responsiveHeight(30),
          backgroundColor: "white",
          padding: responsiveHeight(5),
          marginLeft: responsiveWidth(2),
          marginRight: responsiveWidth(2),
          borderRadius: responsiveHeight(2),
        }}
      >
        {/* name */}
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder='Enter name'
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(7),
            borderColor: "blue",
            borderWidth: 1,
            marginBottom: responsiveHeight(1),
            fontSize:responsiveFontSize(2)
          }}
        />
        {/* age */}
        <TextInput
          value={age}
          onChangeText={(text) => setAge(text)}
          placeholder='Enter age'
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(7),
            borderColor: "blue",
            borderWidth: 1,
            marginBottom: responsiveHeight(1),
            fontSize:responsiveFontSize(2)
          }}
        />
        {/* email */}
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Enter email'
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(7),
            borderColor: "blue",
            borderWidth: 1,
            fontSize:responsiveFontSize(2)
          }}
        />
        <View
          style={{ marginTop: responsiveHeight(1), width: responsiveWidth(40) }}>
          <Button title="Update" onPress={ updateUser} />
        </View>
        <View
          style={{ marginTop: responsiveHeight(1), width: responsiveWidth(40) }}>
          <Button title="Close" onPress={() => props.SetShowModal(false)} />
        </View>
      </View>
    </View>
  );
}

export default ApiScreen;

// Validation:
// const [name,setName] = useState("");
// const [age,setAge] = useState("");
// const[email,setEmail] =useState("");
// const[nameError,setNameError] = useState(false);
// const [ageError, setAgeError] = useState(false);
// const [emailError, setEmailError] = useState(false);

// const saveData = async() => { 

// setNameError(!name ? true : false);
// setAgeError(!age ? true : false);
// setEmailError(!email ? true : false);
// return !name || !age || !email ? false : true;

// setNameError(!name);
// setAgeError(!age);
// setEmailError(!email);
// return !(name && age && email);

// const url ="http://10.0.2.2:3000/users"
// let result = await fetch(url , {
//     method: 'POST',
//     header:{'Content-Type':'applicatiom/json'},
//     body:JSON.stringify({name, age, email})
// })

// }

//  {/* Form */}
//  <View style={{ padding: responsiveWidth(10) }}>
//  <TextInput
//    placeholder="Enter Your Name"
//    value={name}
//    onChangeText={(text) => setName(text)}
//    style={{
//      marginTop: responsiveHeight(2),
//      borderColor: "green",
//      borderWidth: 2,
//      width: responsiveWidth(70),
//    }}
//  />
//  {nameError ? (
//    <View>
//      <Text style={{ color: "red" }}>Invalid Name</Text>
//    </View>
//  ) : null}
//  {/* age */}
//  <TextInput
//    placeholder="Enter Your Age"
//    value={age}
//    onChangeText={(text) => setAge(text)}
//    style={{
//      marginTop: responsiveHeight(2),
//      borderColor: "green",
//      borderWidth: 2,
//      width: responsiveWidth(70),
//    }}
//  />
//  {ageError ? (
//    <View>
//      <Text style={{ color: "red" }}>Invalid Age</Text>
//    </View>
//  ) : null}
//  {/* email */}
//  <TextInput
//    placeholder="Enter Your Email"
//    value={email}
//    onChangeText={(text) => setEmail(text)}
//    style={{
//      marginTop: responsiveHeight(2),
//      borderColor: "green",
//      borderWidth: 2,
//      width: responsiveWidth(70),
//    }}
//  />
//  {emailError ? (
//    <View>
//      <Text style={{ color: "red" }}>Invalid Email</Text>
//    </View>
//  ) : null}
//  <TouchableOpacity
//    onPress={saveData}
//    style={{
//      backgroundColor: "green",
//      width: responsiveWidth(50),
//      height: responsiveHeight(5),
//      borderRadius: responsiveHeight(20),
//      justifyContent: "center",
//      alignItems: "center",
//      marginTop: responsiveHeight(2),
//      marginLeft: responsiveWidth(10),
//    }}
//  >
//    <Text
//      style={{
//        fontSize: responsiveFontSize(2),
//        color: "blue",
//        fontWeight: "bold",
//      }}
//    >
//      Submit
//    </Text>
//  </TouchableOpacity>
// </View>

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