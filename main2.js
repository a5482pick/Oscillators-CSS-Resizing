//This script listens for user actions such as clicked buttons and resizing of windows.

"use strict";


//Listening for both window 'loading' and window 'resizing'.
window.addEventListener("resize",resized,false);
window.addEventListener("load",begin,false);


//This function is called when either the window loads or when location.reload() is applied due to resizing.
function begin () {
     
     
    //Listen for the 'start' button being clicked.
    document.getElementById("start").addEventListener("click", canvasApp, false);

    //Listen for a request to stop i.e. 'reset' the animation.
    document.getElementById("stop").addEventListener("click",reset,false);
   
    //This loop is used when 'begin()' is called as a response to a 'resize' event when the animation is running.
    //Local storage remembers the previous parameters, so we can automatically commence animation with the original values.
    if (sessionStorage.getItem("resized") =="1" && sessionStorage.getItem("running") == "1") {
    
        document.getElementById("k1").value = sessionStorage.getItem("k1");
        document.getElementById("k2").value = sessionStorage.getItem("k2");
        document.getElementById("k3").value = sessionStorage.getItem("k3");
        document.getElementById("m1").value = sessionStorage.getItem("m1");
        document.getElementById("m2").value = sessionStorage.getItem("m2");
        
        //Call canvasApp() to start the animation automatically.
        canvasApp();
    }
}

//This function is called when the window is resized.  We use sessionStorage to 'remember' that a resizing event, not a new session, has occured.
function resized () { 
   
    sessionStorage.setItem("resized","1");
    sessionStorage.setItem("k1", document.getElementById("k1").value);
    sessionStorage.setItem("k2", document.getElementById("k2").value);
    sessionStorage.setItem("k3", document.getElementById("k3").value);
    sessionStorage.setItem("m1", document.getElementById("m1").value);
    sessionStorage.setItem("m2", document.getElementById("m2").value);

    //(Firefox needs this to ensure automatic resizing when reloading.)
    window.location.href = window.location.href;
  
    location.reload();
}

//We reset when the reset button is pressed.
function reset () {
   
    location.reload();
   
    //Set the last known state to 'not running'.
    sessionStorage.setItem("running","0");
}

