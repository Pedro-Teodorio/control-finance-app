import React, { useEffect, useState } from "react";
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
import { Button, StatusBar, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { IconButton } from "@/components/IconButton";
import theme from "@/theme";
import { DetailsFinanceCard } from "@/components/DetailsFinanceCard";

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
  useEffect(() => {
    fetchUser();
  }, []);

  async function logout() {
    await SecureStore.deleteItemAsync("authToken");
    addToken("");
  }
  return (
    <Container>
      <StatusBar backgroundColor={theme.COLORS.EMERALD_500} barStyle={"default"}/>
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

      <DetailsFinanceCard/>
      </Content>
    </Container>
  );
}
