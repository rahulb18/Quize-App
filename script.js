function signup() {
  document.querySelector(".login-form-container").style.cssText =
    "display: none;";
  document.querySelector(".signup-form-container").style.cssText =
    "display: block;";
  document.querySelector(".container").style.cssText =
    "background: linear-gradient(to bottom, rgb(56, 189, 149),  rgb(28, 139, 106));";
  document.querySelector(".button-1").style.cssText = "display: none";
  document.querySelector(".button-2").style.cssText = "display: block";
}

function login() {
  document.querySelector(".signup-form-container").style.cssText =
    "display: none;";
  document.querySelector(".login-form-container").style.cssText =
    "display: block;";
  document.querySelector(".container").style.cssText =
    "background: linear-gradient(to bottom, rgb(6, 108, 224),  rgb(14, 48, 122));";
  document.querySelector(".button-2").style.cssText = "display: none";
  document.querySelector(".button-1").style.cssText = "display: block";
}

// Sign Up

var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");

  if (email.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (
    email.value.length == 0 &&
    password.value.length == 0 &&
    confirmPassword.value.length == 0
  ) {
    alert("Please fill in email and password");
  } else if (password.value !== confirmPassword.value) {
    alert("Password does not match");
  } else {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    alert("Sign Up Successful");
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    login();
  }
});

// Log In

var loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var localStorageEmail = localStorage.getItem("email");
  var localStoragePassword = localStorage.getItem("password");

  var logInEmail = document.getElementById("logInEmail").value;
  var logInPassword = document.getElementById("logInPassword").value;

  if (
    logInEmail == localStorageEmail &&
    logInPassword == localStoragePassword
  ) {
    alert("You are logged in.");
    window.location.href = "./home.html";
  } else if (logInEmail.length == 0 || logInPassword.length == 0) {
    alert("Please fill all the required fields!");
  } else {
    alert("Wrong Credentials!");
  }
});

// Quiz Page

