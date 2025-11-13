import React, { useState } from "react";
import { Button } from "react-native";
import UserCard from "../components/UserCard";
import { HomeScreenProp } from "../interfaces/NavigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ route, navigation }: HomeScreenProp) {
  const { id, name, email, city, profileImage } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <UserCard
        id={id}
        name={name}
        email={email}
        city={city}
        profileImage={profileImage}
      ></UserCard>
      <Button
        title="Editar Perfil"
        onPress={() => {
          navigation.navigate("EditProfile", { id, name, email, city });
        }}
      />
    </SafeAreaView>
  );
}
