import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../../MyContext";

const Publicaciones = () => {

    const { userPostsLoading, getUserPosts } = useContext(MyContext);
    const [userPosts, setUserPosts] = useState(null)

    useEffect(() => {
        const obtenerUserPosts = async () => {
            const posts = await getUserPosts();
            setUserPosts(posts)
        }
        if (!userPosts) {
            obtenerUserPosts();
        }
    }, [getUserPosts, userPosts]);

    return (
        <Layout>
            <div className="container d-grid justify-content-center vh-100">
                <div className="col-md-10">
                    <div className="row">
                        {userPostsLoading && !userPosts && <p>cargando</p>}
                        {!userPostsLoading && userPosts && userPosts.map((post) => {
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