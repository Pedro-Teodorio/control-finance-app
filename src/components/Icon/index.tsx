import React from "react";
import { icons } from "lucide-react-native";

type Props = {
  name: keyof typeof icons; // Ensure name is a valid icon key
  size: number;
  color: string;
};

export default function Icon({ color, name, size }: Props) {
  const LucideIcon = icons[name]; // Directly access the icon component

  return <LucideIcon size={size} color={color} />;
}