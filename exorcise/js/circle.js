let straal = document.getElementById('straal');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek =document.getElementById('omtrek');
let bereken=document.getElementById('bereken');

bereken.addEventListener('click',berekening);

function berekening() {
  if(isNaN(straal.value)==false){
    console.log("straal is een nummer");
console.log("geklikt");
oppervlakte.innerHTML= Math.PI*Math.pow(parseInt(straal.value),2);
console.log(oppervlakte);
omtrek.innerHTML= 2*Math.PI*parseInt(straal.value);
console.log(omtrek);

}
else {
  console.log("straal is geen cijfer");
  window.alert("dat is geen cijfer");
}
}
