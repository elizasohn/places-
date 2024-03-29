
//Business Logic for PlaceList --

function PlaceList() {
  this.places = [];
  this.currentId = 0;
}

PlaceList.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlaceList.prototype.assignId = function() {
  this.currentId++;
  return this.currentId;
}

// Business Logic for Places --

function Place(location, landmark, food, cat) {
  this.location = location;
  this.landmark = landmark;
  this.food = food;
  this.cat = cat;
}

Place.prototype.about = function() {
  return this.landmark + ", " + this.food + ", " + this.cat;
}

//User Interface Logic --

$(document).ready(function(){
  var dia = new Place("Denver International Airport", "Bluecifer", "burritos", "Fluffy");
  var ny = new Place("New York City", "Empire State Building", "bagels", "feral cats");
  var puertoRico = new Place("Puerto Rico", "El Yunque", "mangoes", "street cats");
  var ourPlaces = new PlaceList;
  ourPlaces.addPlace(dia);
  ourPlaces.addPlace(ny);
  ourPlaces.addPlace(puertoRico);

  $("#places0").append(ourPlaces.places[0].location);

  $("#places0").click(function(event) {
    var output = ourPlaces.places[0].about();
    event.preventDefault();
    console.log(output);
    $("#places0output").text(output);
  });

  $("#places1").append(ourPlaces.places[1].location);

  $("#places1").click(function(event) {
    var output = ourPlaces.places[1].about();
    event.preventDefault();
    console.log(output);
    $("#places1output").text(output);
  });

  $("#places2").append(ourPlaces.places[2].location);

  $("#places2").click(function(event) {
    var output = ourPlaces.places[2].about();
    event.preventDefault();
    console.log(output);
    $("#places2output").text(output);
  });
});
