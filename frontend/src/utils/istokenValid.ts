import { jwtDecode } from "jwt-decode";

export function isTokenValid(token: any) {
  const decodedToken: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp > currentTime;
}
