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
  ValueReceiveLabel,
} from "./styles";
import { StatusBar } from "react-native";

import theme from "@/theme";
import { useFocusEffect } from "expo-router";
import { KeyboardReceives } from "@/components/KeyBoardReceives";

export default function AddReceivesScreen() {
  const [receives, setReceives] = useState("Despesas");
  const [displayValue, setDisplayValue] = useState("0");

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBackgroundColor(theme.COLORS.RED_400);
      StatusBar.setBarStyle("light-content");
      setReceives("exit");
      setDisplayValue("0");
    }, [])
  );

  function changeColorHeader() {
    if (receives === "exit") {
      StatusBar.setBackgroundColor(theme.COLORS.RED_400);
      return theme.COLORS.RED_400;
    } else if (receives === "entry") {
      StatusBar.setBackgroundColor(theme.COLORS.EMERALD_500);
      return theme.COLORS.EMERALD_500;
    }
  }

  return (
    <Container>
      <StatusBar animated />
      <Header color={changeColorHeader()}>
        <ReceiveSwitchContent>
          <ReceiveSwitch onPress={() => setReceives("exit")}>
            <ReceiveSwitchText>Despesas</ReceiveSwitchText>
            {receives === "exit" && <ReceiveSwitchIndicator />}
          </ReceiveSwitch>

          <ReceiveSwitch onPress={() => setReceives("entry")}>
            <ReceiveSwitchText>Receita</ReceiveSwitchText>
            {receives === "entry" && <ReceiveSwitchIndicator />}
          </ReceiveSwitch>
        </ReceiveSwitchContent>

        <ValueReceiveContent>
          <ValueReceiveLabel>R$</ValueReceiveLabel>
          <ValueReceiveInput
            value={displayValue}
            editable={false}
            maxLength={15}
          />
        </ValueReceiveContent>
      </Header>
      <KeyboardReceives
        keyboardChange={setDisplayValue}
        value={displayValue}
        receiveValue={receives}
      />
    </Container>
  );
}
