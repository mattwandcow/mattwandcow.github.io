var d = new Date();
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];
    dateString=weekday(d.getDay()) + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();
document.getElementById('current_date').innerHTML = dateString;
document.getElementById('copy_year').innerHTML = d.getFullYear();
document.getElementById('dailyDay1').innerHTML=weekday(d.getDay()+1);
document.getElementById('dailyDay2').innerHTML=weekday(d.getDay()+2);
document.getElementById('dailyDay3').innerHTML=weekday(d.getDay()+3);
document.getElementById('dailyDay4').innerHTML=weekday(d.getDay()+4);
document.getElementById('dailyDay5').innerHTML=weekday(d.getDay()+5);

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