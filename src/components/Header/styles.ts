import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.EMERALD_400};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.ZINC_400};
`;
