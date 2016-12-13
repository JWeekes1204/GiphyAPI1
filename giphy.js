$(document).ready(function() {
$("button").click(function(){
    var memes = $("#dank").val();
    console.log(memes);


   $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+memes+"&api_key=dc6zaTOxFJmzC",
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });
  }); 
});
//document.getElementById("mySearch").value = "Favorite Cars";

