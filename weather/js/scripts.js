function toggleMenu()
{
document.getElementById("menu_list").classList.toggle("hide");
}

function displayDate()
{
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];
    document.getElementById('current_date').innerHTML = weekday[d.getDay()] + ", " + d.getDate() + " " + month[d
        .getMonth()] + " " + d.getFullYear();
    var dateObject = new Date();
    document.getElementById('copy_year').innerHTML = d.getFullYear();
}