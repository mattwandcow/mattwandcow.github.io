function toggleMenu()
{
document.getElementById("menu_list").classList.toggle("hide");
}

function loadScripts()
{
    processDate();
    var wc=calcWindchill(parseFloat(document.getElementById("dayTemp").innerText),parseFloat(document.getElementById("dayWind").innerText))
    if(wc==0)
    {
        document.getElementById('windChill').innerHTML="N/A";
    }
    else
    {
        document.getElementById('windChill').innerHTML= wc.toFixed(1) +"&#176; F";
    }
    
}

function processDate()
{
    var d = new Date();
    
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];
    document.getElementById('current_date').innerHTML = weekday(d.getDay()) + ", " + d.getDate() + " " + month[d
        .getMonth()] + " " + d.getFullYear();
    var dateObject = new Date();
    document.getElementById('copy_year').innerHTML = d.getFullYear();
    if (d.getDay()==5)
    {
        document.getElementById('pancake_alert').style.display="block";
    }
    document.getElementById('dailyDay1').innerHTML=weekday(d.getDay());
    document.getElementById('dailyDay2').innerHTML=weekday(d.getDay()+1);
    document.getElementById('dailyDay3').innerHTML=weekday(d.getDay()+2);
    document.getElementById('dailyDay4').innerHTML=weekday(d.getDay()+3);
    document.getElementById('dailyDay5').innerHTML=weekday(d.getDay()+4);

}
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