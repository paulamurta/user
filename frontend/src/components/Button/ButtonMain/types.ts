import { ButtonHTMLAttributes } from "react";

export type ButtonMainProps = {
  label?: string;
  width?: string;
  height?: string;
  $style?: string;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
