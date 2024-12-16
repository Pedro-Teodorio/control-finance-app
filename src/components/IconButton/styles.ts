import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type IconButtonStyle = {
  color: string;
};
export const Container = styled(TouchableOpacity)<IconButtonStyle>`
  width: auto;
  height: auto;
  padding: 16px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  
`;
