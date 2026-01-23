import { getAccessToken, clearTokens } from "./token.js";

export async function authGuard() {

  const token = getAccessToken();

  if (!token) {
    window.location.href = "/app/auth/login.html";
    return false;
  }

  try {

    const res = await fetch(
      "http://localhost:5000/api/auth/activity",
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    );

    if (!res.ok) {
      throw new Error("Unauthorized");
    }

    return true;

  } catch {

    clearTokens();
    window.location.href = "/app/auth/login.html";
    return false;
  }
}
