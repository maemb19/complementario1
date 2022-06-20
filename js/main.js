console.log("Vibras-Shop");
let edad = parseInt(prompt("Ingresa tu edad"));
console.log(edad)
while(isNaN(edad)){
  console.log("debes ingresar tu edad en números")
  edad = parseInt(prompt("Ingresa tu edad"));
}
if (edad >=18) {
  console.log('Bienvenido a "VIBRAS-SHOP"');
} else{
  console.log("uh! sos menor de edad, no podes ver nuestros juguetes");
}

console.log("los jueguetes que te haran querer jugar de nuevo");

