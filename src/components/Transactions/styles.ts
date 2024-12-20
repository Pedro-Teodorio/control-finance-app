import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.ZINC_400};
`;
