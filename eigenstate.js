"use strict";
//This function calculates the eigenfrequencies and eigenvectors associated with the two-mass ,three-spring system used in this project.
//The 2nd component of the eigenvector is always 1, so only the first eigenvector component needs to be calculated and returned. 

//Take the 3 spring constants and the 2 masses as parameters.
function eigenstate(k1, k2, k3, m1, m2)  {


    //Declare the local variables.
    var lamdaBlock1, lamdaBlock2, lamdaBlock3, lamdaSQRT, lamda1, lamda2, omega1, omega2;
    var vectorBlock1, vectorBlock2, vectorBlock3, eigen1, eigen2;
    var eigen = [];
    
    //Calculate the eigenvalues.          
    lamdaBlock1 = k1*m2 + k2*m1 + k2*m2 + k3*m1;
    lamdaBlock2 = k1*k2*m1*m2 + k1*k3*m1*m2 + k2*k3*m1*m2;
    lamdaBlock3 = k1*m2 + k2*m1 + k2*m2 + k3*m1;
      
    lamdaSQRT = Math.sqrt(Math.pow(lamdaBlock1,2) - 4*lamdaBlock2);
      
    lamda1 = ((-lamdaSQRT) - lamdaBlock3) / (2*m1*m2);
    lamda2 = (lamdaSQRT - lamdaBlock3) / (2*m1*m2); 
      
    omega1 = Math.sqrt(-lamda1);
    omega2 = Math.sqrt(-lamda2);
   
   
    //Calculate the eigenvectors.  The 2nd vector component is 1.   
    vectorBlock1 = Math.pow(k2*m1 + k3*m1 + k1*m2 + k2*m2,2);
    vectorBlock2 = k1*k2*m1*m2 + k1*k3*m1*m2 + k2*k3*m1*m2;
    vectorBlock3 = k2*m1 + k3*m1 + k1*m2 + k2*m2;
     
    eigen1 = 0.5*(vectorBlock3 + Math.sqrt(vectorBlock1 - 4*vectorBlock2));
    eigen1 = -m1*(k2 + k3) + eigen1;
    eigen1 = (-1/(k2*m1))*eigen1;
      
    eigen2 = 0.5*(vectorBlock3 - Math.sqrt(vectorBlock1 - 4*vectorBlock2));
    eigen2 = -m1*(k2 + k3) + eigen2;
    eigen2 = (-1/(k2*m1))*eigen2;
    
    eigen.push(omega1, omega2, eigen1, eigen2);
    return eigen;
} 
      
