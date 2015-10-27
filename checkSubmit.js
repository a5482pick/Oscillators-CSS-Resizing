"use strict";
//This function checks the validity of the submitted values, then responds appropriately.  
//The checked values are taken directly from the HTML elements, so the function does not take parameters.
function checkSubmit()    {

//Initialise the values.
    if (sessionStorage.getItem("resized") !== "1") {
   
        //Test to see if a submitted value contains a non-numeric character after 1 or more numbers.
        k1match = document.getElementById("k1").value.match(/^[0-9]+[^0-9\.]+/);
        k2match = document.getElementById("k2").value.match(/^[0-9]+[^0-9\.]+/);
        k3match = document.getElementById("k3").value.match(/^[0-9]+[^0-9\.]+/);
        m1match = document.getElementById("m1").value.match(/^[0-9]+[^0-9\.]+/);
        m2match = document.getElementById("m2").value.match(/^[0-9]+[^0-9\.]+/);
        
      
        //Strip away unwanted characters from the submitted input.
        k1 = parseFloat(document.getElementById("k1").value);
        k2 = parseFloat(document.getElementById("k2").value);
        k3 = parseFloat(document.getElementById("k3").value);
        m1 = parseFloat(document.getElementById("m1").value);
        m2 = parseFloat(document.getElementById("m2").value);
   
      
        //The size of the animation on the screen means these input constraints are needed.
        if ((k1 > 100 || k1 < 1) || (k2 > 100  || k2 < 1) || (k3 > 100 || k3 < 1) || (m1 > 100 || m1 < 1) || (m2 > 100 || m2 < 1)  || (!k1 || !k2 || !k3 || !m1 || !m2))  {
        
            alert("All parameters must be numbers between 1 and 100.");
            reset(); 
        }
      
      
        //If any of the matches were true, proceed, but with a warning.
        if (k1match || k2match || k3match || m1match || m2match)   {
         
            alert("Numeric values are assumed to be the numbers preceding the first non-numeric character.");
        }   
    }  
   
   
    //If the window has been resized, we reuse the previously entered values
    //that we stored in local storage.
    if (sessionStorage.getItem("resized") == "1") {
   
        sessionStorage.setItem("resized","0");
        k1 = parseFloat(sessionStorage.getItem("k1"));
        k2 = parseFloat(sessionStorage.getItem("k2"));
        k3 = parseFloat(sessionStorage.getItem("k3"));
        m1 = parseFloat(sessionStorage.getItem("m1"));
        m2 = parseFloat(sessionStorage.getItem("m2"));
    }
}
