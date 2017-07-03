//This script listens for changes such as window resizing and data submissions.

"use strict";


//Listening for both window 'loading' and window 'resizing'.
window.addEventListener("resize",resized,false);
window.addEventListener("load",begin,false);


//This function is called when either the window loads or when location.reload() is applied due to resizing.
function begin () {
     
    //Choose the appropriate stylesheet for the given window dimensions.
    if (window.innerWidth < 670)  {
    
        //The canvas repositions itself to the bottom of the screen.
        document.getElementById('bigScreen').disabled  = true;
        document.getElementById('smallScreen').disabled = false;
    }
    
    else  {
    
        //Allow the canvas to resize and fill more of the screen.
        document.getElementById('bigScreen').disabled  = false;
        document.getElementById('smallScreen').disabled = true;
    }       
     
     
    //Call canvasApp.js when the user clicks 'start' to begin the animation.
    document.getElementById("start").addEventListener("click", canvasApp, false);

    //Respond to a request to stop i.e. 'reset' the animation.
    document.getElementById("stop").addEventListener("click",reset,false);
   
    //This loop is used when 'begin()' is called as a response to a 'resize' event when the animation is running.
    //Local storage remembers the previous parameters, so we commence animation with the original values immediately set.
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

