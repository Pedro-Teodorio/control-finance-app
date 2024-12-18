import React, { useState } from "react";
import { Container, Key, KeyConfirm, KeyText } from "./styles";

import { IconButton } from "../IconButton";
import theme from "@/theme";
import Icon from "../Icon";

export function KeyboardReceives() {
  function keyPress(key: string) {
    console.log(key);
  }

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
      />
      <KeyConfirm>
        <Icon name="Check" size={40} color={theme.COLORS.WHITE} />
      </KeyConfirm>
    </Container>
  );
}
