import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Content,
  Greeting,
  GreetingSection,
  Header,
  Initial,
  SubTitle,
  Title,
  UserInitial,
} from "./styles";
import { IUser } from "@/models/IUser";
import { getRealm } from "@/databases/realm";
import { useAuth } from "@/hooks/useAuth";
import { StatusBar} from "react-native";
import * as SecureStore from "expo-secure-store";
import { IconButton } from "@/components/IconButton";
import theme from "@/theme";
import { DetailsFinanceCard } from "@/components/DetailsFinanceCard";
import { IReceives } from "@/models/IReceives";
import uuid from "react-native-uuid";
import { useFocusEffect } from "expo-router";

export default function HomeScreen() {
  const [user, setUser] = useState<IUser>();
  const { token, addToken } = useAuth();

  async function fetchUser() {
    const realm = await getRealm();

    const userFetch = realm
      .objects<IUser>("User")
      .filtered("token = $0", token)[0];
    setUser(userFetch);
  }

  useFocusEffect(
    useCallback(() => {
      fetchUser();
      StatusBar.setBackgroundColor(theme.COLORS.EMERALD_500)
      StatusBar.setBarStyle('light-content')
      
    }, [])
  );

  async function createReceive() {
    const realm = await getRealm();
    const data = new Date();
    const dataFormatada = data.toLocaleString("pt-BR", { dateStyle: "short" });

    try {
      realm.write(() => {
        const selectedUser = realm
          .objects<IUser>("User")
          .filtered("token = $0", token)[0];

        const entrada = realm.create<IReceives>("Receives", {
          _id: uuid.v4(),
          value: 1200,
          type: "entry",
          date: dataFormatada,
          created_at: new Date(),
        });

        const saida = realm.create<IReceives>("Receives", {
          _id: uuid.v4(),
          value: 22.44,
          type: "exit",
          date: dataFormatada,
          created_at: new Date(),
        });

        selectedUser.receives.push(entrada);
        selectedUser.receives.push(saida);
        selectedUser.balance = entrada.value;
      });
    } catch {
      console.log("Erro ao criar receita");
    }
  }

  async function logout() {
    await SecureStore.deleteItemAsync("authToken");
    addToken("");
  }
  return (
    <Container>
      <StatusBar animated/>
      <Header>
        <GreetingSection>
          <UserInitial>
            <Initial>{user?.name[0].toUpperCase()}</Initial>
          </UserInitial>
          <Greeting>
            <Title>Bem-vindo.</Title>
            <SubTitle>{user?.name} !</SubTitle>
          </Greeting>
        </GreetingSection>
        <IconButton
          color={theme.COLORS.EMERALD_600}
          colorIcon={theme.COLORS.WHITE}
          nameIcon="LogOut"
          sizeIcon={24}
          onPress={logout}
        />
      </Header>
      <Content>
        <DetailsFinanceCard balance={user?.balance} receives={user?.receives} />
      </Content>
    </Container>
  );
}
