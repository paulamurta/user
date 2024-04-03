import api from "../../services/Api";
import { useNavigate } from "react-router-dom";
import {
  setTokenLocalStorage,
  setRefreshTokenLocalStorage,
  setProfileLocalStorage,
  setUserNameLocalStorage,
  setTransactionsLocalStorage,
  setUserIdLocalStorage,
} from "../AuthProvider/utils";
import toast from "react-hot-toast";

export function useAuth(setErrorLogin: (value: boolean) => void) {
  const navigate = useNavigate();

  async function handleLogin(cpf: string, password: string) {
    const body = {
      cpf: cpf,
      password: password,
    };

    await api
      .post("auth/login", body)
      .then((response) => {
        setTokenLocalStorage(response.data.access_token);
        setRefreshTokenLocalStorage(response.data.refresh_token);
        setProfileLocalStorage(response.data.user.profile.profile_name);
        setUserNameLocalStorage(response.data.user.user_name);
        setUserIdLocalStorage(response.data.user.user_id);
        setTransactionsLocalStorage(response.data.user.profile.transactions);
        setErrorLogin(false);
        navigate("/home");
      })
      .catch(async (error) => {
        toast.dismiss();
        setErrorLogin(true);
        toast.error(error.response.data.message);
      });
  }

  return { handleLogin };
}
