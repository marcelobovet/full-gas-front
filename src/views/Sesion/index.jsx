import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

import MyContext from "../../MyContext";
import { useContext, useState } from "react";


const Sesion = () => {

    const { login, loginLoading, loginError, getMe } = useContext(MyContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChangeEmail = (e) => { setEmail(e.target.value) };
    const handleChangePassword = (e) => { setPassword(e.target.value) };

    const onSubmit = async () => {
        await login(email, password);
        const token = localStorage.getItem('token');
        if(token && !loginError) {
            await getMe()
            navigate('/home')
        } 
    }

    return (<Layout>

        <div className="container w-50">
            {loginLoading && <p>Cargando...</p>}
            {!loginLoading &&  
            <form>
                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeEmail} />
                </div>
                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangePassword} />
                </div>
                {
                    loginError && <p>{loginError.message}</p>
                }
                <div className=" d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary rounded-pill" onClick={onSubmit}>Iniciar sesion</button>
                </div>
                <div className="text-center mt-3">
                    <p>
                        ¿Aun no tienes una cuenta? <a href="/register" className="link-underline-primary">Registrate</a>.
                    </p>
                </div>
            </form>
            }
        </div>

    </Layout>)
}

export default Sesion;