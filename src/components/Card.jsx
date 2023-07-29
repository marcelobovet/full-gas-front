import React, { useContext } from "react";
import MyContext from "../MyContext";

const Card = ({ product, addCard }) => {
    const { addProductCart } = useContext(MyContext);



    return (
        <div className="card tarjeta">
            <img className="imgStyle"
            alt="img-gas">
                {/* src={imagenurl}
                 */}
                 

            </img>

            <div className="card-body row">
                <div className="d-flex justify-content-center">
                    <h4>{product.title}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <button className="btn btn-outline-primary" onClick={() => { addProductCart({ quantity: 1, product }) }}>
                        Agregar al carro
                    </button>
                    <button className="btn btn-outline-primary">
                        ver mas
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Card;