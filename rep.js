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
  


<div class="row">
      <div class="col-2">
        <ul class="weekday border">
          <li class="day">
            Mon
          </li>
          <li class="dayIcon">
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="Clear" id="secondIcon" width="60" />
          </li>
          <li class="daytemp">
            16°
          </li>
        </ul>
      </div>
  </div>
  

  <div class="col-2">
        <ul class="weekday border">
          <li class="day">
            Tue
          </li>
          <li class="dayIcon">
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="Clear" id="secondIcon" width="60" />
          </li>
          <li class="daytemp">
            16°
          </li>
        </ul>
      </div>
      <div class="col-2">
        <ul class="weekday border">
          <li class="day">
            Wed
          </li>
          <li class="dayIcon">
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="Clear" id="secondIcon" width="60" />
          </li>
          <li class="daytemp">
            16°
          </li>
        </ul>
      </div>
      <div class="col-2">
        <ul class="weekday border">
        <li class="day">
          Thu
        </li>
        <li class="dayIcon">
          <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="Clear" id="secondIcon" width="60" />
        </li>
        <li class="daytemp">
          16°
        </li>
      </ul></div>
      <div class="col-2">
        <ul class="weekday border">
          <li class="day">
            Fri
          </li>
          <li class="dayIcon">
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="Clear" id="secondIcon" width="60" />
          </li>
          <li class="daytemp">
            16°
          </li>
        </ul>
      </div>
    </div>