import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type HeaderProps = {
  color: string | undefined;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  gap: 16px;
`;

export const Header = styled.View<HeaderProps>`
  background-color: ${({ color }) => color};

`;

export const ReceiveSwitchContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ReceiveSwitch = styled(TouchableOpacity)`
  width: 50%;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const ReceiveSwitchIndicator = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 50%;
`;

export const ReceiveSwitchText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
`;

export const ValueReceiveContent = styled.View`
  padding: 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const ValueReceiveInput = styled.TextInput`
height: 56px;
  font-size: 56px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
