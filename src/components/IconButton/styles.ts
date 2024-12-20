import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type IconButtonStyle = {
  width?: string;
  height?:string;
  color: string;
};
export const Container = styled(TouchableOpacity)<IconButtonStyle>`
  width: ${({ width }) => width};
  height:${({ height }) => height};
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  
`;
