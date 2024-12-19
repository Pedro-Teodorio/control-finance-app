import React, { useCallback, useState } from "react";
import { Container, Key, KeyConfirm, KeyText } from "./styles";

import { IconButton } from "../IconButton";
import theme from "@/theme";
import Icon from "../Icon";
import { useFocusEffect } from "expo-router";
import { getRealm } from "@/databases/realm";
import { IUser } from "@/models/IUser";
import { useAuth } from "@/hooks/useAuth";
import { IReceives } from "@/models/IReceives";
import uuid from "react-native-uuid";
type Props = {
  keyboardChange: (value: string) => void;
  value: string;
  receiveValue: string;
};
export function KeyboardReceives({
  keyboardChange,
  value,
  receiveValue,
}: Props) {
  const {token} = useAuth()
  const [displayValue, setDisplayValue] = useState("0");
  const regex = /^\d{1,12}(?:\.\d{0,2})?$/;

  function keyPress(key: string) {
    if (displayValue === "0" && key !== "delete") {
      checkDisplay(key);
    } else if (key === "delete") {
      checkDisplay(displayValue.substring(0, displayValue.length - 1));
    } else {
      checkDisplay(displayValue + key);
    }
  }

  function checkDisplay(value: string) {
    if (regex.test(value)) {
      keyboardChange(value);
      setDisplayValue(value);
    } else if (!regex.test(value)) {
      if (value === "") {
        setDisplayValue("0");
        keyboardChange("0");
      } else {
        keyboardChange(displayValue);
      }
    }
  }

  async function handleSubmitReceive() {
    const realm = await getRealm();
    const data = new Date();
    const dataFormatada = data.toLocaleString("pt-BR", { dateStyle: "short" });

    try {
      realm.write(() => {
        const selectedUser = realm
          .objects<IUser>("User")
          .filtered("token = $0", token)[0];

        const receive = realm.create<IReceives>("Receives", {
          _id: uuid.v4(),
          value: Number(value),
          type: receiveValue,
          date: dataFormatada,
          created_at: new Date(),
        });
        if(selectedUser.balance === 0){
          selectedUser.balance = receive.value
        }
        if(selectedUser.balance > 0 && receiveValue === "exit"){
          selectedUser.balance = selectedUser.balance - receive.value
        }

        if(selectedUser.balance > 0  && receiveValue === "entry"){
          selectedUser.balance = selectedUser.balance + receive.value
        }
        selectedUser.receives.push(receive);
      });
    } catch {
      console.log("Erro ao criar receita");
    }finally{
      realm.close()
    }

  
  }
  useFocusEffect(
    useCallback(() => {
      setDisplayValue("0");
    }, [])
  );
  return (
    <Container>
      <Key
        onPress={() => {
          keyPress("1");
        }}
      >
        <KeyText>1</KeyText>
      </Key>

      <Key
        onPress={() => {
          keyPress("2");
        }}
      >
        <KeyText>2</KeyText>
      </Key>

      <Key
        onPress={() => {
          keyPress("3");
        }}
      >
        <KeyText>3</KeyText>
      </Key>

      <Key
        onPress={() => {
          keyPress("4");
        }}
      >
        <KeyText>4</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress("5");
        }}
      >
        <KeyText>5</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress("6");
        }}
      >
        <KeyText>6</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress("7");
        }}
      >
        <KeyText>7</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress("8");
        }}
      >
        <KeyText>8</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress("9");
        }}
      >
        <KeyText>9</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress(".");
        }}
      >
        <KeyText>,</KeyText>
      </Key>
      <Key
        onPress={() => {
          keyPress("0");
        }}
      >
        <KeyText>0</KeyText>
      </Key>
      <IconButton
        nameIcon="Delete"
        colorIcon={theme.COLORS.ZINC_400}
        color="transparent"
        sizeIcon={42}
        onPress={() => {
          keyPress("delete");
        }}
      />
      <KeyConfirm onPress={handleSubmitReceive}>
        <Icon name="Check" size={40} color={theme.COLORS.WHITE} />
      </KeyConfirm>
    </Container>
  );
}
