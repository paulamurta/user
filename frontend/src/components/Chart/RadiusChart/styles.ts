import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { LegendProps } from "./types";

export const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const DoughnutChart = styled(Doughnut)`
  height: auto !important;
  width: 100% !important;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LegendContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

export const LegendChart = styled.div<LegendProps>`
  background-color: ${({ background, theme }) =>
    background ? background : theme.colors.components.header};
  width: 20px;
  height: 18px;
`;
