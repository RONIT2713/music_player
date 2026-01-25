const API_BASE = "https://viridxi-backend-production.up.railway.app";



async function refreshAccessToken() {
  const refresh = localStorage.getItem("viridxi_refresh_token");

  if (!refresh) return null;

  const res = await fetch(API_BASE + "/api/auth/refresh", {

    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ refreshToken: refresh })
  });

  if (!res.ok) return null;

  const data = await res.json();

  localStorage.setItem(
    "viridxi_access_token",
    data.accessToken
  );

  return data.accessToken;
}


/* COMMON FETCH HANDLER */
async function request(url, method, body) {
  try {

    const res = await fetch(API_BASE + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(localStorage.getItem("viridxi_access_token")
          ? {
              Authorization:
                "Bearer " +
                localStorage.getItem("viridxi_access_token")
            }
          : {})
      },
      body: body ? JSON.stringify(body) : null
    });

    /* SAFE PARSE */
    let data = null;
    const text = await res.text();

    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = null;
      }
    }

    if (!res.ok) {

      if (res.status === 401) {

        const newToken = await refreshAccessToken();

        if (!newToken) {
          localStorage.removeItem("viridxi_access_token");
          localStorage.removeItem("viridxi_refresh_token");
          window.location.href = "/auth/login.html";
          return;
        }

        return request(url, method, body);
      }

      throw new Error(data?.message || "Request failed");
    }

    return data;

  } catch (err) {
    throw err;
  }
}

/* LOGIN */
export async function loginAPI(email, password) {
  return request("/api/auth/login", "POST", {
    email,
    password
  });
}


/* SIGNUP */
export async function signupAPI(
  name,
  email,
  inviteCode,
  password
) {
  return request("/api/auth/signup", "POST", {
    name,
    email,
    inviteCode,
    password
  });
}
export async function changePasswordAPI(
  currentPassword,
  newPassword
) {
  return request("/api/auth/change-password", "POST", {
    currentPassword,
    newPassword
  });
}
