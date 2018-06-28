
var carList = ["Ferrari","Lamborghini","Pagani","Mclaren","Porsche","Aston Martin","Bentley","Rolce-Royce"];

    for(var i = 0; i < carList.length; i++){
        var tempCar = carList[i];
        console.log(tempCar);
        $("#buttonContainer").append("<button data-person="+tempCar+">"+tempCar+"</button>");
        } 
    

$("button").on("click", function() {
    var carMake = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      carMake + "&api_key=OE4XP50oeDTPNxvCYBJZhtp2Oge0K4tI&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

         /* var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);  */

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

         // gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifContainer").prepend(gifDiv);
        }
      });
  });





