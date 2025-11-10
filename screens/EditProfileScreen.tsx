import { Text } from "react-native";
import React from "react";
import { EditProfileScreenProp } from "../interfaces/NavigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen({
  route,
  navigation,
}: EditProfileScreenProp) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>EditProfileScreen</Text>
    </SafeAreaView>
  );
}
