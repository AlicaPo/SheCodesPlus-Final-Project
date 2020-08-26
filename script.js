function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
let p2 = document.querySelector("p2");
if (searchInput.value) {
    p2.innerHTML =`${searchInput.value},`;
} else {
    p2.innerHTML = null;
    alert("What's your city ? 👽");
}
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search)

let now = new Date();
let p = document.querySelector("p");
let p3 = document.querySelector("p3");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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

let city = "event"; 
  let apiKey = "81e6b2d984f129f52f8a7e83729f37b1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
