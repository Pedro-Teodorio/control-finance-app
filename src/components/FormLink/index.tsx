import React from "react";
import { Container, Link, Text, TextLink } from "./styles";
import { router } from "expo-router";

type Props = {
  text: string;
  textLink: string;
  href: () => void;
};
export function FormLink({ href, text, textLink }: Props) {
  return (
    <Container>
      <Text>{text}</Text>
      <Link onPress={href}>
        <TextLink>{textLink}</TextLink>
      </Link>
    </Container>
  );
}
