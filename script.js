// Time

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
};
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
};


// Dropup on click

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropup").classList.toggle("show");
}

// Close the dropup if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropups = document.getElementsByClassName("dropup-content");
    var i;
    for (i = 0; i < dropups.length; i++) {
      var openDropup = dropups[i];
      if (openDropup.classList.contains('show')) {
        openDropup.classList.remove('show');
      }
    }
  }
}