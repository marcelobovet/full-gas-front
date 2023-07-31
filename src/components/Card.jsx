import React, { useContext } from "react";
import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
    const { addProductCart } = useContext(MyContext);

    const navigate = useNavigate();
    
    return (
        <div className="card tarjeta">
            <img className="imgStyle"
            alt="img-gas">
                {/* src={imagenurl}
                 */}
                 

            </img>

            <div className="card-body row">
                <div className="d-flex justify-content-center">
                    <h4>{post.title}</h4>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                    <button className="btn btn-outline-primary rounded-pill" onClick={() => { addProductCart({ quantity: 1, post }) }}>
                        Agregar al carro
                    </button>
                    <button className="btn btn-outline-primary rounded-pill" onClick={ ()=> {navigate(`/posts/${post.id}`)}}>
                        ver mas
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Card;