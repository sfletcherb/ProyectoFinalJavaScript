window.onload = function ordenes1() 
{
    const pedido = document.getElementById('tables');
    pedido.innerHTML = `
        
        <table class="table">
        <tr>
            <th>Referencia</th>
            <th>Artículo</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>6537829365382</td>
            <td>${opcion[0].producto} ${opcion[0].detalle}</td>
            <td>${opcion[0].precio}</td>
            <td>1</td>
            <td>${opcion[0].precio + opcion[0].domicilio}</td>
        </tr>
    
    </table>`;

};

