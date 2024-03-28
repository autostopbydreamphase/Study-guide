function loadJSON(file, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", file, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

var contentElement = document.getElementById("content-text");
var asideElement = document.getElementById("aside-themes");
var urlParams = new URLSearchParams(window.location.search);
var selectedTheme = urlParams.get("theme");

function createResultElements() {
  if (asideElement != null && contentElement != null) {
    var asideResultDiv = document.createElement("div");

    var asideResultTitle = document.createElement("li");
    var asideResultLink = document.createElement("a");
    var resultDiv = document.createElement("div");
    var resultId = "итоги";
    var resultParagraph = document.createElement("p");
    var resultTitle = document.createElement("h4");
    asideResultLink.setAttribute("href", "#" + resultId);
    asideResultDiv.appendChild(asideResultTitle);
    asideResultTitle.appendChild(asideResultLink);
    asideResultLink.textContent = "Итоги";
    asideElement.appendChild(asideResultDiv);
    asideResultDiv.classList.add("aside-themes");
    resultDiv.classList.add("themes");
    resultTitle.setAttribute("id", resultId);
    resultTitle.textContent = "Итоги";
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultParagraph);
    resultParagraph.textContent = "Итоги";
    contentElement.appendChild(resultDiv);
  }
}

function updateTheme(theme, themeType) {
  loadJSON(theme + ".json", function (data) {
    contentElement.innerHTML = "";
    asideElement.innerHTML = "";

    var themes = data[themeType];
    themes.forEach(function (themeData) {
      var themeDiv = document.createElement("div");
      themeDiv.classList.add("theme");
      var titleElement = document.createElement("h4");
      var id = themeData.title.toLowerCase().replace(/\s+/g, "-");
      titleElement.setAttribute("id", id);
      titleElement.textContent = themeData.title;
      var contentParagraph = document.createElement("p");
      contentParagraph.textContent = themeData.content;
      var asideThemesDiv = document.createElement("div");
      asideThemesDiv.classList.add("aside-themes");
      var asideTitle = document.createElement("li");
      var asideLink = document.createElement("a");
      asideLink.setAttribute("href", "#" + id);
      asideThemesDiv.appendChild(asideTitle);
      asideTitle.appendChild(asideLink);
      asideLink.textContent = themeData.title;

      themeDiv.appendChild(titleElement);
      themeDiv.appendChild(contentParagraph);

      contentElement.appendChild(themeDiv);
      asideElement.appendChild(asideThemesDiv);
    });
    createResultElements();
  });
}

updateTheme("html-themes", selectedTheme);
