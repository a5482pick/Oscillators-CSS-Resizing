"use strict";

//createPixel() initialises the values of the pixel object.  Here, we call this script from within drawScreen.js.
//imgData is an instance of ImageData.

function setPixelData(imgData)  {


    for (var i = 0; i < imgData.data.length; i += 4) {
    
        imgData.data[i+0] = 255;
        imgData.data[i+1] = 0;
        imgData.data[i+2] = 0;
        imgData.data[i+3] = 255;
    }

    return imgData;
}
