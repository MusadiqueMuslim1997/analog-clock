var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

function time() {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    var hRotate = 30 * h + m / 2;
    var mRotate = 6 * m;
    var sRotate = 6 * s;


    hour.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;


}
setInterval(time);

