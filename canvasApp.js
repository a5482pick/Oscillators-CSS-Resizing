"use strict";
//canvasApp() is called when a request to make the animation run has been made.
function canvasApp ()  {
    
    
    //To improve the page's appearance, remove 'focus' from the 'start' button when the button's pressed.
    document.getElementById("start").blur();
    
    //When canvasApp() is called, the user has asked the animation to run.  Remember this 'running' state in sessionStorage.
    sessionStorage.setItem("running","1");
   
   
    //Set up the dimensions of the canvas that will hold the animation.
    ratioWidth = 0.89;
    ratioHeight = 0.1;
    theCanvas = document.getElementById("canvasOne");
    
    theCanvas.width = window.innerWidth * ratioWidth;
    theCanvas.height =  60;
    context = theCanvas.getContext("2d");
   
   
    //Call a function to read the user-submitted values, check their validity, then respond appropriately..
    checkSubmit();
    
    //Call function 'eigenstate' and store the eigenfrequencies and 'eigenvectors' in eigen[].  Parameters are passed to improve the function's   
    //generality.  eigen[0] and eigen[1] are the respective frequencies, eigen[2] and eigen[3] are the first components of the two eigenvectors.
    eigen = eigenstate(k1, k2, k3, m1, m2);

    //Extract the values from the array for clarity.
    omega1 = eigen[0];
    omega2 = eigen[1];
    eigen1 = eigen[2];
    eigen2 = eigen[3];
          
    //Set up the initial displacement.
    initialDisp = 1.0;
    t = 0;      
    a = initialDisp / (eigen1 - eigen2);    
    
    
    //Allow the difference in masses to be represented on screen.   
    radiusM1 = 20*Math.pow(m1,1/3);
    radiusM2 = 20*Math.pow(m2,1/3);
  
   
    //Set the springs in motion.
    function run() {
      
        //Set the rate of redrawing.
        window.setTimeout(run,20);
        drawScreen();
        
        //Set the incremented time for each successive redraw.
        t=t+0.025;
    }  
   
    //The entry point for the looping.
    run ();
}


