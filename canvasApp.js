"use strict";

//canvasApp() is called from main.js when a request to make the animation run has been made.

//canvasApp() doesn't receive or return any values, it simply prepares the canvas and calculates (with the 
//help of eigenstate.js) the initial (t = 0) physical conditions.  Note that the initial conditions completely determine the 
//system's temporal evolution.

//From within this script we call checkSubmit.js, then eigenstate.js, and then drawScreen.js.
function canvasApp ()  {
   
    var ratioWidth, ratioHeight, omega1, omega2, eigen1, eigen2, initialDisp, t, a, radiusM1, radiusM2, m1, m2;
    var context, theCanvas, theProperties = {};
    var eigen = {};

    //When canvasApp() is called, the user has asked the animation to run.  Record this 'running' state in sessionStorage.
    sessionStorage.setItem("running","1");
   
   
    //Set up the dimensions of the canvas that will hold the animation.
    ratioWidth = 0.79;
    ratioHeight = 0.075;
    theCanvas = document.getElementById("canvasOne");
    context = theCanvas.getContext("2d");
    theCanvas.width = window.innerWidth*ratioWidth;
    theCanvas.height = window.innerHeight*ratioHeight;
   
   
    //Call checkSubmit.js to read the user-submitted values, check their validity, then respond appropriately.
    //The returned object is {k1:k1, k2:k2, k3:k3, m1:m1, m2:m2}.
    theProperties = checkSubmit();
    
    //Call script/function 'eigenstate.js' and store the eigenfrequencies and 'eigenvectors' as the object:
    //{omega1:omega1, omega2:omega2, eigen1:eigen1, eigen2:eigen2} where:
    //omega1 = frequency mass1, eigen1 = vector mass1, omega2 = frequency mass2, eigen2 = vector mass2.
    eigen = eigenstate(theProperties);
      
    //Set up the initial displacement.  'a' is the (displacement) amplitude passed to drawScreen.js.
    initialDisp = 1.0;
    t = 0;      
    a = initialDisp / (eigen.eigen1 - eigen.eigen2);    
    
    
    //Allow the difference in masses to be represented on screen by a corresponding difference in sizes.   
    radiusM1 = 20*Math.pow(theProperties.m1,1/3);
    radiusM2 = 20*Math.pow(theProperties.m2,1/3);
  
   
    //Call drawScreen.js to render the masses at increments of time t.
    function run() {
      
        //Set the rate of redrawing.
        window.setTimeout(run,20);

        //See drawScreen.js
        drawScreen(context, theCanvas.width, theCanvas.height, eigen, t, a, radiusM1, radiusM2);
        
        //Set the incremented time for each successive redraw.
        t=t+0.03;
    }  
   
    //The entry point for the looping.
    run ();
}


