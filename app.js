let now
let upcomingDate
// let day=document.getElementById("days")
// let hour=document.getElementById("hours")
// let min=document.getElementById("mins")
// let second=document.getElementById("seconds")
function countDown(){
    now=new Date().getTime();
    upcomingDate=new Date("April 28, 2024 00:00:00").getTime();
    distance=upcomingDate-now;
    var days=Math.floor(distance/(24*60*60*1000));
    var hours=Math.floor(distance%(24*60*60*1000)/(60*60*1000));
    var mins=Math.floor(distance % (60*60*1000)/(60*1000));
    var seconds=Math.floor(distance%(60*1000)/1000);

    console.log(seconds)

    document.getElementById("days").textContent=days;
    document.getElementById("hours").textContent=hours;
    document.getElementById("mins").textContent=mins;
    document.getElementById("seconds").textContent=seconds;

    

}




x=setInterval(countDown,1000)