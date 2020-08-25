let now = new Date();
let p = document.querySelector("today");
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
  pinnerHTML = `${day} ${date} ${month} ${hours}:${minutes}`;