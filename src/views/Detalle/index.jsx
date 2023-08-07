import React, { useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MyContext from "../../MyContext";


const Detalle = () => {
    const {getPostById, postLoading, addProductCart } = useContext(MyContext);
    const [postId, setPostId] = useState(null)

    const { id } = useParams();
    const navigateDetalle = useNavigate();

    
    useEffect(() => {
        const obtenerDatos = async () => {
            const postId = await getPostById(id);
            setPostId(postId)
        }
        if(id && !postId) {
            obtenerDatos()
        }
    }, [id, getPostById, postId])


    return (<Layout>

        <article className="container d-flex justify-content-center mt-5 mb-5">
              {postLoading && <p>cargando</p>}
              {!postLoading && postId &&  <div className="card detalle-card">
                    <img src={postId.imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{postId.titulo}</h5>
                        <p className="card-text">{postId.descripcion}</p>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">Precio: ${postId.precio} </li>
                        <li className="list-group-item">Formato: {postId.peso} kg. </li>
                        <li className="list-group-item">Marca:  {postId.marca} </li>
                        <li className="list-group-item">Tipo:  {postId.tipo} </li>
                    </ul>
                    <div className=" d-flex justify-content-center">
                        <button className="btn btn-success btn-md me-5 mt-2 mb-2 rounded-pill" onClick={() => { addProductCart({ quantity: 1, post: postId }) }}>Agregar al carro</button>
                        <button className="btn btn-secondary btn-md  mt-2 mb-2 rounded-pill" onClick={() => {navigateDetalle(-1)}} >Regresar</button>
                    </div>
                </div>}

        </article>

    </Layout>
    )
}






export default Detalle;