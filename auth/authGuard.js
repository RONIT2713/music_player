import { getAccessToken, clearTokens } from "./token.js";

export async function authGuard() {

  const token = getAccessToken();

  if (!token) {
    window.location.href = "/auth/login.html";
    return false;
  }

  try {

const res = await fetch(
  "https://api.viridximusic.com/api/auth/me",
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
    window.location.href = "/auth/login.html";
    return false;
  }
}
