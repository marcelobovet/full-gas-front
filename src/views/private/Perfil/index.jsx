import Layout from "../../../components/Layout";
import MyContext from "../../../MyContext";
import { useContext } from "react";
import Table from "../../../components/Table";
import * as dayjs from 'dayjs'


const Favoritos = () => {
    const { user, purchases, currencyFormatter } = useContext(MyContext);

    const columns = [
        {
            name: "Fecha",
            dataIndex: "created_at",
            render: (created_at) => dayjs(created_at).format('YYYY-MM-DD HH:mm')
        },
        {
            name: "Transaccion",
            dataIndex: "transaccion",
        },
        {
            name: "Publicación",
            dataIndex: "titulo",
        },
        {
            name: "Cantidad",
            dataIndex: "cantidad",
        },
        {
            name: "Precio Total",
            dataIndex: "precio_total",
            render: (precio_total) => currencyFormatter.format(precio_total)
        },
    ]

    console.log(purchases)

    return (<Layout>
        <div className="bottom_space">
            <div className="detail_section rounded p-4 my-4 mx-5">
                <h4 className="fw-bold">Datos de Usuario</h4>
                <div className="col mt-5">
                    <h5 className="d-inline"> Nombre: </h5>
                    <p className="d-inline"> {user.nombre} </p>
                </div>
                <div className=" mt-5">
                    <h5 className="d-inline"> Correo: </h5>
                    <p className="d-inline"> {user.email} </p>
                </div>
            </div>

            <div className="detail_section rounded p-4 my-4 mx-5 ">
                <h4 className="fw-bold"> Historial de compras </h4>

                {
                    purchases &&
                    <div className="pt-4">
                        <Table columns={columns} data={purchases} />
                    </div>
                }

                {/* <BloqueHistorial /> */}
            </div>

        </div>

        



        {/* <div className="container vh-100">
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
                    
                </div>

            </div>


        </div> */}

    </Layout>)
}

export default Favoritos;


