let lengte = document.getElementById('lengte');
let breete = document.getElementById('breete');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let berekenKnop = document.getElementById('bereken');
let rechthoek = document.getElementById('rechthoek');
let diagonaal =document.getElementById('diagonaal');
let ctx = rechthoek.getContext("2d");

bereken.addEventListener('click', berkening);

function berkening() {
  console.log("je hebt op de knop geklikt");
  if (isNaN(lengte.value) == false && isNaN(breete.value) == false) {
    console.log("je hebt een nummer in gevoerd");
    oppervlakte.innerHTML = parseInt(lengte.value) * parseInt(breete.value);
    omtrek.innerHTML = 2 * parseInt(lengte.value) + 2 * parseInt(breete.value);
    diagonaal.innerHTML = Math.sqrt(Math.pow(parseInt(lengte.value), 2) + Math.pow(parseInt(breete.value), 2));
    console.log(diagonaal);
   
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 5 * parseInt(breete.value), 5 * parseInt(lengte.value));



  } else {
    console.log("Er is nog geen cijfer ingevuld");
  }
}


