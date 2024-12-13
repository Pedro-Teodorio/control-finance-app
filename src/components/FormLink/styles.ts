import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 56px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.ZINC_950};
`;
export const Link = styled(TouchableOpacity)`
  width: auto;
  height: auto;
`;
export const TextLink = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.EMERALD_400};
  font-weight: bold;
`;
