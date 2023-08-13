import { Card } from "react-bootstrap";
import Layout from "../../../components/Layout";
import { useContext } from "react";
import MyContext from "../../../MyContext";

const Publicaciones = () => {

    const { posts, postLoading } = useContext(MyContext);

    return (
        <Layout>
            <div className="container d-grid justify-content-center vh-100 bg">
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
        </Layout>
    )
}

export default Publicaciones;