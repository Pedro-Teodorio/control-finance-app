import styled from "styled-components/native";

type DetailsFinanceIdentificationProps = {
  color: string;
};

export const DetailsFinanceSec = styled.View`
  width: 100%;
  border-color: black;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.ZINC_50};
  justify-content: baseline;
  gap: 16px;
  border-radius: 10px;
`;

export const DetailsFinanceIdentification = styled.View<DetailsFinanceIdentificationProps>`
 padding: 4px;
  height: 80px;
  background-color: ${({ color }) => color};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const CurrentBalanceContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const CurrentBalanceContentText = styled.View`
  flex-direction: column;
  justify-content: space-between;
  gap: 2px;
`;
export const CurrentBalanceTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.ZINC_400};
`;

export const CurrentBalanceValue = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.ZINC_950};
`;
