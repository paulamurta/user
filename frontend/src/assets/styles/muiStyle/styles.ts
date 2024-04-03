import { useTheme } from "styled-components";
import { lighten } from "polished";

export function InputTheme() {
  const { colors: theme } = useTheme();

  return {
    "&": {
      ".MuiInputBase-root": {
        backgroundColor: theme.components.form,
        transition: " all 0.3s ease",
        borderRadius: "4px !important",

        "&:after": {
          borderBottomColor: `${theme.components.header} !important`,
        },

        "&:before": {
          border: "none",
        },

        "&.Mui-error": {
          "&:after": {
            borderBottomColor: `${theme.actions.error} !important`,
            fontFamily: "'Inter Bold'",
          },
        },

        "&.MuiAutocomplete-root": {
          padding: 0,
        },
      },

      ".Mui-disabled": {
        backgroundColor: lighten(0.04, theme.components.table),
      },

      label: {
        fontFamily: "'Inter Bold'",
        color: theme.typography.text,
        fontSize: "clamp(0.15rem, 0.25rem + 1.5vh, 2rem)",

        "&.Mui-focused": {
          color: theme.typography.blue,
        },

        "&.MuiInputLabel-shrink": {
          color: theme.typography.blue,
        },
      },
    },

    "& .MuiInputLabel-root": {
      "&.Mui-error": {
        color: `${theme.actions.error} !important`,
      },
    },

    "&:hover": {
      border: "none",
      backgroundColor: theme.components.form,

      ".MuiInputBase-root": {
        backgroundColor: lighten(0.04, theme.components.form),

        "&:before": {
          border: "none !important",
        },

        "&:after": {
          borderBottomColor: `${theme.typography.blue} !important`,
        },

        "&.Mui-error": {
          "&:after": {
            borderBottomColor: `${theme.actions.error} !important`,
          },
        },
      },
    },

    "& input": {
      color: theme.typography.blueGray,
      height: "58px",
      boxSizing: "border-box",
      borderRadius: "4px !important",
      fontSize: "clamp(0.2rem, 0.25rem + 1.6vh, 2rem)",
      fontFamily: "'Inter Regular'",

      "&:-webkit-autofill": {
        border: "none",
        backgroundColor: `${theme.components.form} !important`,
        boxShadow: "none",
        color: `${theme.components.active} !important`,
      },

      "&:disabled": {
        backgroundColor: lighten(0.04, theme.components.form),
      },

      "&.button": {
        backgroundColor: `${theme.components.active} !important`,
      },
    },
  };
}

export function MultipleInputTheme() {
  const { colors: theme } = useTheme();

  return {
    width: "100%",
    borderRadius: "16px !important",
    borderColor: "red !important",

    ".MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.components.border} !important`,
      borderWidth: "1px !important",
    },

    ".MuiPaper-root": {
      borderColor: `red !important`,
    },
  };
}

export function SelectTheme() {
  const { colors: theme } = useTheme();

  return {
    "&": {
      backgroundColor: theme.components.form,
      transition: " all 0.3s ease",
      borderRadius: "4px !important",

      ".MuiInputBase-input": {
        color: theme.typography.white,
        fontSize: "clamp(0.2rem, 0.25rem + 1.6vh, 2rem)",
        fontFamily: "'Inter Bold' !important",
      },
      "&:after": {
        borderBottomColor: `${theme.typography.blue} !important`,
      },

      "&:before": {
        border: "none",
      },
    },

    ".MuiSelect-select": {
      backgroundColor: theme.components.form,
      "&:hover": {
        backgroundColor: lighten(0.04, theme.components.form),
      },
    },

    "&:hover": {
      border: "none",

      "&:before": {
        border: "none !important",
      },
    },
  };
}

export function InputLabelTheme() {
  const { colors: theme } = useTheme();

  return {
    fontFamily: "'Inter Bold'",
    color: theme.typography.white,
    fontSize: "clamp(0.15rem, 0.25rem + 1.5vh, 2rem)",

    "&.Mui-focused": {
      color: theme.typography.blue,
    },

    "&.MuiInputLabel-shrink": {
      color: theme.typography.blue,
    },
  };
}
