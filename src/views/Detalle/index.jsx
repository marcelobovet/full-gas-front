import React, { useEffect, useContext, useRef } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MyContext from "../../MyContext";
import Modal from "../../components/Modal";
import ProductForm from "../private/Producto";
import * as dayjs from 'dayjs'

const Detalle = () => {
    const { getPostById, postLoading, addProductCart, editPost, currencyFormatter, user } = useContext(MyContext);
    const [postId, setPostId] = useState(null)
    const [isOwner, setIsOwner] = useState(false);

    const { id } = useParams();
    const navigateDetalle = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [showDelModal, setShowDelModal] = useState(false);

    const handleShowModal = () => { setShowModal(!showModal) }
    const handleShowDelModal = () => { setShowDelModal(!showDelModal) }

    const formRef = useRef(null);
    const saveFormRef = (ref) => { formRef.current = ref };

    const submitPublication = async (values) => {
        const editedPost = await editPost(id, values)
        setPostId(editedPost)
        console.log(values);
        setShowModal(false);
    };

    const handleSave = () => { formRef.current.submitForm() }
    const handleDelete = () => {
        alert("se elimino la wea")
    }

    useEffect(() => {
        const obtenerDatos = async () => {
            const postId = await getPostById(id);
            setPostId(postId)
        }
        if (id && !postId) {
            obtenerDatos()
        }
    }, [id, getPostById, postId])

    useEffect(() => {
        if (user && postId) {
            setIsOwner(user.id === postId.usuario_id ? true : false)
        } else {
            setIsOwner(false)
        }
    }, [user, postId])


    return (<Layout>
        <Modal
            showModal={showModal} handleClose={handleShowModal} title={'Editar Publicación'} handleSave={handleSave} successText={'Editar'}>
            <ProductForm saveFormRef={saveFormRef} onSubmit={submitPublication} values={postId} />
        </Modal>
        <Modal
            showModal={showDelModal} handleClose={handleShowDelModal} title={'Eliminar Publicación'} handleSave={handleDelete} successText={'Eliminar'}>
            ¿Realmente desea eliminar esta publicación?
        </Modal>
        {!postLoading && postId &&
            <div className="d-flex flex-row gap-5 p-5 justify-content-center">
                <div className="col-3">
                    <img src={postId.imagen} className="card-img-top" alt="..." />
                </div>
                <div className="col-3 d-flex flex-column gap-4">
                    <div className="">
                        <h5 className="card-title">{postId.titulo}</h5>
                        <div className="d-flex flex-column">
                            <small className="text-secondary">Publicado el {dayjs(postId.created_at).format('YYYY/MM/DD')} a las {dayjs(postId.created_at).format('HH:mm')} Hrs.  </small>
                            <small className="text-secondary">Publicado por {postId.nombre} </small>
                        </div>
                    </div>
                    <div className="detail_section rounded p-4">
                        <p className="fw-bold">Especificaciones principales</p>
                        <ul>
                            <li className="list-group-item">Formato: {postId.formato} </li>
                            <li className="list-group-item">Marca:  {postId.marca} </li>
                            <li className="list-group-item">Tipo:  {postId.tipo} </li>
                        </ul>
                    </div>
                    <div className="p-4 detail_section rounded">
                        <p className="card-text fw-bold">Descripción</p>
                        <p className="card-text">{postId.descripcion}</p>
                    </div>
                </div >
                <div className="col-3">
                    <div className="mb-5">
                        <h2 className="list-group-item">Precio: {currencyFormatter.format(postId.precio)}</h2>
                    </div>
                    <div className="d-flex flex-column">
                        <button className="btn btn-success btn-md me-5 mt-2 mb-2 rounded-pill" onClick={() => { addProductCart({ quantity: 1, post: postId }) }}>Agregar al carro</button>
                        {isOwner &&
                            <div className="d-flex flex-column">
                                <button className="btn btn-warning btn-md me-5 mt-2 mb-2 rounded-pill" onClick={handleShowModal}>Editar</button>
                                <button className="btn btn-danger btn-md me-5 mt-2 mb-2 rounded-pill" onClick={handleShowDelModal} >Eliminar</button>
                            </div>
                        }
                        {/* <button className="btn btn-secondary btn-md  mt-2 mb-2 rounded-pill" onClick={() => { navigateDetalle(-1) }} >Regresar</button> */}
                    </div>
                </div>
            </div>
        }
        {/* <article className="container d-flex justify-content-center mt-5 mb-5">
            {postLoading && <p>cargando</p>}
            {!postLoading && postId && <div className="card detalle-card">
                <img src={postId.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{postId.titulo}</h5>
                    <p className="card-text">{postId.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">Precio: ${postId.precio} </li>
                    <li className="list-group-item">Formato: {postId.formato} </li>
                    <li className="list-group-item">Marca:  {postId.marca} </li>
                    <li className="list-group-item">Tipo:  {postId.tipo} </li>
                </ul>
                <div className=" d-flex justify-content-center">
                    <button className="btn btn-success btn-md me-5 mt-2 mb-2 rounded-pill" onClick={() => { addProductCart({ quantity: 1, post: postId }) }}>Agregar al carro</button>
                    <button className="btn btn-warning btn-md me-5 mt-2 mb-2 rounded-pill" onClick={handleShowModal}>Editar</button>
                    <button className="btn btn-secondary btn-md  mt-2 mb-2 rounded-pill" onClick={() => { navigateDetalle(-1) }} >Regresar</button>
                </div>
            </div>}

        </article> */}

    </Layout>
    )
}






export default Detalle;