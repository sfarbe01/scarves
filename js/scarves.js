/* create an object with blank values*/
var scarf = {
  "color": "",
  "material":'',
  "price":"",
}

/* tell the user we're learning scarf preferences (tell them what is happening)*/

alert("Brr! Ned Stark says Winter is Coming, so it's time to get you outfitted for the perfect scarf. Let's help get you bundled up.")

/* prompt user for "color" value
  - set "name" value in object if they enter anything
  - if they enter nothing, use default color black*/

var color = prompt("What color scarf would you like?");
scarf.color = color;
if(color == ""){
  scarf.color = "Black";
} else {
  scarf.color = color;
}

var material = prompt("What material would you like for this scarf? Please select one of the following: wool, cashmere, alpaca, cotton, pashmina, mohair. If the selection you make is invalid, we will choose wool.");
scarf.material = material;
if(material == ""){
  scarf.material = "wool";
} else if (material == "wool"){
  scarf.material = wool;
} else if (material == "cotton"){
  scarf.material = cotton;
} else if (material == "pashmina"){
  scarf.material = pashmina;
} else if (material == "cashmere"){
  scarf.material = cashmere; 
} else if (material == "alpaca"){
  scarf.material = alpaca; 
} else if (material == "mohair"){
  scarf.material = mohair; 
}

var price = prompt("How much are you willing to pay for your scarf?");
scarf.price = price;

console.log(scarf);
