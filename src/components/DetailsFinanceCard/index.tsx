import React from "react";
import {
  Container,
  DetailsFinanceIdentification,
  DetailsFinanceSec,
  CurrentBalanceTitle,
  CurrentBalanceContent,
  CurrentBalanceValue,
  CurrentBalanceContentText,
  Line,
} from "./styles";

import { Eye, HomeIcon } from "lucide-react-native";
import { IconButton } from "../IconButton";
import theme from "@/theme";

export function DetailsFinanceCard() {
  return (
    <Container>
      <DetailsFinanceSec>
        <DetailsFinanceIdentification color={theme.COLORS.BLUE_500} />
        <CurrentBalanceContent>
          <CurrentBalanceContentText>
            <CurrentBalanceTitle>Saldo atual</CurrentBalanceTitle>
            <CurrentBalanceValue>R$ 999.99</CurrentBalanceValue>
          </CurrentBalanceContentText>
          <IconButton
            color="transparent"
            colorIcon={theme.COLORS.ZINC_400}
            sizeIcon={24}
            nameIcon="Eye"
          />
        </CurrentBalanceContent>
      </DetailsFinanceSec>
      <Line />
      <DetailsFinanceSec>
        <DetailsFinanceIdentification color={theme.COLORS.EMERALD_400}/>
        <CurrentBalanceContent>
          <CurrentBalanceContentText>
            <CurrentBalanceTitle>Entrada</CurrentBalanceTitle>
            <CurrentBalanceValue>R$ 999.99</CurrentBalanceValue>
          </CurrentBalanceContentText>
        </CurrentBalanceContent>
      </DetailsFinanceSec>
      <Line />
      <DetailsFinanceSec>
        <DetailsFinanceIdentification  color={theme.COLORS.RED_400}/>
        <CurrentBalanceContent>
          <CurrentBalanceContentText>
            <CurrentBalanceTitle>Saída</CurrentBalanceTitle>
            <CurrentBalanceValue>R$ 100.00</CurrentBalanceValue>
          </CurrentBalanceContentText>
        </CurrentBalanceContent>
      </DetailsFinanceSec>
    </Container>
  );
}
