"use strict";
//drawScreen() is the looped function that creates the <canvas> visualisation of the oscillation.                   
function drawScreen ()  {
        
    //The canvas that holds the image of the oscillation.
    context.fillStyle ='#EEEEEE';
    context.fillRect(0,0,theCanvas.width,theCanvas.height);
    context.strokeStyle = '#000000';
    context.strokeRect(1,1,theCanvas.width-2,theCanvas.height-2);
        
           
    //x1 and x2 are the displacments of the masses on the left and right respectively.
    x1 = a*eigen1*Math.cos(omega1*t) - a*eigen2*Math.cos(omega2*t); 
    x2 = a*Math.cos(omega1*t) - a*Math.cos(omega2*t);
    
      
    //The equlibrium position, adjusted to allow for variable screen size.  
    x1Origin = 0.25*theCanvas.width;
    x2Origin = 0.75*theCanvas.width;
      
      
    //The displaced position, allowing for variable screen size.
    x1Draw = x1*0.13636*theCanvas.width + x1Origin;
    x2Draw = x2*0.13636*theCanvas.width + x2Origin;
      
      
    //Draw the spring corresponding to k1.
    k1Dist = 0;
      
    while (k1Dist < x1Draw)  {
      
        k1Param = (2*Math.PI*20)/x1Draw;      
        k1Spring = (theCanvas.height/2)+0.1*theCanvas.height*Math.sin(k1Param * k1Dist);         
                     
        k1Dist = k1Dist + 1;
         
        imgData = context.createImageData(1, 1);
        for (i = 0; i < imgData.data.length; i += 4) {
         
            imgData.data[i+0] = 255;
            imgData.data[i+1] = 0;
            imgData.data[i+2] = 0;
            imgData.data[i+3] = 255;
        }
             
        xPos = k1Dist;
        yPos = k1Spring;
 
        context.putImageData(imgData, xPos, yPos);     
    }
      
      
    //Draw the spring corresponding to k2.
    k2Dist = 0; 
      
    while (k2Dist < (x2Draw+radiusM2)-(x1Draw+radiusM1))  {
      
        k2Param = (2*Math.PI*40)/((x2Draw-radiusM2)-(x1Draw+radiusM1));      
        k2Spring = (theCanvas.height/2)+0.1*theCanvas.height*Math.sin(k2Param * k2Dist);         
                     
        k2Dist = k2Dist + 1;
        
        imgData = context.createImageData(1, 1);
           
        for (i = 0; i < imgData.data.length; i += 4) {
         
            imgData.data[i+0] = 255;
            imgData.data[i+1] = 0;
            imgData.data[i+2] = 0;
            imgData.data[i+3] = 255;
        } 
        xPos = k2Dist+x1Draw + radiusM1;
        yPos = k2Spring;
 
        context.putImageData(imgData, xPos, yPos);  
    }    
      
      
    //Draw the spring corresponding to k3.
    k3Dist = 0;
      
    while (k3Dist < theCanvas.width - (x2Draw+radiusM2))  {
      
        k3Param = (2*Math.PI*20)/(theCanvas.width - (x2Draw+radiusM2));      
        k3Spring = (theCanvas.height/2)+0.1*theCanvas.height*Math.sin(k3Param * k3Dist);         
                     
        k3Dist = k3Dist + 1;
         
        imgData = context.createImageData(1, 1);
         
        for (i = 0; i < imgData.data.length; i += 4) {
         
            imgData.data[i+0] = 255;
            imgData.data[i+1] = 0;
            imgData.data[i+2] = 0;
            imgData.data[i+3] = 255;
        }
        xPos = k3Dist+x2Draw + radiusM2;
        yPos = k3Spring;
 
        context.putImageData(imgData, xPos, yPos);
    }
      
      
    //Draw mass 1.
    context.beginPath();
    context.arc(x1Draw,theCanvas.height/2,radiusM1,0,2*Math.PI);
    context.fillStyle="#000000";
    context.fill();
    context.closePath();
    
    context.font = "20px serif";
    context.fillStyle = "#FFFFFF";
    context.fillText("1",x1Draw-6,(theCanvas.height/2)+6);
      
    //Draw mass 2.
    context.beginPath();
    context.arc(x2Draw,theCanvas.height/2,radiusM2,0,2*Math.PI);
    context.fillStyle="#000000";
    context.fill();
    context.closePath();   
    
    context.font = "20px serif";
    context.fillStyle = "#FFFFFF";
    context.fillText("2",x2Draw-6,(theCanvas.height/2)+6);
}
