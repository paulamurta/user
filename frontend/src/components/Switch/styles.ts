import styled from "styled-components";
import { Switch } from "@mui/material";
import { lighten } from "polished";

export const SwitchStyled = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.colors.actions.success,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: lighten(0.2, theme.colors.actions.success),
  },
}));
