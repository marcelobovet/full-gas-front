import Layout from "../../components/Layout";
import Card from "../../components/Card";


import MyContext from "../../MyContext";
import { useContext } from "react";

const Inicio = () => {

    const { posts, postLoading } = useContext(MyContext);
    return (<Layout>

        <div className="inicio mx-auto vh-auto bottom_space">
            <div className="row">
                <div className="col-md-2 bg-light vh-auto">
                    <h3 className="mt-5 mb-3">Filtrar por:</h3>
                    <h5 className="mt-3">Marca</h5>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Lipigas
                            </label>
                        </div><div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Gasco
                            </label>
                        </div><div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Abastible
                            </label>
                        </div>
                    </div>

                    <h5 className="mt-5">Tipo</h5>

                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Normal
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Catalitico
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Full
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Grua Horquilla
                            </label>
                        </div>
                    </div>

                    <h5 className="mt-5">Precio</h5>

                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                $10.000 - $20.000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                $20.000 - $30.000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                $30.000 - $50.000
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Mas de $50.000
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        {postLoading && <p>cargando</p>}
                        {!postLoading && posts.map((post) => {
                            return (<div className="col-sm-12 col-md-auto col-lg-auto col-xl-auto ms-5">
                                <Card post={post} />
                            </div>)
                        })}
                    </div>
                </div>
            </div>

        </div>

    </Layout>)
}

export default Inicio;