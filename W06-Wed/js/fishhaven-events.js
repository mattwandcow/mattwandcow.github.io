const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        let town_number=1;  //[Preston=5, Soda Springs=6, Fish haven=1]
        let card = document.getElementById('town_events');
        let eventBlock = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.textContent = "Upcoming Events";
        eventBlock.appendChild(h2);

        let span1 =document.createElement('p');
        span1.textContent= towns[town_number].events[0]
        let span2 =document.createElement('p');
        span2.textContent=  towns[town_number].events[1]
        let span3 =document.createElement('p');
        span3.textContent=  towns[town_number].events[2]
        eventBlock.appendChild(span2);
        eventBlock.appendChild(span1);
        eventBlock.appendChild(span3);
        
        card.appendChild(eventBlock);
        
    });