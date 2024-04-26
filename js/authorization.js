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
  event.preventDefault();
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
  var loginButton = document.createElement("a");
  loginButton.setAttribute("href", "index.html");
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
    var logSection = document.createElement("section");
    logSection.setAttribute("class", "reg");
    var greyBackgroundDiv = document.createElement("div");
    greyBackgroundDiv.setAttribute("class", "grey-background-reg");
    greyBackgroundDiv.setAttribute("id", "grey-background-reg");
    greyBackgroundDiv.setAttribute("onclick", "showRegForm('none')");
    var logSectionDiv = document.createElement("div");
    logSectionDiv.setAttribute("class", "regSection");
    logSectionDiv.setAttribute("id", "regSection");
    var closeButtonImg = document.createElement("img");
    closeButtonImg.setAttribute("src", "img/x-circle.svg");
    closeButtonImg.setAttribute("alt", "cross");
    closeButtonImg.setAttribute("onclick", "showRegForm('none')");
    closeButtonImg.setAttribute("class", "x-circle");
    var logFormDiv = document.createElement("div");
    logFormDiv.setAttribute("class", "regForm");
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
    var loginButton = document.createElement("a");
    loginButton.setAttribute("href", "index.html");
    loginButton.setAttribute("class", "auth-form-btn");
    loginButton.textContent = "Зарегистрироваться";
    linkDiv.appendChild(loginButton);
    formElement.appendChild(usernameInput);
    formElement.appendChild(passwordInput);
    formElement.appendChild(linkDiv);
    logFormDiv.appendChild(formElement);
    logSectionDiv.appendChild(closeButtonImg);
    logSectionDiv.appendChild(logFormDiv);
    logSection.appendChild(greyBackgroundDiv);
    logSection.appendChild(logSectionDiv);
    var existingLogSection = document.querySelector(".reg");
    existingLogSection.replaceWith(logSection);
}

generateLogFormItems();
generateRegFormItems();