import React from "react";
import { Button } from "react-native";
import UserCard from "../components/UserCard";
import { HomeScreenProp } from "../interfaces/NavigationTypes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ route, navigation }: HomeScreenProp) {
  let id = "0",
    name = "Pedro",
    email = "pedro@gmail.com",
    city = "São Leopoldo",
    profileImage = undefined;
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
