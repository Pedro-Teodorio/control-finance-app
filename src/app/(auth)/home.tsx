import React from "react";
import { Button, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { addToken } = useAuth();
  async function sair() {
    await SecureStore.deleteItemAsync("authToken");
    addToken('')
    console.log("Removido o token");
  }
  return (
    <View>
      <Text>Hello Home</Text>
      <Button title="Sair" onPress={sair} />
    </View>
  );
}
