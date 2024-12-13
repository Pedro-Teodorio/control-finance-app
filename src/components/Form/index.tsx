import React, { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  children: ReactNode;
};

export function Form({ children }: Props) {
  return <Container>{children}</Container>;
}
