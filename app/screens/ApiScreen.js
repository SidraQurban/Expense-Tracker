import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const ApiScreen = () => {
  return (
   <SafeAreaView>
     <View>
      <Text style={{fontSize:responsiveFontSize(2)}}>Getting API's</Text>
    </View>
   </SafeAreaView>
  )
}

export default ApiScreen