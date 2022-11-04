const Carrito = () => {
        return (
            <table class="table">
    <thead>
        <tr>

        <th scope="col">Nombre de producto</th>
        <th scope="col">Cantidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">Remeras</th>
        <td>5</td>
        </tr>
        <tr>
        <th scope="row">Pantalones</th>
        <td>3</td>
        </tr>
        <tr>
        <th scope="row">Zapatos</th>
        <td colspan="2">2</td>
        </tr>
    </tbody>
    </table>
        )
}

export default Carrito