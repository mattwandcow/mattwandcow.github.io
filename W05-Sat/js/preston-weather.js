const apiURLweather = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=e0531f201d2ec4f905db449ba4f175d1&units=imperial"

fetch(apiURLweather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
//First, set the Current box
document.getElementById('current_weather').textContent = jsObject.weather[0].main;
var temperature =jsObject.main.temp;
var windspeed =jsObject.wind.speed;

document.getElementById('dayTemp').textContent = temperature;
document.getElementById('dayWind').textContent = windspeed;
document.getElementById('windChill').textContent = calcWindchill (temperature,windspeed).toFixed(2);
document.getElementById('dayHum').textContent = jsObject.main.humidity;

  });
  const apiURLforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e0531f201d2ec4f905db449ba4f175d1&units=imperial"

  var weatherList;

  fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    weatherList=jsObject.list;
    weatherList=weatherList.filter(element => element.dt_txt.includes("18:00:00"));
    
    
    document.getElementById('dailyTemp1').textContent = weatherList[0].main.temp;
    imagesrc = 'https://openweathermap.org/img/w/' + weatherList[0].weather[0].icon  + '.png';  // note the concatenation
    desc = weatherList[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('dayImg1').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('dayImg1').setAttribute('alt', desc);
    
    document.getElementById('dailyTemp2').textContent = weatherList[1].main.temp;
    imagesrc = 'https://openweathermap.org/img/w/' + weatherList[1].weather[0].icon  + '.png';  // note the concatenation
    desc = weatherList[1].weather[0].description;  // note how we reference the weather array
    document.getElementById('dayImg2').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('dayImg2').setAttribute('alt', desc);
    
    document.getElementById('dailyTemp3').textContent = weatherList[2].main.temp;
    imagesrc = 'https://openweathermap.org/img/w/' + weatherList[2].weather[0].icon  + '.png';  // note the concatenation
    desc = weatherList[2].weather[0].description;  // note how we reference the weather array
    document.getElementById('dayImg3').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('dayImg3').setAttribute('alt', desc);
    
    document.getElementById('dailyTemp4').textContent = weatherList[3].main.temp;
    imagesrc = 'https://openweathermap.org/img/w/' + weatherList[3].weather[0].icon  + '.png';  // note the concatenation
    desc = weatherList[3].weather[0].description;  // note how we reference the weather array
    document.getElementById('dayImg4').setAttribute('alt', desc);
    document.getElementById('dayImg4').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    
    document.getElementById('dailyTemp5').textContent = weatherList[4].main.temp;
    imagesrc = 'https://openweathermap.org/img/w/' + weatherList[4].weather[0].icon  + '.png';  // note the concatenation
    desc = weatherList[4].weather[0].description;  // note how we reference the weather array
    document.getElementById('dayImg5').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('dayImg5').setAttribute('alt', desc);


});


  function calcWindchill(temp, speed)
  {
      if(temp>50 || speed<3.0)
      {
          return 0;
      }
      else
      {
          var newtemp=35.74;
          newtemp+=temp*0.6215;
          newtemp-=35.75*Math.pow(speed,.16);
          newtemp+=.4275*temp*Math.pow(speed,.16);
          return newtemp;
      }
  
  }