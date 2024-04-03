import { IconButton as IconButtonMui } from "@mui/material";
import { IconButtonProps } from "./types";
import { useTheme } from "styled-components";

export function IconButton({
  Icon,
  iconColor,
  onClick,
  size,
}: IconButtonProps) {
  const { colors: theme } = useTheme();

  return (
    <IconButtonMui size={size} onClick={onClick}>
      {Icon && (
        <Icon color={iconColor ? iconColor : theme.typography.mediumGray} />
      )}
    </IconButtonMui>
  );
}
