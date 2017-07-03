"use strict";

//This function/script calculates the eigenfrequencies and eigenvectors associated with the two-mass ,three-spring system used in this project.
//The 2nd component of the eigenvector is always 1, so only the first eigenvector component of each mass needs to be calculated and returned. 

//The function expects the 3 spring constants and the 2 masses as parameter object 'theProperties': {k1:k1, k2:k2, k3:k3, m1:m1, m2:m2}.
function eigenstate(theProperties)  {



    var lamdaBlock1, lamdaBlock2, lamdaBlock3, lamdaSQRT, lamda1, lamda2, omega1, omega2;
    var vectorBlock1, vectorBlock2, vectorBlock3, eigen1, eigen2, k1, k2, k3, m1, m2;
    var eigen = {};
    
    //Extract individual values from the passed object for clarity.
    k1 = theProperties.k1;
    k2 = theProperties.k2;
    k3 = theProperties.k3;
    m1 = theProperties.m1;
    m2 = theProperties.m2;
    
    //Calculate the eigenvalues.          
    lamdaBlock1 = k1*m2 + k2*m1 + k2*m2 + k3*m1;
    lamdaBlock2 = k1*k2*m1*m2 + k1*k3*m1*m2 + k2*k3*m1*m2;
    lamdaBlock3 = k1*m2 + k2*m1 + k2*m2 + k3*m1;
      
    lamdaSQRT = Math.sqrt(Math.pow(lamdaBlock1,2) - 4*lamdaBlock2);
      
    lamda1 = ((-lamdaSQRT) - lamdaBlock3) / (2*m1*m2);
    lamda2 = (lamdaSQRT - lamdaBlock3) / (2*m1*m2); 
      
    //The two eigenvalues:
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

    //Return eigenfrequencies and eigenvectors:  omega1 = frequency mass1, eigen1 = vector mass1, omega2 = frequency mass2, eigen2 = vector mass2.  
    return {omega1:omega1, omega2:omega2, eigen1:eigen1, eigen2:eigen2};
} 
      
