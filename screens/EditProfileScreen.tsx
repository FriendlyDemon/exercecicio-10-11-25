import { StyleSheet, Button, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { EditProfileScreenProp } from "../interfaces/NavigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen({
  route,
  navigation,
}: EditProfileScreenProp) {
  const { name, email, city } = route.params;

  const [Name, setName] = useState(name);
  const [Email, setEmail] = useState(email);
  const [City, setCity] = useState(city);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>EditProfileScreen</Text>
      <TextInput
        style={styles.input}
        value={Name}
        onChangeText={setName}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={Email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={City}
        onChangeText={setCity}
      ></TextInput>
      <Button
        title="Save"
        onPress={() => {
          navigation.navigate("TabNavigator", {
            id: route.params.id,
            name: Name,
            email: Email,
            city: City,
          });
        }}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    padding: 3,
    margin: 3,
  },
});
