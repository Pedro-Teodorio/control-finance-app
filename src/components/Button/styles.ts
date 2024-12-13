import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.EMERALD_400};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
