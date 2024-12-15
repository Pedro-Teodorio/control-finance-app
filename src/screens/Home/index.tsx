import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header } from "@/components/Header";
import { IUser } from "@/models/IUser";
import { getRealm } from "@/databases/realm";
import { useAuth } from "@/hooks/useAuth";
import { Button, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function HomeScreen() {
  const [user, setUser] = useState<IUser>();
  const { token,addToken } = useAuth();

  async function fetchUser() {
    const realm = await getRealm();

    const userFetch = realm
      .objects<IUser>("User")
      .filtered("token = $0", token)[0];
        setUser(userFetch)
   
  }
  useEffect(() => {
    fetchUser();
  }, []);
  
   async function logout() {
      await SecureStore.deleteItemAsync("authToken");
      addToken('')
    }
  return (
    <Container>
      <Header title={`Olá ${user?.name}`} subtitle="Seja Bem-vindo de volta!"/>
      <Button title="logout" onPress={logout} />
    </Container>
  );
}
