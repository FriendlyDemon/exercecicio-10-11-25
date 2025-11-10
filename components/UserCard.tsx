import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { User } from "../interfaces/UserInterface";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserCard({ name, email, city, profileImage }: User) {
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{city}</Text>
      <Image source={{ uri: profileImage }}></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
