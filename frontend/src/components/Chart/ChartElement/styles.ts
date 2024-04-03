import styled from "styled-components";

interface ILegendCard {
  $color: string;
}

export const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.components.menu};
  border-radius: 5px;
  box-shadow: 0px 0px 3px #00000029;
  padding: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
`;

export const LegendContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LegendCard = styled.div<ILegendCard>`
  background-color: ${({ $color }) => $color};
  width: calc(100% / 3 - 5px);
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 3vw;
  gap: 2vw;
`;

export const ChartsContainer = styled.div`
  height: 75%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RadiusChartContainer = styled.div`
  padding: 5vw;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
