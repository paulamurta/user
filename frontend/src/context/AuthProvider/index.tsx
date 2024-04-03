import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAccessToken, getDecodedToken } from "../../utils/auth";
import { IAuthContext, IAuthProvider } from "./types";
import { getTokenLocalStorage } from "./utils";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [userName, setUserName] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [visibleModalLogout, setVisivleModalLogout] = useState<boolean>(false);
  const [profile, setProfile] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<number[]>([]);
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const navigate = useNavigate();

  const { handleLogin } = useAuth(setErrorLogin);

  const tokenByLocalStorage: string | null = getTokenLocalStorage();

  useEffect(() => {
    const decoded_access_token: IAccessToken | undefined = getDecodedToken();

    if (decoded_access_token) {
      setTransactions(decoded_access_token?.transactions ?? []);
      setUserName(decoded_access_token?.identifier ?? null);
      setName(decoded_access_token?.name ?? null);
      setProfile(decoded_access_token?.profile_name ?? null);
    }
  }, [tokenByLocalStorage]);

  useEffect(() => {
    let timeoutId: any;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.location.pathname === "/login") {
          navigate("/");
          toast.dismiss();
        }
      }, 30000);
    };

    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);

    resetTimeout();

    return () => {
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const Logout = (logged: boolean) => {
    localStorage.clear();

    navigate("/login");

    if (!logged) {
      toast.success("Usuário desconectado");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userName,
        profile,
        transactions,
        handleLogin,
        errorLogin,
        setErrorLogin,
        name,
        Logout,
        visibleModalLogout,
        setVisivleModalLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
