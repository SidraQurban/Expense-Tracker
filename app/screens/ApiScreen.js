import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const ApiScreen = () => {


  return (
   <SafeAreaView>
     <View style={{marginTop:responsiveHeight(2)}}>
      <Text style={{fontSize:responsiveFontSize(2), textAlign:"center"}}>Getting API's</Text>
    </View>
   </SafeAreaView>
  )
}

export default ApiScreen