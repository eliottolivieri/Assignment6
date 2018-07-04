
var carList = ["Ferrari","Lamborghini","Pagani","Mclaren","Porsche","GT86","Bentley"];

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
          var personImage = $("<img class='gifz'>");
          personImage.attr("src", results[i].images.fixed_height.url);
          personImage.attr("data-still", results[i].images.fixed_height.url);
          personImage.attr("data-animate", results[i].images.fixed_height.url);
          personImage.attr("data-state", "still");
          gifDiv.prepend(personImage);
          $("#gifContainer").prepend(gifDiv);
        }
      });
  });

  // The function below does not work. I could not figure out how to make it work!
  $(".gifz").on("click", function() {

    console.log("You clicked a gif");
    var state = $(this).attr("data-state");
    console.log(state);

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });





