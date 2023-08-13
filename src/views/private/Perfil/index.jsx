import Layout from "../../../components/Layout";

import BloqueHistorial from "../../../components/BloqueHistorial";

const Favoritos = () => {

    return (<Layout>
        <div className="container vh-100 bg">
            <div className="row">
                <div className="text-center col-12 mt-3" >

                    <div className="justify-content-center row">
                        <h1>Datos de Usuario</h1>
                        <div className="col mt-5">
                            <h5 className="d-inline"> Nombre: </h5>
                            <p className="d-inline"> nombre </p>
                        </div>
                        <div className="col mt-5">
                            <h5 className="d-inline"> Contraseña: </h5>
                            <p className="d-inline"> contraseña </p>
                        </div>
                        <div className=" mt-5">
                            <h5> Correo: </h5>
                            <p> correo </p>
                        </div>


                    </div>


                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <BloqueHistorial />
                </div>

            </div>


        </div>

    </Layout>)
}

export default Favoritos;


