import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EditProfileScreen from "../screens/EditProfileScreen";
import TabNavigator from "./TabNavigator";

export default function StackNavigation() {
  let stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={TabNavigator}></stack.Screen>
        <stack.Screen name="Edit" component={EditProfileScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
