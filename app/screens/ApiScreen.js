import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const ApiScreen = () => {

const getAPI =async () => {
    const url = "http://192.168.100.186:3000/users";
    // let result = await fetch(url);
    // result = await result.json();

}

useEffect(()=> {
getAPI();
},[])

  return (
   <SafeAreaView>
     <View style={{marginTop:responsiveHeight(2)}}>
      <Text style={{fontSize:responsiveFontSize(2), textAlign:"center"}}>Getting API's</Text>
    </View>
   </SafeAreaView>
  )
}

export default ApiScreen