import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <Text>HomeScreen</Text>
        <View></View>
      </SafeAreaView>
    </View>
  );
}

export default HomeScreen