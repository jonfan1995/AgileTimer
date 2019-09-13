var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60* 60*24)) / (1000 * 60));
    var minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60))/ 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if(distance <0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
},1000);

function myFunction() {
    var x = document.getElementById("frm");
    var i;
    
    for (i = 0; i < x.length ; i++) {
        document.getElementById("demo2").innerHTML = x;
    }
}

