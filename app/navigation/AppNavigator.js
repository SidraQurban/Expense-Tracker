import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
import ApiScreen from '../screens/ApiScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}> 
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Api" component={ApiScreen} />
        
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator