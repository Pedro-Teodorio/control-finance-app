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
import { CalenderModal } from "@/components/CalenderModal";
import { Database } from "lucide-react-native";

export default function HomeScreen() {
  const [user, setUser] = useState<IUser>();
  const [receiveDate, setReceivesDate] = useState(
    new Date().toLocaleString("pt-BR", { dateStyle: "short" })
  );
  const [modalVisible, setModalVisible] = useState(false);
  const receivesFilterDate = user?.receives.filter(
    (receive) => receive.date === receiveDate
  );

  const isFocused = useIsFocused();
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
    }, [isFocused, receiveDate])
  );

  async function logout() {
    await SecureStore.deleteItemAsync("authToken");
    addToken("");
  }

  function filterMovements(dateSelected: Date) {
    let date = new Date(dateSelected);
    let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
    let dateFormatted = new Date(onlyDate).toLocaleString("pt-BR", {
      dateStyle: "short",
    });

    setReceivesDate(dateFormatted);
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
        <DetailsFinanceCard
          balance={user?.balance}
          receives={receivesFilterDate}
        />
        <Transactions
          receives={receivesFilterDate}
          modalVisible={setModalVisible}
        />
        <CalenderModal
          isVisible={modalVisible}
          setVisible={setModalVisible}
          handleFilter={filterMovements}
        />
      </Content>
    </Container>
  );
}
