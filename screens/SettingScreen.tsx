import { Text } from "react-native";
import React from "react";
import { SettingsScreenProp } from "../interfaces/NavigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingScreen({ navigation }: SettingsScreenProp) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>SettingScreen</Text>
    </SafeAreaView>
  );
}
