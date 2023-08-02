import React, { useContext } from "react";
import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
    const { addProductCart } = useContext(MyContext);

    const navigate = useNavigate();

    return (
        <article className="card tarjeta">
            <img className="imgStyle"
                alt="img-gas"
                src={post.imagen}>
            </img>

            <div className="card-body row">
                <div className="d-flex justify-content-center">
                    <h4>{post.titulo}</h4>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">Precio: ${post.precio} </li>
                    <li className="list-group-item">Formato: {post.formato} kg. </li>
                    <li className="list-group-item">Marca:  {post.marca} </li>
                    <li className="list-group-item">Tipo:  {post.tipo} </li>
                </ul>
                <div className="d-flex justify-content-between align-items-end">
                    <button className="btn btn-outline-primary rounded-pill" onClick={() => { addProductCart({ quantity: 1, post }) }}>
                        Agregar al carro
                    </button>
                    <button className="btn btn-outline-primary rounded-pill" onClick={() => { navigate(`/posts/${post.id}`) }}>
                        ver mas
                    </button>
                </div>

            </div>
        </article>
    )
}

export default Card;