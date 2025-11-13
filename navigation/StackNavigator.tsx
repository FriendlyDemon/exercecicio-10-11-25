import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import EditProfileScreen from "../screens/EditProfileScreen";
import TabNavigator from "./TabNavigator";
import { StackParamList } from "../interfaces/NavigationTypes";

export default function StackNavigation() {
  let stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="TabNavigator">
        <stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
          initialParams={{
            id: "0",
            name: "Pedro",
            email: "pedro@gmail.com",
            city: "São Leopoldo",
          }}
        ></stack.Screen>
        <stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
