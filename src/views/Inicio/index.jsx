import Layout from "../../components/Layout";
import Card from "../../components/Card";


import MyContext from "../../MyContext";
import { useContext } from "react";

const Inicio = () => {

    const { posts, postLoading } = useContext(MyContext);
    return (<Layout>

        <div className="inicio mx-auto vh-auto">
            <div className="row">
                <div className="col-md-2 bg-light vh-auto">
                    filtros
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