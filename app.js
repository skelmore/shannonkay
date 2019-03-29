/*Destination Generator - Randomly Suggest New Destinations*/

var newDestination= []
newDestination[0] = "Bermuda";
newDestination[1] = "Banff";
newDestination[2] = "Iceland";
newDestination[3] = "Berlin";
newDestination[4] = "Sydney";
newDestination[5] = "Barcelona";
newDestination[6] = "New Orleans";
newDestination[7] = "Rome";
newDestination[8] = "London";
newDestination[9] = "Croatia";  

function newDestination(){
    var randomDestination = Math.floor(Math.random()*(newDestination.length));
    document.getElementById("pdestination").innerHTML=newdestination[randomDestination];
}

