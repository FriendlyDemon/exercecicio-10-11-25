import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";

export default function TabNavigator() {
  let tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "home-outline";
            if (route.name === "Home") iconName = "home-outline";
            if (route.name === "Setting") iconName = "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <tab.Screen name="Home" component={HomeScreen} />
        <tab.Screen name="Setting" component={SettingScreen}></tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
}
