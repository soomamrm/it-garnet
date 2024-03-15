function myFunction() {
    var picturedate;
    if (document.getElementById("curiosity").checked) {
        document.getElementById("picturedate").value="2012-08-06";
    }
  
    if (document.getElementById("opportunity").checked) {
        document.getElementById("picturedate").value= "2004-01-26";
    }
    if (document.getElementById("spirit").checked) {
        document.getElementById("picturedate").value= "2004-01-05";
    }
  }
    
    
  async function GetPhotos() {
    "use strict";
  
    var form = $("#MarsForm");
    
    form.validate();
    
    if (form.valid()) {
            
      var rover;
      if (document.getElementById("curiosity").checked) {
          rover = document.getElementById("curiosity").value;
      }
  
      if (document.getElementById("opportunity").checked) {
          rover = document.getElementById("opportunity").value;
      }
      if (document.getElementById("spirit").checked) {
          rover = document.getElementById("spirit").value;
      }
   
      var picturedate = document.getElementById("picturedate").value;
      var apiKey = "jeOjEno8SCYQny38H1a8fE7UBhfmOuHPkVh4qF9Y";
    
          var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + picturedate + "&api_key=" + apiKey;
            
          let PictureObject = await fetch(myURL2);
          let Result = await PictureObject.text();
          let msg =JSON.parse(Result); 
          document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
             if (numberofphotos >25)
             {numberofphotos = 25}
                  
              for (let i = 0; i < 25; i++) {
              document.getElementById("image" + i).src = msg.photos[i].img_src;
              document.getElementById("image" + i).style.visibility = "visible";
              document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
              }
    }
          let PictureObject = await fetch(myURL2);
          let Result = await PictureObject.text();
          let msg =JSON.parse(Result); 
          document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
             if (numberofphotos >25)
             {numberofphotos = 25}
                  
              for (let i = 0; i < 25; i++) {
              document.getElementById("href" + i).href = msg.photos[i].img_src;
              }           
  
  }

  function clearform() {
    document.getElementById("picturedateateError").innerHTML = "";
    document.getElementById("rovererror").innerHTML = "";}
