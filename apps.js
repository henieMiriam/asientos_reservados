//se establece el arreglo para representar los asientos vacios de nuestro avion
var availavleSeats=[
false,
false,
false,
false,
false,
false,
false,
false,
false,
false,
];
var takenSeats=0;
var paintSeats=function(array){
  var conteinerSeats=document.getElementById("seats");
  for (var i = 0; i < array.length; i++) {
    var seat= document.createElement("div");
    seat.className="seats";
    //separar primea clase y economica en el array
    if (i < 4) {
      seat.style.background ="silver";
    }else{
      seat.style.background ="blue";
    }
    conteinerSeats.appendChild(seat);
  }
};

var reserve = function(){
  var button = document.getElementById(reservaciones);
  button.addEventListener("click",choose);
};
var choose= function(){
  var choice = prompt(
    "En que zona te gustaria sentarte???\n 1.- Primera clase \n 2.- Economica \n Por favor ingresa el nuero que corresponda a tu eleccion "
  );

}
paintSeats(availavleSeats);
reserve();
