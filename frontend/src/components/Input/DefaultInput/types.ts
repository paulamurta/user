import { InputHTMLAttributes } from "react";

export type DefaultInputProps = {
  label?: string;
  width?: string;
  error?: boolean;
  removeError?: (e: boolean) => void;
  line?: string;
  small?: boolean;
  isMultiline?: boolean;
  adornment?: string;
  shrink?: boolean;
  rows?: number;
  type?: string;
  showPassword?: boolean;
  disabled?: boolean;
  toggleShowPassword?: () => void;
  allowLeadingZero?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
