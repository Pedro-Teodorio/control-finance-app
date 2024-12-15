import React from "react";
import { Container, Input } from "./styles";
import Icon from "../Icon";
import { TextInputProps } from "react-native";
import theme from "@/theme";

type Props = {
  icon: string;
  inputProps: TextInputProps;
};

export function Field({ icon, inputProps }: Props) {
  return (
    <Container>
      <Icon color={theme.COLORS.EMERALD_400} name={icon} size={24} />
      <Input {...inputProps} />
    </Container>
  );
}
