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
    document.querySelector("#showCity").innerHTML = response.data.name;
    document.querySelector("#showTemp").innerHTML = Math.round(response.data.main.temp);

  let info = document.querySelector("p4");
   let showDescription = response.data.weather[0].description;
   let showHumidity = Math.round(response.data.wind.speed);
   let showWind= response.data.main.humidity;
 
   info.innerHTML = `Mainly ${showDescription}, Humidity: ${showHumidity}% and Wind: ${showWind} km/h`
 
   celsiusTemperature = response.data.main.temp;

  let mainIcon = document.querySelector("#icon");
  mainIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
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
 
  function showFahrenheitTemperature(event) {
    event.preventDefault();
    let fahrenheitTemperature = (celsiusTemperature*9)/5+32;
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let showTemperature = document.querySelector("#showTemp");
    showTemperature.innerHTML = Math.round(fahrenheitTemperature);
  }

function showCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let showTemperature = document.querySelector("#showTemp");
  showTemperature.innerHTML = Math.round(celsiusTemperature);

}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemperature);

let celsiusTemperature = null; 

function showForecast(){
  let forecast = document.querySelector("#forecast");
  
  let forecastHTML = 
}
  
showForecast();
