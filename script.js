function addZero(n){return n<10?"0"+n:n}
var endtime = new Date('Jan 1, 2022 00:00:00').getTime();

function end() {
    var currentTime = new Date().getTime();
    gap = endtime - currentTime;
    var second = 1000;
    var minute = 60 * second;
    var hour = 60 * minute;
    var day = 24 * hour;


    var daycount = Math.floor(gap / (day));
    var hourcount = Math.floor((gap % (day)) / (hour));
    var monthcount = Math.floor((gap % (hour)) / (minute));
    var secondcount = Math.floor((gap % (minute)) / second);


    document.getElementById('day').innerText = addZero(daycount);
    document.getElementById('hour').innerText = addZero(hourcount);
    document.getElementById('minute').innerText = addZero(monthcount);
    document.getElementById('second').innerText = addZero(secondcount);



}
setInterval(function () {
    end();
}, 1000)