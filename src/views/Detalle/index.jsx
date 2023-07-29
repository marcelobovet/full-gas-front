



const Detalle =({ product }) => {
    return (
        <article className="container">
        <img src="" alt="" className="" />
        <div>
            <h2> {product.title} Hola </h2>
            <p> {product.id} </p>
            <ul className="info-grid">
                <li>Precio:</li>
                <li>${product.price}</li>
                <li>Peso:</li>
                <li>{product.peso}</li>
                <li>Marca:</li>
                <li>{product.marca}</li>
            </ul>
        </div>
    </article>
    )
}






export default Detalle;