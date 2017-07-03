"use strict";

//In drawScreen(..) we draw the position of the masses at a particular moment in time.  This script is called from canvasApp.js.

//In order, the parameters expected are: (1) The canvas's context (2) The canvas's width (3) The canvas's height
//(4) An 'eigen object' of the form returned by eigenstate.js (5) The current time (6) An initial amplitude (7) The radius
//of the left mass (8) The radius of the right mass. 
//The output is to the screen and nothing is returned to canvasApp.js.
                   
function drawScreen(context, width, height, eigen, t, a, radiusM1, radiusM2)  {
        

    var omega1, omega2, eigen1, eigen2, x1, x2, x1Draw, x2Draw, dist, yCoord, param, xPos, yPos, imgData;


    //Extract the values from the array for clarity.
    omega1 = eigen.omega1;
    omega2 = eigen.omega2;
    eigen1 = eigen.eigen1;
    eigen2 = eigen.eigen2;

    //The canvas that holds the image of the oscillation.
    context.fillStyle ='#EEEEEE';
    context.fillRect(0,0,width,height);
    context.strokeStyle = '#000000';
    context.strokeRect(1,1,width-2,height-2);
        
           
    //x1 and x2 are the displacments of the masses on the left and right respectively, after a time t.
    x1 = a*eigen1*Math.cos(omega1*t) - a*eigen2*Math.cos(omega2*t); 
    x2 = a*Math.cos(omega1*t) - a*Math.cos(omega2*t);
      
      
    //The displaced position, adjusted to allow for variable screen size.
    //0.25*width and 0.75*width represent the two balls' canvas positions at zero displacement.
    x1Draw = x1*0.13636*width + 0.25*width;
    x2Draw = x2*0.13636*width + 0.75*width;
      
     
 
    //Parameter for the sine wave that generates the spring corresponding to k1. 
    param = (2*Math.PI*20)/x1Draw; 

    //Draw the pixels for the spring corresponding to k1.
    dist = 0;    

    while (dist < x1Draw)  {
       
        //(k1) spring's 'y' canvas coordinate.  
        yCoord = (height/2)+0.1*height*Math.sin(param * dist);  

        //Instantiate an ImageData object of one pixel.
        imgData = context.createImageData(1, 1);       
         
        setPixelData(imgData);
             
        xPos = dist;

        yPos = yCoord;
 
        context.putImageData(imgData, xPos, yPos);   

        dist = dist + 1;  
    }
  

    
    //Parameter for the sine wave that generates the spring corresponding to k2.
    param = (2*Math.PI*40)/((x2Draw-radiusM2)-(x1Draw+radiusM1));

    //Draw the pixels for the spring corresponding to k2.
    dist = 0;    

    while (dist < (x2Draw+radiusM2)-(x1Draw+radiusM1))  {
        
        //(k2) spring's 'y' canvas coordinate.      
        yCoord = (height/2)+0.1*height*Math.sin(param * dist);   

        //Instantiate an ImageData object of one pixel.
        imgData = context.createImageData(1, 1);      
        
        setPixelData(imgData);       
 
        xPos = dist+x1Draw + radiusM1;

        yPos = yCoord;
 
        context.putImageData(imgData, xPos, yPos); 

        dist = dist + 1; 
    }    
      
     
 
    //Parameter for the sine wave that generates the spring corresponding to k3.
    param = (2*Math.PI*20)/(width - (x2Draw+radiusM2)); 

    //Draw the pixels for the spring corresponding to k3.
    dist = 0;
      
    while (dist < width - (x2Draw+radiusM2))  {       

        //(k3) spring's 'y' canvas coordinate.     
        yCoord = (height/2)+0.1*height*Math.sin(param * dist); 

        //Instantiate an ImageData object of one pixel.
        imgData = context.createImageData(1, 1);        
         
        setPixelData(imgData);

        xPos = dist+x2Draw + radiusM2;

        yPos = yCoord;
 
        context.putImageData(imgData, xPos, yPos);

        dist = dist + 1;
    }

    
    //Draw mass 1.
    context.beginPath();
    context.arc(x1Draw,height/2,radiusM1,0,2*Math.PI);
    context.fillStyle="#000000";
    context.fill();
    context.closePath();
    
    context.font = "20px serif";
    context.fillStyle = "#FFFFFF";
    context.fillText("1",x1Draw-6,(height/2)+6);
      
    //Draw mass 2.
    context.beginPath();
    context.arc(x2Draw,height/2,radiusM2,0,2*Math.PI);
    context.fillStyle="#000000";
    context.fill();
    context.closePath();   
    
    context.font = "20px serif";
    context.fillStyle = "#FFFFFF";
    context.fillText("2",x2Draw-6,(height/2)+6);
}



