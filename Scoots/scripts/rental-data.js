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
            
            let h2 = document.createElement('h2');
            h2.textContent = rentals[i].name;
            card_head.appendChild(h2);

            //set up tail
            let passengers=document.createElement('p');
            passengers.textContent= "Max persons: " + rentals[i].persons;
            card_tail.appendChild(passengers);

            let grid = document.createElement('table');
            let th = document.createElement('thead');
            let tr0= document.createElement('tr');
                let td0a =document.createElement('td');
                td0a.appendChild(document.createTextNode(""));
                let td0b =document.createElement('td');
                td0b.appendChild(document.createTextNode("Reservation"));
                let td0c =document.createElement('td');
                td0c.appendChild(document.createTextNode("Walk-in"));
            tr0.appendChild(td0a);
            tr0.appendChild(td0b);
            tr0.appendChild(td0c);
            th.appendChild(tr0);
            let tb = document.createElement('tbody');
            let tra= document.createElement('tr');
                let tdaa =document.createElement('td');
                tdaa.appendChild(document.createTextNode("3 Hour Rental"));
                let tdab =document.createElement('td');
                tdab.appendChild(document.createTextNode(rentals[i].reservation.half));
                let tdac =document.createElement('td');
                tdac.appendChild(document.createTextNode(rentals[i].walkin.half));
            tra.appendChild(tdaa);
            tra.appendChild(tdab);
            tra.appendChild(tdac);
            let trb= document.createElement('tr');
                let tdba =document.createElement('td');
                tdba.appendChild(document.createTextNode("Full Day"));
                let tdbb =document.createElement('td');
                tdbb.appendChild(document.createTextNode(rentals[i].reservation.full));
                let tdbc =document.createElement('td');
                tdbc.appendChild(document.createTextNode(rentals[i].walkin.full));
            trb.appendChild(tdba);
            trb.appendChild(tdbb);
            trb.appendChild(tdbc);
            tb.appendChild(tra);
            tb.appendChild(trb);
            grid.appendChild(th);
            grid.appendChild(tb);
            card_tail.appendChild(grid);
            
            //finished, add all to card
            card.appendChild(card_head);
            card.appendChild(card_tail);
            
            //Now add it to the page
            document.querySelector('div.cards').appendChild(card);

        }
    });
