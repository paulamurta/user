import { SwitchStyled } from "./styles";
import { SwitchProps } from "./types";

export function Switch({ checked, active, title, onChange }: SwitchProps) {
  return (
    <SwitchStyled
      size="medium"
      checked={checked}
      onChange={onChange}
      disabled={active}
      title={title}
    />
  );
}
