function showRegForm(state) {
  var regWindow = document.getElementById("regSection");
  var greyBackground = document.getElementById("grey-background-reg");
  if (state === "none") {
    regWindow.classList.remove("visible");
    greyBackground.classList.remove("visible");
    setTimeout(function () {
      regWindow.style.display = "none";
    }, 400);
    setTimeout(function () {
      greyBackground.style.display = "none";
    }, 400);
  } else {
    regWindow.style.display = "block";
    greyBackground.style.display = "block";
    setTimeout(function () {
      regWindow.classList.add("visible");
      greyBackground.classList.add("visible");
    }, 50);
  }
}

function showLogForm(state) {
  var logWindow = document.getElementById("logSection");
  var greyBackground = document.getElementById("grey-background-log");
  if (state === "none") {
    logWindow.classList.remove("visible");
    greyBackground.classList.remove("visible");
    setTimeout(function () {
      logWindow.style.display = "none";
    }, 400);
    setTimeout(function () {
      greyBackground.style.display = "none";
    }, 400);
  } else {
    logWindow.style.display = "block";
    greyBackground.style.display = "block";
    setTimeout(function () {
      logWindow.classList.add("visible");
      greyBackground.classList.add("visible");
    }, 50);
  }
}

function generateLogFormItems() {
  var logSection = document.createElement("section");
  logSection.setAttribute("class", "log");
  var greyBackgroundDiv = document.createElement("div");
  greyBackgroundDiv.setAttribute("class", "grey-background-log");
  greyBackgroundDiv.setAttribute("id", "grey-background-log");
  greyBackgroundDiv.setAttribute("onclick", "showLogForm('none')");
  var logSectionDiv = document.createElement("div");
  logSectionDiv.setAttribute("class", "logSection");
  logSectionDiv.setAttribute("id", "logSection");
  var closeButtonImg = document.createElement("img");
  closeButtonImg.setAttribute("src", "img/x-circle.svg");
  closeButtonImg.setAttribute("alt", "cross");
  closeButtonImg.setAttribute("onclick", "showLogForm('none')");
  closeButtonImg.setAttribute("class", "x-circle");
  var logFormDiv = document.createElement("div");
  logFormDiv.setAttribute("class", "logForm");
  var formElement = document.createElement("form");
  formElement.setAttribute("class", "logForm");
  var usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("placeholder", "Имя пользователя");
  usernameInput.setAttribute("class", "auth-form-input");
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("placeholder", "Пароль");
  passwordInput.setAttribute("class", "auth-form-input");
  var linkDiv = document.createElement("div");
  linkDiv.setAttribute("class", "auth-form-btn-container");
  var loginButton = document.createElement("button");
  loginButton.setAttribute("type", "submit");
  loginButton.setAttribute("class", "auth-form-btn");
  loginButton.textContent = "Войти";
  linkDiv.appendChild(loginButton);
  formElement.appendChild(usernameInput);
  formElement.appendChild(passwordInput);
  formElement.appendChild(linkDiv);
  logFormDiv.appendChild(formElement);
  logSectionDiv.appendChild(closeButtonImg);
  logSectionDiv.appendChild(logFormDiv);
  logSection.appendChild(greyBackgroundDiv);
  logSection.appendChild(logSectionDiv);
  var existingLogSection = document.querySelector(".log");
  existingLogSection.replaceWith(logSection);
}

function generateRegFormItems() {
  var regSection = document.createElement("section");
  regSection.setAttribute("class", "reg");
  var greyBackgroundDiv = document.createElement("div");
  greyBackgroundDiv.setAttribute("class", "grey-background-reg");
  greyBackgroundDiv.setAttribute("id", "grey-background-reg");
  greyBackgroundDiv.setAttribute("onclick", "showRegForm('none')");
  var regSectionDiv = document.createElement("div");
  regSectionDiv.setAttribute("class", "regSection");
  regSectionDiv.setAttribute("id", "regSection");
  var closeButtonImg = document.createElement("img");
  closeButtonImg.setAttribute("src", "img/x-circle.svg");
  closeButtonImg.setAttribute("alt", "cross");
  closeButtonImg.setAttribute("onclick", "showRegForm('none')");
  closeButtonImg.setAttribute("class", "x-circle");
  var regFormDiv = document.createElement("div");
  regFormDiv.setAttribute("class", "regForm");
  var formElement = document.createElement("form");
  formElement.setAttribute("class", "regForm");
  var usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("placeholder", "Имя пользователя");
  usernameInput.setAttribute("class", "auth-form-input");
  var passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("placeholder", "Пароль");
  passwordInput.setAttribute("class", "auth-form-input");
  var linkDiv = document.createElement("div");
  linkDiv.setAttribute("class", "auth-form-btn-container");
  var registerButton = document.createElement("button");
  registerButton.setAttribute("type", "submit");
  registerButton.setAttribute("class", "auth-form-btn");
  registerButton.textContent = "Зарегистрироваться";
  linkDiv.appendChild(registerButton);
  formElement.appendChild(usernameInput);
  formElement.appendChild(passwordInput);
  formElement.appendChild(linkDiv);
  regFormDiv.appendChild(formElement);
  regSectionDiv.appendChild(closeButtonImg);
  regSectionDiv.appendChild(regFormDiv);
  regSection.appendChild(greyBackgroundDiv);
  regSection.appendChild(regSectionDiv);
  var existingRegSection = document.querySelector(".reg");
  existingRegSection.replaceWith(regSection);
}
generateLogFormItems();
generateRegFormItems();
function validateUsername(username) {
  var usernameRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{1,}$/;
  return usernameRegex.test(username);
}
function validatePassword(password) {
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(password);
}
function attachValidationToForm(formElement, usernameValidator, passwordValidator) {
  formElement.addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = formElement.querySelector('input[name="username"]').value;
    var password = formElement.querySelector('input[name="password"]').value;
    var isUsernameValid = usernameValidator(username);
    var isPasswordValid = passwordValidator(password);
    if (!isUsernameValid) {
      alert('Имя пользователя должно содержать только буквы и цифры, хотя бы одну заглавную букву и одну цифру.');
      return;
    }
    if (!isPasswordValid) {
      alert('Пароль должен содержать не менее 8 символов, включая как минимум одну цифру, одну заглавную и одну строчную букву.');
      return;
    }
    formElement.submit();
  });
}
var loginForm = document.querySelector('.logForm form');
var regForm = document.querySelector('.regForm form');
if (loginForm) {
  attachValidationToForm(loginForm, validateUsername, validatePassword);
}
if (regForm) {
  attachValidationToForm(regForm, validateUsername, validatePassword);
}