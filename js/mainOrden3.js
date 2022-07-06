window.onload = function ordenes3() 
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
            <td>${opcion[2].producto} ${opcion[2].detalle}</td>
            <td>${opcion[2].precio}</td>
            <td>1</td>
            <td>${opcion[2].precio + opcion[2].domicilio}</td>
        </tr>
    
    </table>`;

};