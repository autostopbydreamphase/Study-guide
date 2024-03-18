const url = 'https://docs.google.com/spreadsheets/d/1aI2utnfefChf0zNCuQZuzdncabPKbCVyiTke2k58jZg/export?format=csv';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('network response was not ok');
    }
    return response.text();
  })
  .then(csvData => {
    const rows = csvData.split('\"\r');
    console.log(rows);
    console.log(typeof(rows));
    const content = document.querySelector('.content-text');
    content.querySelectorAll(".theme")[1].textContent = rows[0];

    // content.textContent = rows[0];

  })
  .catch(error => {
    console.error('error fetching data:', error);
  });
