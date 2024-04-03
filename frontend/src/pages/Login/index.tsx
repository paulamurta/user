import { ButtonMain } from "../../components/Button/ButtonMain";
import { Information } from "../../assets/styles/typography";
import { useAuthGlobal } from "../../context/AuthProvider/useAuthGlobal";
import { useEffect, useState } from "react";
import { DefaultInput } from "../../components/Input/DefaultInput";
import {
  Background,
  ButtonBox,
  GrayBox,
  Illustration,
  IllustrationBox,
  LoginBox,
  LoginForm,
  Logo,
} from "./styles";
import dataLogin from "../../assets/images/data-login.gif";
import logo from "../../assets/images/logo_brand.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleLogin, errorLogin } = useAuthGlobal();
  const isFormValid = userLogin && userPassword;
  const navigate = useNavigate();

  function handleUserLogin(event: React.ChangeEvent<HTMLInputElement>) {
    setUserLogin(event.target.value);
  }

  function handleUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserPassword(event.target.value);
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    await handleLogin(userLogin, userPassword);
    setIsLoading(false);
  }

  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <>
      <Background>
        <IllustrationBox>
          <Illustration src={dataLogin} />
        </IllustrationBox>

        <LoginBox>
          <GrayBox>
            <Logo src={logo} />
            <LoginForm onSubmit={handleSubmit}>
              <DefaultInput
                disabled={true}
                id="login"
                placeholder="Login*"
                width="100%"
                value={userLogin}
                onChange={handleUserLogin}
                error={errorLogin}
              />
              <DefaultInput
                disabled={true}
                id="password"
                placeholder="Senha*"
                width="100%"
                type="password"
                value={userPassword}
                showPassword={showPassword}
                toggleShowPassword={handleClickShowPassword}
                onChange={handleUserPassword}
                error={errorLogin}
              />
              <Information>*Campos obrigatórios</Information>
              <ButtonBox>
                {" "}
                <ButtonMain
                  $style="secondary"
                  type="submit"
                  label="Entrar"
                  disabled={!isFormValid || isLoading}
                  isLoading={isLoading}
                  height="7vh"
                />
                <ButtonMain
                  // $style="secondary"
                  onClick={() => navigate("/home")}
                  type="button"
                  label="Ir para Home"
                  isLoading={isLoading}
                  height="7vh"
                />
              </ButtonBox>
            </LoginForm>
          </GrayBox>
        </LoginBox>
      </Background>
    </>
  );
}
