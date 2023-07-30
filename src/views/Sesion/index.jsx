import Layout from "../../components/Layout";

import MyContext from "../../MyContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sesion = () => {

    const { login } = useContext(MyContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleChangeEmail = (e) => { setEmail(e.target.value) };
    const handleChangePassword = (e) => { setPassword(e.target.value) };

    const onSubmit = () => {
        login(email, password);
        navigate('/')
    }

    return (<Layout>

        <div className="container w-50">
            <form>
                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeEmail} />
                </div>
                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangePassword} />
                </div>
                <div className=" d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Iniciar sesion</button>
                </div>
                <div className="text-center mt-3">
                    <p>
                        ¿Aun no tienes una cuenta? <a href="/register" className="link-underline-primary">Registrate</a>.
                    </p>
                </div>
            </form>
        </div>

    </Layout>)
}

export default Sesion;