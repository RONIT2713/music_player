const token = localStorage.getItem("viridxi_access_token");

if (token) {
  window.location.href = "/index.html";
}

import { loginAPI, signupAPI } from "./api.js";
import { saveTokens } from "./token.js";

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

const openSignup = document.getElementById("open-signup");
const backLogin = document.getElementById("back-login");

const subtitle = document.getElementById("form-subtitle");

document.getElementById("forgot-btn")
.addEventListener("click",()=>{
  alert("Feature coming soon");
});


/* SWITCH TO SIGNUP */
openSignup.addEventListener("click",()=>{

  // CLEAR ERRORS
  document.getElementById("login-error").style.display="none";
  document.getElementById("signup-error").style.display="none";

  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
  subtitle.textContent = "Create your account";
});


/* BACK TO LOGIN */
backLogin.addEventListener("click",()=>{

  // CLEAR ERRORS
  document.getElementById("login-error").style.display="none";
  document.getElementById("signup-error").style.display="none";

  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  subtitle.textContent = "Login to your account";
});


/* LOGIN SUBMIT */
loginForm.addEventListener("submit", async (e)=>{

  e.preventDefault();

  const email =
   document.getElementById("login-username").value.trim();
  const p =
   document.getElementById("login-password").value.trim();

  const err = document.getElementById("login-error");
  err.style.display = "none";

  if(!email || !p){
  err.textContent =
   "Email and password required";

    err.style.display = "block";
    return;
  }


        try{

    const res = await loginAPI(email,p);


    // EXPECTED BACKEND RESPONSE:
    // { accessToken, refreshToken }

    saveTokens(res.accessToken, res.refreshToken);
    

   window.location.href = "/index.html";// "Login successful"


    }catch(error){
      err.textContent = error.message;
      err.style.display = "block";
    }



});


/* SIGNUP SUBMIT */
signupForm.addEventListener("submit", async (e)=>{

  e.preventDefault();

    const name =
    document.getElementById("signup-username").value.trim();

  const e1 =
   document.getElementById("signup-email").value.trim();
  const p =
   document.getElementById("signup-password").value.trim();
  const c =
   document.getElementById("signup-confirm").value.trim();

  const err =
   document.getElementById("signup-error");
  err.style.display = "none";

  if(!name||!e1||!p||!c){

    err.textContent =
     "All fields are required";
    err.style.display = "block";
    return;
  }

  if(p!==c){
    err.textContent =
     "Passwords do not match";
    err.style.display = "block";
    return;
  }

    try{

    await signupAPI(name,e1,p);


    // AFTER SUCCESS
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    signupForm.reset();
    subtitle.textContent =
    "Login to your account";

    }catch(error){
      err.textContent = error.message;
      err.style.display = "block";
    }

});
