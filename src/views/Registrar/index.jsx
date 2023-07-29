import Layout from "../../components/Layout";

const Registrar = () => {
    return (<Layout>
        <div className="container w-50 formColor">
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label  className="form-label">Nombre</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Apellido</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /* onChange={handleChangeEmail} */ />
                </div>
                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" /* onChange={handleChangePassword} */ />
                </div>
                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"> Repetir Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" /* onChange={handleChangePassword} */ />
                </div>
                <div className=" d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" /* onClick={onSubmit} */ > registrar </button>
                </div>
                <div className="text-center mt-3">
                    <p>
                        Si ya tienes una cuenta inicia sesion <a href="/login" className="link-underline-primary">Aqui</a>.
                    </p>
                </div>
            </form>
        </div>



    </Layout>)

}


export default Registrar;