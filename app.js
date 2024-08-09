var countDown = new Date("25 feb, 2025 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor(distance % (1000*60*60*24) / (100*60*60));
    var mins = Math.floor(distance % (1000*60*60) / (100*60));
    var secs = Math.floor(distance % (1000*60) / (100));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;

    if(distance<0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("mins").innerHTML = "00";
        document.getElementById("secs").innerHTML = "00";

    }
},1000);