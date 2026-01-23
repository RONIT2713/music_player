/* ================= TOKEN MANAGER ================= */

const TOKEN_KEYS = {
  access: "viridxi_access_token",
  refresh: "viridxi_refresh_token"
};

/* SAVE TOKENS */
export function saveTokens(access, refresh){
  localStorage.setItem(TOKEN_KEYS.access, access);
  localStorage.setItem(TOKEN_KEYS.refresh, refresh);
}

/* GET ACCESS TOKEN */
export function getAccessToken(){
  return localStorage.getItem(TOKEN_KEYS.access);
}

/* GET REFRESH TOKEN */
export function getRefreshToken(){
  return localStorage.getItem(TOKEN_KEYS.refresh);
}

/* CLEAR TOKENS */
export function clearTokens(){
  localStorage.removeItem(TOKEN_KEYS.access);
  localStorage.removeItem(TOKEN_KEYS.refresh);
}


/* GET USER ID FROM TOKEN */
export function getUserId() {

  const token = getAccessToken();
  if (!token) return null;

  const payload = token.split(".")[1];
  const decoded = JSON.parse(atob(payload));

  return decoded.id;
}
