import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import {
  BottomTabParamList,
  TabNavigatorProp,
} from "../interfaces/NavigationTypes";

export default function TabNavigator({ route, navigation }: TabNavigatorProp) {
  let tab = createBottomTabNavigator<BottomTabParamList>();
  return (
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
      <tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={route.params}
      />
      <tab.Screen name="Setting" component={SettingScreen} />
    </tab.Navigator>
  );
}
