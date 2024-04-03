import { useMemo, useState } from "react";
import { ChartElement } from "../../components/Chart/ChartElement";
import { useTheme } from "styled-components";
import { useQuery } from "react-query";
import api from "../../services/Api";

export function ChartPage() {
  const { colors: theme } = useTheme();
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  useQuery(
    "activeUsers",
    () => api.get("/user/dashboard?user_status=1").then((res) => res.data),
    {
      onSuccess: (data) => {
        setActiveUsers(data?.length || 0);
      },
    }
  );

  useQuery(
    "inactiveUsers",
    () => api.get("/user/dashboard?user_status=0").then((res) => res.data),
    {
      onSuccess: (data) => {
        setInactiveUsers(data?.length || 0);
      },
    }
  );

  const totalUsers = useMemo(
    () => activeUsers + inactiveUsers,
    [activeUsers, inactiveUsers]
  );

  const chartData = useMemo(() => {
    const activePercentage =
      totalUsers > 0 ? (activeUsers / totalUsers) * 100 : 0;
    const inactivePercentage =
      totalUsers > 0 ? (inactiveUsers / totalUsers) * 100 : 0;

    return {
      labels: ["Usuários Ativos", "Usuários Inativos"],
      datasets: [
        {
          label: "Porcentagem de Usuários",
          backgroundColor: [theme.actions.successDark, theme.actions.errorDark],
          data: [activePercentage, inactivePercentage],
        },
      ],
    };
  }, [theme, activeUsers, inactiveUsers, totalUsers]);

  const tooltipContent = [
    `Usuários Ativos: ${activeUsers} (${chartData.datasets[0].data[0].toFixed(
      2
    )}%)`,
    `Usuários Inativos: ${inactiveUsers} (${chartData.datasets[0].data[1].toFixed(
      2
    )}%)`,
  ];

  const totalValidations = [activeUsers, inactiveUsers, totalUsers];

  return (
    <ChartElement
      chartData={chartData}
      radiusChartData={chartData}
      isLoading={false}
      tooltipContentFunction={() => tooltipContent}
      totalValidations={totalValidations}
    />
  );
}
