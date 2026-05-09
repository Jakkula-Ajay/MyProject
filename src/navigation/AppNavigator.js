import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { AuthContext } from '../context/AuthContext';
import {View, ActivityIndicator} from "react-native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user, loading } = useContext(AuthContext);
if(loading) {
  return (
    <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center'}}>
         <ActivityIndicator size="large" />
      </View>
    );
  } 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;