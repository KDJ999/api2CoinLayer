const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "logo.jpg";
app.appendChild(logo);
const baseURL =
  "http://api.coinlayer.com/api/live?access_key=15fbbb5fcdd3c07b067bf7719504e750";
console.log(baseURL);
let url;

const searchForm = document.querySelector("form");
const rateInfo = document.querySelector("table");
searchForm.addEventListener("submit", fetchCoin);

function fetchCoin() {
  event.preventDefault();
  fetch(baseURL)
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      displayConversion(json);
    });
}
function displayConversion(json) {
  console.log("Results:", json);
  let keys = Object.keys(json);
  let values = Object.values(json);

  keys.forEach((c) => {
    let rates = document.createElement("tr");
    let ratesInUsd = document.createElement("td");

    rateInfo.appendChild(rates);
    rates.appendChild(ratesInUsd);

    ratesInUsd.innerText = values;
    rates.innerText = keys;
  });
}
