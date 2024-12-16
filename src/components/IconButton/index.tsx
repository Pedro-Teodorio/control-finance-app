import React from "react";
import { Container, IconButtonStyle } from "./styles";
import Icon from "../Icon";
import { TouchableOpacityProps } from "react-native";
import { icons } from "lucide-react-native";

type Props = IconButtonStyle & TouchableOpacityProps &{
  nameIcon: keyof typeof icons;
  sizeIcon: number;
  colorIcon: string;
};
export function IconButton({ nameIcon, sizeIcon,colorIcon ,color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Icon name={nameIcon} size={sizeIcon} color={colorIcon} />
    </Container>
  );
}
