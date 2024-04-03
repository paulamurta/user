import { useTheme } from "styled-components";

export function rowStyles(styleType: "primary" | "secondary") {
  const { colors: theme } = useTheme();

  if (styleType === "primary") {
    return {
      position: "relative",

      "& .MuiTableCell-body": {
        border: "none",
        color: theme.typography.mediumGray,
        fontFamily: '"Inter Regular", sans-serif',
        fontWeight: "500",
        fontSize: "clamp(0.5rem, 0.15rem + 1.7vh, 1.5rem)",
        paddingY: 1.2,
        borderTop: `${theme.components.menu} 2px solid`,
        textOverflow: "ellipsis",
        maxWidth: "100px",
      },
    };
  }

  return {
    position: "relative",

    "& .MuiTableCell-body": {
      color: theme.typography.mediumGray,
      fontFamily: '"Inter Regular", sans-serif',
      fontWeight: "800",
      fontSize: "clamp(0.5rem, 0.15rem + 1.4vh, 1.5rem)",
      paddingY: 1.2,
    },
  };
}
