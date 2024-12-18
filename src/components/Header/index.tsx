import React from "react";
import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};
export function Header({ subtitle, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
