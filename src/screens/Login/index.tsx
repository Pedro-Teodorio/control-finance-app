import React from "react";
import { Container } from "./styles";
import { Icon } from "@/components/Icon";
import theme from "@/theme";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { FormLink } from "@/components/FormLink";
import { router } from "expo-router";

export default function LoginScreen() {
  function handleToRegister() {
    router.navigate("/register");
  }
  return (
    <Container>
      <Icon
        name="CircleDollarSign"
        size={120}
        color={theme.COLORS.EMERALD_400}
      />
      <Header
        title="Domine suas finanças"
        subtitle="Gerencie suas contas com facilidade  e diversão"
      />
      <Form>
        <Field
          icon="Mail"
          inputProps={{
            placeholder: "Email",
          }}
        />
        <Field
          icon="Lock"
          inputProps={{
            placeholder: "Senha",
            secureTextEntry: true,
          }}
        />
        <Button title="Entrar" />
        <FormLink
          text="Não tem uma conta?"
          textLink="Crie a sua agora"
          href={handleToRegister}
        />
      </Form>
    </Container>
  );
}
