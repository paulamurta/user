import { Outlet, Route, Routes as RoutesWrapper } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContainerRoutes } from "./styled";
import { Layout } from "../components/Layout";
import { User } from "../pages/Users";
import { NewUser } from "../pages/Users/NewUser";
import { Login } from "../pages/Login";
import { ChartPage } from "../pages/Charts";

export function Routes() {
  const SidebarLayout = () => (
    <>
      <Layout>
        <ContainerRoutes>
          <Outlet />
        </ContainerRoutes>
      </Layout>
    </>
  );
  return (
    <RoutesWrapper>
      <Route path="/" element={<Login />} />
      <Route element={<SidebarLayout />}>
        <Route path="/home" element={<Home />} />

        <Route path="/users">
          <Route path="" element={<User />} />
          <Route path="new" element={<NewUser />} />
        </Route>

        <Route path="/charts" element={<ChartPage />} />
      </Route>
    </RoutesWrapper>
  );
}
