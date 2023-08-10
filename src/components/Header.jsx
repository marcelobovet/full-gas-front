
import Finder from "./Finder";
import Modal from "./Modal";
import logo from "../assets/img/logo.png"

import { ROUTES } from "../navigation";
import { NavLink, useNavigate } from 'react-router-dom';
import MyContext from "../MyContext";
import { useContext, useState, useRef } from "react";
import FormPost from "../views/private/Modal";


const Header = () => {

    const [showModal, setShowModal] = useState(false);

    const { user, logout, cart, addPost } = useContext(MyContext);
    const navigate = useNavigate()

    //Se utiliza este array para identificar las rutas publicas que se quieren mostrar al lado izquierdo del nav
    const leftRoutes = ['Registrar', 'Iniciar sesión'];
    //Se utiliza este array para identificar las rutas publicas que se quieren mostrar al lado derecho del nav
    const rightRoutes = ['Articulos:'];

    //Se utiliza este array para identificar las rutas privadas que se quieren mostrar al lado izquierdo del nav
    const privateRoutes = ['Mi Perfil']

    //Permite cambiar el estado del modal de abierto a cerrado y viceversa.
    const handleShowModal = () => { setShowModal(!showModal) }

    //Crea referencia asociada al formulario de Formik
    const formRef = useRef(null);
    //Guarda la referencia de formik en la referencia creada.
    const saveFormRef = (ref) => { formRef.current = ref };

    //Permite guardar el producto con los valores asociados al formulario
    const submitPublication = async (values) => { addPost(values) };

    //Permite hacer submit del formulario formik usando la referencia antes creada
    const handleSave = () => {
        formRef.current.submitForm()
        setShowModal(false);
    }

    return (
        < div className="navbar navbar-dark bg-dark mb-4 main-header" >

            {/* MODAL PARA LA CREACION DE PUBLICACIONES */}
            <Modal showModal={showModal} handleClose={handleShowModal} title={'Crear Publicación'}  handleSave={handleSave}>
                <FormPost saveFormRef={saveFormRef} onSubmit={submitPublication}  />
            </Modal>

            <div className="columnas">
                <div className="d-flex justify-content-start mt-2 fw-bold">
                    <span className="navbar-brand">
                        <NavLink className={`text-white text-decoration-none`} to='/home'>{user ? `Hola ${user.nombre}` : 'Bienvenido@'}</NavLink>
                    </span>
                </div>

                <div className="d-flex justify-content-center">
                    <NavLink to='/home'>
                        <img
                            alt=""
                            src={logo}
                            width="120"
                            height="90"
                            className="align-item-center justify-content-center"
                            onClick={() => navigate("/main")}
                        >
                        </img>
                    </NavLink>
                </div>

                <div className="d-flex justify-content-end mt-3">
                    {user &&
                        <>
                            <div>
                                <button className="btn btn-success" onClick={handleShowModal}>
                                    Crear publicación
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-danger ms-2" onClick={logout}>
                                    cerrar sesion
                                </button>
                            </div>
                        </>

                    }
                </div>

                <div className="d-flex justify-content-start">
                    {/* Despliega nav para rutas publicas del lado izquierdo*/}
                    {
                        ROUTES.map(({ path, label, inNav }) => (
                            !user && inNav && leftRoutes.includes(label) &&
                            <NavLink className="privateRutes" to={path}>{label}</NavLink>
                        ))
                    }
                    {/* Despliega nav para rutas privadas del lado izquierdo */}
                    {
                        ROUTES.map(({ path, label, inNav, role }) => (
                            //user && inNav && privateRoutes.includes(label) && ['all', user.role.name].includes(role) &&
                            user && inNav && privateRoutes.includes(label) && ['all'].includes(role) &&
                            <NavLink className="privateRutes" to={path}>{label}</NavLink>
                        ))
                    }
                </div>

                <div className="d-flex justify-content-center">
                    <div>
                        <Finder />
                    </div>
                </div>

                <div className="d-flex justify-content-end me-5 fw-bold">
                    {/* Despliega nav para rutas publicas del lado derecho */}
                    <p className="m-0 text-center align-middle text-white">🛒</p>
                    {ROUTES.map(({ path, label, inNav }) => (
                        inNav && rightRoutes.includes(label) &&
                        <NavLink className={`text-white text-decoration-none`} to={path}>{label}</NavLink>
                    ))
                    }
                    <p className="text-white ms-1">  {cart.length ? cart.length : ""} </p>
                </div>

            </div>

        </div>
    )
};


export default Header;
