window.onload = function ordenes2() 
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
            <td>${opcion[1].producto} ${opcion[1].detalle}</td>
            <td>${opcion[1].precio}</td>
            <td>1</td>
            <td>${opcion[1].precio + opcion[1].domicilio}</td>
        </tr>
    
    </table>`;

};