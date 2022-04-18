function showPosition(position){
    let h4 = document.querySelector("h4");
    h4.innerHTML = `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude} `;
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition)
  }

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

  
function getCurrentPosition() {

}
navigator.geolocation.getCurrentPosition




let city = Math.round(response.data.main.name)
function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    searchCity(city);}


function showTemperature(response){
    console.log();
        let temperature = Math.round(response.data.main.temp);
        let h2 = document.querySelector("h2");
       h2.innerHTML = `${temperature}`;
      }    
  
  function retrievePosition(position){
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let units = "metric";
      let apiKey = "81e6b2d984f129f52f8a7e83729f37b1";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  
      axios.get(apiUrl).then(showTemperature);
  }
  navigator.geolocation.getCurrentPosition(retrievePosition);



let apiKey = "81e6b2d984f129f52f8a7e83729f37b1";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Geneva&appid=${apiKey}&units=metric`;  

  function showTemperature(response){
    console.log(response);
        let temperature = Math.round(response.data.main.temp);
        let h2 = document.querySelector("h2");
       h2.innerHTML = `${temperature}`;
      }    
      axios.get(apiUrl).then(showTemperature);


let form = document.querySelector("#search-form");
form.addEventListener("submit", search)

function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
let p2 = document.querySelector("p2");
if (searchInput.value) {
    p2.innerHTML =`${searchInput.value},`;
} else {
    p2.innerHTML = null;
    alert("What's your city ?");
}
}