//weather_today, weather_day, weather_future
const apiURLweather = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=e0531f201d2ec4f905db449ba4f175d1&units=imperial";
let weather_card = document.getElementById('weather_box');

fetch(apiURLweather)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let today_box=document.createElement('div');
    today_box.setAttribute('id',"wb_today");

    let today_header = document.createElement('h2');
    today_header.textContent = "Today's Weather"

    today_imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon  + '.png';
    let today_image = document.createElement('img');
    today_image.setAttribute('src',today_imagesrc);
    today_image.setAttribute('alt',"Today's Weather Image");

    let today_temp = document.createElement('p');
    today_temp.textContent = Math.round(jsObject.main.temp)+String.fromCharCode(176)+" F";
    
    let today_hum = document.createElement('p');
    today_hum.textContent = Math.round(jsObject.main.humidity)+"%";
    
    let today_con = document.createElement('p');
    today_con.textContent = "Current Weather: "+jsObject.weather[0].description;
    today_con.setAttribute('class',"wide");

    today_box.append(today_header);
    today_box.append(today_image);
    today_box.append(today_temp);
    today_box.append(today_hum);
    today_box.append(today_con);
    weather_card.append(today_box);
}
  );

  const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=e0531f201d2ec4f905db449ba4f175d1&units=imperial"

  var weatherList;
  var d = new Date();
  fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let future_box=document.createElement('div');
    future_box.setAttribute('id',"wb_future");

    weatherList=jsObject.list;
    weatherList=weatherList.filter(element => element.dt_txt.includes("12:00:00"));
    
    var target_date=4;
    td_str=weekday(target_date+1+d.getDay());
    let future_header = document.createElement('h2');
    future_header.textContent = td_str+"'s Weather"

    future_imagesrc = 'https://openweathermap.org/img/w/' + weatherList[target_date].weather[0].icon  + '.png'; //##might be obo
    let future_image = document.createElement('img');
    future_image.setAttribute('src',future_imagesrc);
    future_image.setAttribute('alt',td_str+"'s Weather Image");

    let future_temp = document.createElement('p');
    future_temp.textContent = Math.round(weatherList[target_date].main.temp)+String.fromCharCode(176)+" F";
    future_box.append(future_header);
    future_box.append(future_image);
    future_box.append(future_temp);
    weather_card.append(future_box);


});
function weekday(value)
{
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(value>6)
    {
        return weekday[value-7];
    }
    else if(value<0)
    {
        return weekday[value+7];
    }
    else
    {
        return weekday[value];
    }

}


