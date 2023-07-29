
import Finder from "./Finder";
import logo from "../assets/img/logo.png"

import { ROUTES } from "../navigation";
import { NavLink, useNavigate } from 'react-router-dom';
import MyContext from "../MyContext";
import { useContext } from "react";


const Header = () => {

  const { user, logout } = useContext(MyContext);
  const navigate = useNavigate()

  //Se utiliza este array para identificar las rutas publicas que se quieren mostrar al lado izquierdo del nav
  const leftRoutes = ['Registrar', 'Iniciar sesión'];
  //Se utiliza este array para identificar las rutas publicas que se quieren mostrar al lado derecho del nav
  const rightRoutes = ['Carro'];

  //Se utiliza este array para identificar las rutas privadas que se quieren mostrar al lado izquierdo del nav
  const privateRoutes = ['Publicaciones', 'Historial y favoritos', 'Historial']

  return (
    < div className="navbar navbar-dark bg-dark mb-4" >
      <div className="columnas">
        <div className="d-flex justify-content-start mt-2 fw-bold">
          <span className="navbar-brand">
            <NavLink className={`text-white text-decoration-none`} to='/home'>{user ? `Hola ${user.name}` : 'Bienvenido@'}</NavLink>
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
            onClick={()=> navigate("/main")}
            >
          </img>
          </NavLink>
        </div>
        
        <div className="d-flex justify-content-end mt-3">
          {user &&
            <div>
              <button className="btn btn-primary" onClick={logout}>
                cerrar sesion
              </button>
            </div>
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
              user && inNav && privateRoutes.includes(label) && ['all', user.role.name].includes(role) &&
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
          <p>🛒</p>
          {ROUTES.map(({ path, label, inNav }) => (
            inNav && rightRoutes.includes(label) &&
            <NavLink className={`text-white text-decoration-none`} to={path}>{label}</NavLink>
          ))
          }
        </div>

      </div>

    </div>
  )
};


export default Header;
