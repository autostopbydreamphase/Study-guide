const url =
  "https://docs.google.com/spreadsheets/d/1aI2utnfefChf0zNCuQZuzdncabPKbCVyiTke2k58jZg/export?format=csv";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    return response.text();
  })
  .then((csvData) => {
    const separator = /\",|,\"/;
    const rows = csvData.split(separator);

    console.log(rows);
    console.log(typeof rows);

    const content = document.querySelector(".content-text");
    const infoForTheme = document.querySelector(".info-for-theme1");
    let counterOfH = 0;
    let counterOfP = 0;
    for (let i = 0; i <= rows.length; i++) {
      if (i % 2 == 0) {
        content.querySelectorAll(".theme")[counterOfH].textContent = rows[i];
        counterOfH++;
      } else {
        content.querySelectorAll(".theme-text")[counterOfP].textContent = rows[i];
        counterOfP++;
      }
    }
  })
  .catch((error) => {
    console.error("error fetching data:", error);
  });
