
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Container } from "./styles";
import theme from "@/theme";

export function Load() {
  return (
    <Container>
        <ActivityIndicator color={theme.COLORS.EMERALD_500} size={40}/>
    </Container>
  )
}

