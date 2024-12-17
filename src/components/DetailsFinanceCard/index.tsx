import React, { useState } from "react";
import {
  Container,
  DetailsFinanceIdentification,
  DetailsFinanceSec,
  CurrentBalanceTitle,
  CurrentBalanceContent,
  CurrentBalanceValue,
  CurrentBalanceContentText,
  Line,
  SkeletonReceives,
} from "./styles";

import { IconButton } from "../IconButton";
import theme from "@/theme";
import { IReceives } from "@/models/IReceives";
type Props = {
  balance: number | undefined;
  receives: IReceives[] | undefined;
};
export function DetailsFinanceCard({ balance, receives }: Props) {
  const [isVisibleReceives, setIsVisibleReceives] = useState(false);
  const data = new Date();
  const dataFormatada = data.toLocaleString("pt-BR", { dateStyle: "short" });

  const entry = receives
    ?.filter((value) => value.type === "entry" && value.date == dataFormatada)
    .reduce((acc, current) => {
      return acc + current.value;
    }, 0);

  const exit = receives
    ?.filter((value) => value.type === "exit" && value.date == dataFormatada)
    .reduce((acc, current) => {
      return acc + current.value;
    }, 0);

  return (
    <Container>
      <DetailsFinanceSec>
        <DetailsFinanceIdentification color={theme.COLORS.BLUE_500} />
        <CurrentBalanceContent>
          <CurrentBalanceContentText>
            <CurrentBalanceTitle>Saldo atual</CurrentBalanceTitle>
            {isVisibleReceives ? (
              <CurrentBalanceValue>
                R$ {balance?.toFixed(2)}
              </CurrentBalanceValue>
            ) : (
              <SkeletonReceives />
            )}
          </CurrentBalanceContentText>
          <IconButton
            color="transparent"
            colorIcon={theme.COLORS.ZINC_400}
            sizeIcon={24}
            nameIcon={isVisibleReceives ? 'Eye' : 'EyeClosed'}
            onPress={() => setIsVisibleReceives(!isVisibleReceives)}
          />
        </CurrentBalanceContent>
      </DetailsFinanceSec>
      <Line />
      <DetailsFinanceSec>
        <DetailsFinanceIdentification color={theme.COLORS.EMERALD_400} />
        <CurrentBalanceContent>
          <CurrentBalanceContentText>
            <CurrentBalanceTitle>Entradas de hoje</CurrentBalanceTitle>
            {isVisibleReceives ? (
              <CurrentBalanceValue>R$ {entry?.toFixed(2)}</CurrentBalanceValue>
            ) : (
              <SkeletonReceives />
            )}
          </CurrentBalanceContentText>
        </CurrentBalanceContent>
      </DetailsFinanceSec>
      <Line />
      <DetailsFinanceSec>
        <DetailsFinanceIdentification color={theme.COLORS.RED_400} />
        <CurrentBalanceContent>
          <CurrentBalanceContentText>
            <CurrentBalanceTitle>Saída de hoje</CurrentBalanceTitle>
            {isVisibleReceives ? (
              <CurrentBalanceValue>R$ {exit?.toFixed(2)}</CurrentBalanceValue>
            ) : (
              <SkeletonReceives />
            )}
          </CurrentBalanceContentText>
        </CurrentBalanceContent>
      </DetailsFinanceSec>
    </Container>
  );
}
