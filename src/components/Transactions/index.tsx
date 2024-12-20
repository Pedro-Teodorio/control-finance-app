import React from "react";
import { Container, Header, Title } from "./styles";
import { IconButton } from "../IconButton";
import theme from "@/theme";
import { FlatList, StyleSheet, View } from "react-native";
import { Transaction } from "../Transaction";
import { IReceives } from "@/models/IReceives";

type Props = {
  receives: IReceives[] | undefined;
};
export function Transactions({ receives }: Props) {
  const today = new Date().toLocaleString("pt-BR", { dateStyle: "short" });
  const receivesToday = receives?.filter((receives) => receives.date === today);

  return (
    <Container>
      <Header>
        <IconButton
          nameIcon="Calendar"
          sizeIcon={24}
          color="transparent"
          colorIcon={theme.COLORS.ZINC_400}
        />
        <Title>Ultimas Transações</Title>
      </Header>

      <FlatList
        keyExtractor={(item) => item._id}
        data={receivesToday}
        renderItem={({ item }) => <Transaction data={item} />}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 16,
    gap:16
  },
  listStyle: {
    flex:1
  },
});
