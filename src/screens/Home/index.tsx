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
import { StatusBar, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { IconButton } from "@/components/IconButton";
import theme from "@/theme";
import { DetailsFinanceCard } from "@/components/DetailsFinanceCard";
import { useFocusEffect } from "expo-router";
import { Transactions } from "@/components/Transactions";
import { useIsFocused } from "@react-navigation/native";

export default function HomeScreen() {
  const [user, setUser] = useState<IUser>();
  const isFocused = useIsFocused()
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
      StatusBar.setBackgroundColor(theme.COLORS.EMERALD_500);
      StatusBar.setBarStyle("light-content");
      fetchUser();
    }, [isFocused])
  );

  async function logout() {
    await SecureStore.deleteItemAsync("authToken");
    addToken("");
  }
  return (
    <Container>
      <StatusBar animated />
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
          width="48px"
          height="56px"
          color={theme.COLORS.EMERALD_600}
          colorIcon={theme.COLORS.WHITE}
          nameIcon="LogOut"
          sizeIcon={20}
          onPress={logout}
        />
        
      
        
        
      </Header>
      <Content>
      <DetailsFinanceCard balance={user?.balance} receives={user?.receives} />
      <Transactions receives={user?.receives}/>
      </Content>
    </Container>
  );
}
