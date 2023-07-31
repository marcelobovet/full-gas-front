import MyContext from "../MyContext";
import { useContext } from "react";


const BloqueFav = ({ post }) => {

    const { addProductCart } = useContext(MyContext);

    return (
        <div>
            <div className="row rounded bloque mt-3">
                <div className="col-3">
                    <img
                        src=""
                        alt=""
                    >
                    </img>
                </div>
                <div className="col-3">
                    <p>Title</p>
                </div>
                <div className="col-3">
                    <p>Precio</p>
                </div>
                <div className="col-3">
                    <p>Peso</p>
                </div>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-warning ms-2 mb-2 rounded-pill" onClick={() => { addProductCart({ quantity: 1, post }) }}>
                        Agregar al carro
                    </button>

                </div>
            </div>

        </div>
    )
}

export default BloqueFav;