import React from "react";
import { icons } from "lucide-react-native";

type Props = {
  name: string;
  size: number;
  color: string;
};

export function Icon({ color, name, size }: Props) {
  const LucideIcon = icons[name as keyof typeof icons];
  return <LucideIcon size={size} color={color} />;
}
