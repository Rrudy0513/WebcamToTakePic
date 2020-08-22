// ** Capture a still image **
// ** This block of code is contained in a self invoked function. **


// A self-invoking expression is invoked (started) automatically, without being called. 
//Function expressions will execute automatically if the expression is followed by ().
// You cannot self-invoke a function declaration.
// everthing in this function will run automatic run 

(function() {
    // ** Capture a image elrment or selctor **
    let video = document.getElementById('video'),
    //
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        photo = document.getElementById('photo')
//
// vendorUrl is a url api  
        vendorUrl = window.URL || window.webkitURL;
//
        navigator.getMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia;
                      
    //.getMedia takes 3 arguments 
    // the first one gives us the properties aka what you want to do                 
       navigator.getMedia({
           video: true,
           audio: false
       },
        // Media success function
       // this give us  of the stream from are webcam 
       function(stream){
           // Assign the stream to #video-still
           video.srcObject = stream;
           // Tell #video-still to play
           video.play();

       },
        // An error occured 
        // erroe.code 
       function(error){
          

       });  
       
       document.getElementById('capture').addEventListener('click', function(){
           context.drawImage(video, 0, 0, 300, 300 )
           photo.setAttribute("src", canvas.toDataURL("image/png"));

       });

})();