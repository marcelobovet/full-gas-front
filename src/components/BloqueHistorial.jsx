


const BloqueHistorial = () => {
    return (
        <div className="row bg-secondary mt-3 rounded w-50">
            <div className="col-sm-12 col-md-auto col-lg-3 text-center">
                <h5 className="text-light d-block text-center">Fecha</h5>
                <p className="d-block"> fecha</p>
            </div>
            <div className="col-sm-12 col-md-auto col-lg-3 text-center">
                <h5 className="text-light">Transaccion</h5>
                <p>codigo</p>
            </div>
            <div className="col-sm-12 col-md-auto col-lg-3 text-center">
                <h5 className="text-light">Precio total</h5>
                <p>total</p>
            </div>
            <div className="col-sm-12 col-md-auto col-lg-3 text-center">
                <h5 className="text-light">Cantidad</h5>
                <p>cantidad</p>
            </div>
        </div>
    )
}

export default BloqueHistorial;