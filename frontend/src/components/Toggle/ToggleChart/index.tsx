import { Toggle, ToggleContainer } from "./styles";
import { toggleChartProps } from "./types";
import { FaListUl as ListIcon } from "react-icons/fa6";
import { FiPieChart as ChartIcon } from "react-icons/fi";

export function ToggleChart({
  onChangeFirstButton,
  onChangeSecondButton,
  onOff,
}: toggleChartProps) {
  return (
    <ToggleContainer>
      <Toggle $isActive={onOff === true}>
        <button onClick={onChangeFirstButton}>
          <ListIcon />
        </button>
      </Toggle>
      <Toggle $isActive={onOff === false}>
        <button onClick={onChangeSecondButton}>
          <ChartIcon />
        </button>
      </Toggle>
    </ToggleContainer>
  );
}
