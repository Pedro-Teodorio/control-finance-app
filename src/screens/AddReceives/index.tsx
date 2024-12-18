import React, { useCallback, useState } from "react";
import {
  ReceiveSwitch,
  ReceiveSwitchContent,
  ReceiveSwitchIndicator,
  ReceiveSwitchText,
  Container,
  Header,
  ValueReceiveContent,
  ValueReceiveInput,
} from "./styles";
import { StatusBar } from "react-native";

import theme from "@/theme";
import { useFocusEffect } from "expo-router";
import { IconButton } from "@/components/IconButton";
import { KeyboardReceives } from "@/components/KeyBoardReceives";

export default function AddReceivesScreen() {
  const [receives, setReceives] = useState("Despesas");
  const [valueReceive,setValueReceive] = useState('')
 

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(theme.COLORS.RED_400);
      StatusBar.setBarStyle("light-content");
      setReceives("Despesas");
      setValueReceive('')
    }, [])
  );

  function changeColorHeader() {
    if (receives === "Despesas") {
      StatusBar.setBackgroundColor(theme.COLORS.RED_400);
      return theme.COLORS.RED_400;
    } else if (receives === "Receita") {
      StatusBar.setBackgroundColor(theme.COLORS.EMERALD_500);
      return theme.COLORS.EMERALD_500;
    }
  }


  return (
    <Container>
      <StatusBar/>
      <Header color={changeColorHeader()}>
        <ReceiveSwitchContent>
          <ReceiveSwitch onPress={() => setReceives("Despesas")}>
            <ReceiveSwitchText>Despesas</ReceiveSwitchText>
            {receives === "Despesas" && <ReceiveSwitchIndicator />}
          </ReceiveSwitch>

          <ReceiveSwitch onPress={() => setReceives("Receita")}>
            <ReceiveSwitchText>Receita</ReceiveSwitchText>
            {receives === "Receita" && <ReceiveSwitchIndicator />}
          </ReceiveSwitch>
        </ReceiveSwitchContent>

        <ValueReceiveContent>
          <ValueReceiveInput value={valueReceive} />
          <IconButton color="transparent" colorIcon={theme.COLORS.WHITE} nameIcon="Delete" sizeIcon={48}/>
        </ValueReceiveContent>
      </Header>
      <KeyboardReceives/>
    </Container>
  );
}
