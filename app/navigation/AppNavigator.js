import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
// import ApiScreen from '../screens/ApiScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}> 
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Api" component={ApiScreen} /> */}
        <Stack.Screen name = "Search" component={SearchScreen} /> 
        
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator