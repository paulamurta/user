import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTheme } from "styled-components";
import {
  BarContainer,
  ChartContainer,
  DoughnutChart,
  LegendChart,
  LegendContainer,
  TitleContainer,
} from "./styles";
import { PropsRadiusChart } from "./types";
import { Header3, Small } from "../../../assets/styles/typography";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export function RadiusChart({ dataChart, titleChart }: PropsRadiusChart) {
  const { colors: theme } = useTheme();

  const options: ChartOptions<"doughnut"> = {
    responsive: false,
    radius: "70%",
    cutout: "0%",
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        labels: {
          index: {
            color: "black",
            font: {
              family: "Inter Bold",
              size: 12,
              weight: "bold",
            },
            formatter: (value) => {
              if (value < 20 && value) {
                return value + "%";
              } else {
                return null;
              }
            },
            align: "end",
            anchor: "end",
          },
          Legend: {
            color: "black",
            font: {
              family: "Inter Bold",
              size: 12,
              weight: "bold",
            },
            formatter: (value) => {
              if (value >= 20) {
                return value + "%";
              } else {
                return null;
              }
            },
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <BarContainer>
      <TitleContainer>
        <Header3 style={{ textAlign: "center" }}>{titleChart}</Header3>
      </TitleContainer>
      <ChartContainer>
        <DoughnutChart data={dataChart} options={options} />
      </ChartContainer>

      <LegendContainer>
        {dataChart.datasets[0].backgroundColor.map((color, i: number) => {
          return (
            <div key={i}>
              <LegendChart background={color} />
              <Small $fontColor={theme.typography.gray}>
                {dataChart.labels[i]}
              </Small>
            </div>
          );
        })}
      </LegendContainer>
    </BarContainer>
  );
}
