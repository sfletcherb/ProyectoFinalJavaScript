const input = document.getElementById("inputBuscador");

const boton = document.getElementById('btnBuscador')
boton?.addEventListener("click", ()=>{
    searchMatch();
})


const divImg = document.getElementById("imgFoto")
const divCard = document.getElementById("cardFoto")
const divTable = document.getElementById("table")

const btnOpcion1 = document.getElementById("btn1")
btnOpcion1?.addEventListener("click", ()=>{
    firstResult();
})

const btnOpcion2 = document.getElementById("btn2")
btnOpcion2?.addEventListener("click", ()=>{
    secondResult();
})

const btnOpcion3 = document.getElementById("btn3")
btnOpcion3?.addEventListener("click", ()=>{
    thirdResult();
})

const medioPago = document.getElementById("btn4")
medioPago?.addEventListener("click", ()=>{
    pago();
    
})

const pedido1 = document.getElementById("btn5")
pedido1?.addEventListener("click", ()=>{
  
    ordenes1();
})

const pedido2 = document.getElementById("btn6")
pedido2?.addEventListener("click", ()=>{
  
    ordenes2();
})

const pedido3 = document.getElementById("btn7")
pedido3?.addEventListener("click", ()=>{
  
    ordenes3();
})