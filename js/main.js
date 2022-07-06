productos = ["ADVIL ULTRA", "DOLEX FORTE"]

function selectName(){
    for(let i=0; i<productos.length; i++){
        const datalist = document.getElementById("medicamentos");
        const option = document.createElement("option")
        option.innerHTML = productos[i]
        datalist?.appendChild(option)
    }
}

selectName();

data = [];

fetch("../data/data.js")
.then((response)=> response.json())
.then((json)=>data.push(...json))

console.log(data);


let searchMatch = () => {

    let buscar = data.filter((medicamento) => medicamento.producto?.indexOf(input.value) !== -1)
    bestResult(buscar)    
}

let bestResult = (buscar) => {

    let top3 = buscar.sort((a, b) => { return a.precio - b.precio; }).slice(0, 3);
    console.log(top3);
    localStorage.setItem('principales', JSON.stringify(top3));
    printResults(top3);

};


let printResults = (top3) => {
    
    divTable.innerHTML = ``

    top3.forEach((element) => {

        divImg.innerHTML = `<img src = '${element.imagen}'/>`;
        divCard.innerHTML = `
        <h5 class="card-title text-center">${element.producto}</h5>
        <p class="card-text text-center">${element.detalle}</p>`;
        
        divTable.innerHTML += 
        
        `<div class= "table-responsive">

        <div>
        <table class="table table__formato">
                
                <tr>
                    <td >${element.store}</td>
                    <td >$${element.precio}</td>
                    <td >${element.inventario}</td>
                    <td class="text-center">${element.domicilio}</td>
                                        
                </tr>
                
            </table>
        </div>`;     
        
    });

};


let opcion = JSON.parse(localStorage.getItem("principales"))


firstResult = () =>{


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirma tu pedido',
        text: `${opcion[0].store} te ofrece el mejor precio
        de tu producto por un total de: ${opcion[0].precio+opcion[0].domicilio}` ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, confirmo!',
        cancelButtonText: 'No, cancelo',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Confirmado!',
            'Tu pedido ha sido añadido.',
            'success'
          )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Te invitamos a seguir comprando',
            'error'
          )
        }
    })

    

}

secondResult = () =>{


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirma tu pedido',
        text: `${opcion[1].store} te ofrece el mejor precio
        de tu producto por un total de: ${opcion[1].precio+opcion[1].domicilio}` ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, confirmo!',
        cancelButtonText: 'No, cancelo',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Confirmado!',
            'Tu pedido ha sido añadido.',
            'success'
          )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Te invitamos a seguir comprando',
            'error'
          )
        }
      })


}

thirdResult = () =>{


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirma tu pedido',
        text: `${opcion[2].store} te ofrece el mejor precio
        de tu producto por un total de: ${opcion[2].precio+opcion[2].domicilio}` ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, confirmo!',
        cancelButtonText: 'No, cancelo',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Confirmado!',
            'Tu pedido ha sido añadido.',
            'success'
          )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Te invitamos a seguir comprando',
            'error'
          )
        }
      })

}


let pago = () => {

    Swal.fire({
        title: 'Metodo de pago',
        text: 'Selecciona la opción de pago más cómoda para ti:',
        confirmButtonText: 'Efectivo Contra entrega',
        cancelButtonText: 'Transferencia',
        showCancelButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                text: 'Has confirmado que tu pago será en efectivo.'
                
            })
            
        } else {
            Swal.fire({
                icon: 'info',
                text: 'En un momento serás redireccionado al botón de pago PSE'
               
            })
        }
    })
      
};
