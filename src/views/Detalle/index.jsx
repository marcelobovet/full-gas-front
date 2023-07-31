import React, { useEffect, useContext } from "react";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MyContext from "../../MyContext";


const Detalle = () => {
    const {getPostById, postLoading } = useContext(MyContext);

    const { id } = useParams();
    const [postId, setPostId] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            const postId = await getPostById(id);
            setPostId(postId)
        }
        if(id){
            obtenerDatos()
        }
    }, [id, getPostById])


    return (<Layout>

        <article className="container d-flex justify-content-center">
              {postLoading && <p>cargando</p>}
              {!postLoading &&  <div className="card detalle-card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{postId.title}</h5>
                        <p className="card-text">{postId.body}</p>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">Precio: ${postId.price} </li>
                        <li className="list-group-item">Peso: {postId.peso} kg. </li>
                        <li className="list-group-item">Marca:  {postId.marca} </li>
                    </ul>
                    <div className=" d-flex justify-content-center">
                        <button className="btn btn-success btn-md me-5 mt-2 mb-2 rounded-pill">Agregar al carro</button>
                        <button className="btn btn-secondary btn-md  mt-2 mb-2 rounded-pill">Regresar</button>
                    </div>
                </div>}

        </article>

    </Layout>
    )
}






export default Detalle;