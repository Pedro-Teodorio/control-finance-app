import styled from "styled-components/native";
type DetailsFinanceIdentificationProps = {
  color: string;
};
export const Container = styled.View`
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.ZINC_50};
  padding: 24px;
  margin-top: -40px;
  border: 1px solid ${({ theme }) => theme.COLORS.EMERALD_400};
  border-radius: 10px;
  justify-content: space-around;
  gap: 16px;
`;

export const DetailsFinanceSec = styled.View`
  width: 100%;
  border-color: black;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.ZINC_50};
  justify-content: baseline;
  gap: 16px;
`;

export const DetailsFinanceIdentification = styled.View<DetailsFinanceIdentificationProps>`
  width: 6px;
  height: 72px;
  background-color: ${({ color }) => color};
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
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.ZINC_400};
`;

export const CurrentBalanceValue = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.ZINC_950};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.ZINC_300};
`;
