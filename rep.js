document.querySelector("#showDescription").innerHTML = response.data.weather[0].description;
    document.querySelector("#showWind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#showHumidity").innerHTML = response.data.main.humidity;


    
    p.innerHTML = `${day} ${date} ${month}`;

    <div class="weatherDetails">
<div class="row">
<div class="col-4">
  <ul class="showDetails">
    <p4 id="description "> 
      Mainly Rainy 
    </p4>
  </ul>
</div>
  <div class="col-4">
    <ul class="showDetails">
    <p5 id="humidity">
        Humidity:
    </p5>
    </ul>
</div>
<div class="col-4">
  <ul class="showDetails">
  <p6 id="wind">
      Wind:
  </p6>
  </ul>
</div>
</div>
</div>
.showDetails {
    font: italic;
    font-family:'Libre Caslon Display', serif;
    position: relative;
    display: block;
    text-align: center;
    bottom: 20px;
    padding-right: 30px;
  padding-left: 30px;
  