


const BoxPublic = () => {
    return (
        <div>
            <div className="row rounded bloque mt-3">
                <div className="col-4">
                    <img
                        src=""
                        alt=""
                    >
                    </img>
                </div>
                <div className="col-4">
                    <p>Title</p>
                </div>
                <div className="col-4">
                    <p>Precio</p>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success me-2 mb-2 rounded-pill">
                        Editar
                    </button>
                    <button className="btn btn-danger  ms-2 mb-2 rounded-pill">
                        Eliminar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BoxPublic;