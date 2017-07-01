//This script makes the necessary responses to user actions.  It is therefore also the entry point.

"use strict";

//Variables are declared global.  (This allows functions to be placed in different files.)
var t, k1, k2, k3, m1, m2, x1, x2, eigen, eigen1, eigen2, omega1, omega2;
var lamdaSQRT, initialDisp, a, i, imgData, realTime, ratioWidth, ratioHeight;
var x1Draw, x2Draw, x1Origin, x2Origin, radiusM1, radiusM2, xPos, yPos;
var k1Param, k1Spring, k1Dist, k2Param, k2Spring, k2Dist,k3Param, k3Spring, k3Dist, theCanvas, context, k1match, k2match, k3match, m1match, m2match;


//Listening for both window 'loading' and window 'resizing'.
window.addEventListener("resize",again,false);
window.addEventListener("load",begin,false);


//This function is called when either the window loads or when location.reload() is applied.
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
     
     
    document.getElementById("start").addEventListener("click", canvasApp, false);
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
function again () { 
   
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

