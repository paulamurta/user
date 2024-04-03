import { FiUsers as Users, FiHome, FiPieChart } from "react-icons/fi";

export const routes = [
  {
    path: "/home",
    breadcrumb: "Home",
    icon: <FiHome />,
  },
  {
    path: "/users",
    breadcrumb: "Usuários",
    icon: <Users />,
    children: [{ path: "/users/new", breadcrumb: "Cadastro de Usuários" }],
  },

  {
    path: "/charts",
    breadcrumb: "Análises",
    icon: <FiPieChart />,
  },
];

export const routesSideBar = [
  {
    path: "/home",
    breadcrumb: "Home",
    icon: <FiHome />,
  },
  {
    path: "/users",
    breadcrumb: "Usuários",
    icon: <Users />,
    children: [{ path: "/users/new", breadcrumb: "Cadastro de Usuários" }],
  },

  {
    path: "/charts",
    breadcrumb: "Análises",
    icon: <FiPieChart />,
  },
];
