function search(event) {
    event.preventDefault();
    alert("Searching");
}

let form = document.querySelector("form");
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
