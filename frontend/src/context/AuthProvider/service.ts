import axios from "axios";

export async function refreshToken() {
  const refreshTokenStorage = localStorage.getItem("refresh_token");

  const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  try {
    const response = await axios.post(
      `${APP_BASE_URL}/api/auth/refresh_token`,
      {},
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${refreshTokenStorage}`,
        },
      }
    );

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
