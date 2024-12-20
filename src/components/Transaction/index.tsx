import React from "react";
import {
  CurrentBalanceContent,
  CurrentBalanceContentText,
  CurrentBalanceTitle,
  CurrentBalanceValue,
  DetailsFinanceIdentification,
  DetailsFinanceSec,
} from "./styles";
import theme from "@/theme";
import { IReceives } from "@/models/IReceives";

type Props = {
  data: IReceives;
};
export function Transaction({ data }: Props) {
  return (
    <DetailsFinanceSec>
      <DetailsFinanceIdentification
        color={
          data?.type === "entry"
            ? theme.COLORS.EMERALD_400
            : theme.COLORS.RED_400
        }
      />
      <CurrentBalanceContent>
        <CurrentBalanceContentText>
          <CurrentBalanceTitle>{data?.type === "entry" ? "Entrada" : "Saída"}</CurrentBalanceTitle>
          <CurrentBalanceValue>R$ {data?.value.toFixed(2)}</CurrentBalanceValue>
        </CurrentBalanceContentText>
      </CurrentBalanceContent>
    </DetailsFinanceSec>
  );
}
