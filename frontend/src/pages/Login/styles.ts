import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.components.backgroundGray};
`;

export const IllustrationBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 90%;
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  padding: 3vw;
`;

export const GrayBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 6vh;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.components.table};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 2vw;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 80%;
  gap: 2vh;
  height: 100%;

  button {
    margin-top: 2vh;
  }
`;

export const Logo = styled.img`
  max-height: 45%;
`;

export const ToastLoginWrapper = styled.div`
  position: relative;
  width: 100%;
`;
