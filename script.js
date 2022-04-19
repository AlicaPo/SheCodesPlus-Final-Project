let now = new Date();
let p = document.querySelector("p");
let p3 = document.querySelector("p3");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days [now.getDay()];
let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[now.getMonth()];

  p.innerHTML = `${day} ${date} ${month}`;
  p3.innerHTML = `${hours}:${minutes}`;


function showTemperature(response) {
  console.log(response);
    document.querySelector("#showCity").innerHTML = response.data.name;
    document.querySelector("#showTemp").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function searchCity(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    let apiKey = "81e6b2d984f129f52f8a7e83729f37b1";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity);
  



