import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.ZINC_50};
  border: 1px solid ${({ theme }) => theme.COLORS.EMERALD_400};
  border-radius: 10px;
  padding: 0 16px;
`;
export const Input = styled.TextInput.attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.ZINC_400,
}))`
  width: 100%;
  height: 56px;
  font-size: 16px;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.ZINC_950};
`;
