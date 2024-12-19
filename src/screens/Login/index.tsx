import React, { useState } from "react";
import { Container } from "./styles";
import  Icon  from "@/components/Icon";
import theme from "@/theme";
import { Header } from "@/components/Header";
import { Form } from "@/components/Form";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { FormLink } from "@/components/FormLink";
import { router } from "expo-router";
import { getRealm } from "@/databases/realm";
import { Alert, StatusBar } from "react-native";
import { generateToken } from "../Register";
import { useAuth } from "@/hooks/useAuth";
import { hashPassword } from "@/screens/Register";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToken } = useAuth();
  function handleToRegister() {
    router.navigate("/register");
  }
  async function handleLogin() {
    const realm = await getRealm();
    const passwordHashed = await hashPassword(password);

    const isEmailValid = realm.objects("User").filtered("email = $0", email)[0];

    const isPasswordValid = isEmailValid?.password === passwordHashed;

    if (isEmailValid && isPasswordValid) {
      const id = isEmailValid._id;
      const user = realm.objects("User").filtered("_id = $0", id)[0];
      realm.write(() => {
        user.token = generateToken(addToken);
      });
    } else if (!isEmailValid) {
      Alert.alert("Email", "Email não existe");
    } else {
      Alert.alert("Senha", "Senha incorreta");
    }
  }


  return (
    <Container>
      <StatusBar barStyle={"dark-content"} backgroundColor={theme.COLORS.BACKGROUND}/>
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
            onChangeText: setEmail,
          }}
        />
        <Field
          icon="Lock"
          inputProps={{
            placeholder: "Senha",
            secureTextEntry: true,
            onChangeText: setPassword,
          }}
        />
        <Button title="Entrar" onPress={handleLogin} />
        <FormLink
          text="Não tem uma conta?"
          textLink="Crie a sua agora"
          href={handleToRegister}
        />
      </Form>
    </Container>
  );
}
