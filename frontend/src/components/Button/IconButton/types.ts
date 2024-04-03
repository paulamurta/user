import { ButtonHTMLAttributes } from "react";

interface CustomIconProps {
  color?: string;
}

type IconComponent = React.ComponentType<CustomIconProps>;

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconComponent;
  iconColor?: string;
  size: "large" | "small";
}
