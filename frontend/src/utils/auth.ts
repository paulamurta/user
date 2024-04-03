import { jwtDecode } from "jwt-decode";

export interface IAccessToken {
  id: string | null;
  identifier?: string | null;
  name?: string | null;
  profile_name?: string;
  transactions?: number[];
  iat?: number;
  exp?: number;
  profile_id?: number;
}

export function getDecodedToken(): IAccessToken | undefined {
  try {
    return jwtDecode(localStorage.getItem("acc_token") || "");
  } catch (error) {}
}
