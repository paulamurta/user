import { useTheme } from "styled-components";
import {
  BaseContainer,
  ChartsContainer,
  LegendCard,
  LegendContainer,
  RadiusChartContainer,
} from "./styles";
import { IChartData, IRadiusChartData } from "../RadiusChart/types";
import { Header1, Header2 } from "../../../assets/styles/typography";
import { CircularProgressTable } from "../../CircularProgressTable";
import { RadiusChart } from "../RadiusChart";

export function ChartElement({
  radiusChartData,
  chartData,
  isLoading,
  tooltipContentFunction,
  totalValidations,
}: {
  chartData: IChartData;
  isLoading?: boolean;
  tooltipContentFunction?: (context: any) => any;
  radiusChartData: IRadiusChartData;
  totalValidations: number[];
}) {
  const { colors: theme } = useTheme();

  return (
    <BaseContainer>
      <Header2>Usuários Cadastrados</Header2>
      <LegendContainer>
        <LegendCard $color={theme.actions.successDark}>
          <Header1 $fontColor={theme.typography.body}>
            {totalValidations[0]}
          </Header1>
          <Header2>Usuários ativos</Header2>
        </LegendCard>
        <LegendCard $color={theme.actions.errorDark}>
          <Header1 $fontColor={theme.typography.body}>
            {totalValidations[1]}
          </Header1>
          <Header2>Usuários Inativos</Header2>
        </LegendCard>
        <LegendCard $color={theme.actions.infoDark}>
          <Header1 $fontColor={theme.typography.body}>
            {totalValidations[2]}
          </Header1>
          <Header2>Total de usuários</Header2>
        </LegendCard>
      </LegendContainer>
      <ChartsContainer>
        <RadiusChartContainer>
          {isLoading ? (
            <CircularProgressTable />
          ) : (
            <RadiusChart dataChart={radiusChartData} />
          )}
        </RadiusChartContainer>
      </ChartsContainer>
    </BaseContainer>
  );
}
