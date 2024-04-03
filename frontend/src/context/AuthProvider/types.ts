export interface IAuthProvider {
  children: JSX.Element;
}

export interface IAuthContext {
  transactions?: number[];
  userName?: string | null;
  profile?: string | null;
  name?: string | null;
  Logout?: (boolean: boolean) => void;
  setVisivleModalLogout: (boolean: boolean) => void;
  handleLogin: (cpf: string, password: string) => void;
  visibleModalLogout?: boolean;
  errorLogin: boolean;
  setErrorLogin: (boolean: boolean) => void;
}
