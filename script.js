var balance = 50000
var sdeck = 10000
var vuelto = 0

function compra () {
  if(balance<=0){
    console.log("No tenes suficiente dinero.")
    return
  }
  balance = balance - sdeck 
  console.log(balance)
}

const boton = document.querySelectorAll (".comprarAhora");

console.log(boton)

boton.forEach(function(button){
  button.addEventListener ("click", compra);
})
