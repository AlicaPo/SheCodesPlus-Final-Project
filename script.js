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
 
   info.innerHTML = `Mainly ${showDescription}, Humidity: ${showHumidity}% and Wind: ${showWind} m/h`
 
   celsiusTemperature = response.data.main.temp;

  let mainIcon = document.querySelector("#icon");
  mainIcon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

  getForecast(response.data.coord);
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

function showForecast(response){
  let forecast = response.data.daily;
  let forecastSelector = document.querySelector("#forecast");
  
  let forecastHTML = `<div class= "row">`; 
  forecast.forEach(function(forecastDay, index) {
    if (index < 5) {
    forecastHTML = forecastHTML + 
  ` <div class="col-2">
  <div class="weekday">
    <div class="day">
      ${formatDay(forecastDay.dt)}
    </div>
    <div class="dayIcon">
      <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" id="secondIcon" width="60" />
    </div>
    <div class="daytemp">
    <span>
    ${Math.round(forecastDay.temp.day)}°${Math.round(forecastDay.temp.eve)}°
    </span>
    </div>
  </div>
</div>`;}});

  forecastHTML = forecastHTML + `</div>`;
  forecastSelector.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "81e6b2d984f129f52f8a7e83729f37b1";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast);
}

function formatDay(timestamp){
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
  

