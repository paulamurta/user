import home from "../../assets/images/home.gif";
import { LeftContainer, PageContainer, RightContainer } from "./styles";
import { useTheme } from "styled-components";
import { Header1, Header4 } from "../../assets/styles/typography";

export function Home() {
  const { colors: theme } = useTheme();
  return (
    <PageContainer>
      <LeftContainer>
        <Header1 $fontColor={theme.typography.gray}>Olá, Usuário!</Header1>

        <Header4 $fontColor={theme.typography.placeholder}>
          Seja bem-vindo(a) ao software de monitoramento DataStorage!
        </Header4>
      </LeftContainer>

      <RightContainer>
        <img src={home} alt="home" />
      </RightContainer>
    </PageContainer>
  );
}
