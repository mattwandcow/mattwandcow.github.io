const requestURL = "data/rentals.json";

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const rentals = jsonObject['rentals'];
        let page = document.getElementsByTagName('main');
        for (let i = 0; i < rentals.length; i++ ) 
        {
            //declare base shape
            let card = document.createElement('section');
            let card_head= document.createElement('div');
            let card_tail= document.createElement('div');

            //set up card head
            let image=document.createElement('img');
            image.setAttribute('src', "images/"+rentals[i].imageurl);
            image.setAttribute('alt', rentals[i].name);

            card_head.appendChild(image);

            //set up tail
            let passengers=document.createElement('p');
            passengers.textContent= "Max persons: " + rentals[i].persons;
            
            card_tail.appendChild(passengers);

            //finished, add all to card
            card.appendChild(card_head);
            card.appendChild(card_tail);
            
            //Now add it to the page
            document.querySelector('div.cards').appendChild(card);

        }
    });
