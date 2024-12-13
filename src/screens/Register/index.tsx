import React, { useState } from "react";
import { Container } from "./styles";
import { Icon } from "@/components/Icon";
import theme from "@/theme";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { FormLink } from "@/components/FormLink";
import { router } from "expo-router";
import { getRealm } from "@/databases/realm";
import uuid from "react-native-uuid";
import * as SecureStore from "expo-secure-store";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleToBack() {
    router.back();
  }
  async function handleRegister() {
    const realm = await getRealm();

    realm.write(() => {
      realm.create("User", {
        _id: uuid.v4(),
        name: name,
        email: email,
        password: password,
        token: "string",
        created_at: new Date(),
      });
    });
  }
  return (
    <Container>
      <Icon name="CircleUser" size={120} color={theme.COLORS.EMERALD_400} />
      <Header
        title="Cadastre-se"
        subtitle="Preencha os campos abaixo para cadastrar-se"
      />
      <Form>
        <Field
          icon="User"
          inputProps={{
            placeholder: "Nome",
            onChangeText: setName,
          }}
        />
        <Field
          icon="Mail"
          inputProps={{
            placeholder: "Email",
            onChangeText: setEmail,
          }}
        />
        <Field
          icon="Lock"
          inputProps={{
            placeholder: "Senha",
            onChangeText: setPassword,
            secureTextEntry: true,
          }}
        />
        <Button title="Entrar" onPress={handleRegister} />
        <FormLink
          text="Já tem conta?"
          textLink="Acesse agora"
          href={handleToBack}
        />
      </Form>
    </Container>
  );
}
export const generateToken = () => {
  const token = uuid.v4();
  SecureStore.setItem("authToken", token);
  return token;
};
