import Layout from "../../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import MyContext from "../../MyContext";

import { useNavigate } from "react-router-dom";

const Registrar = () => {

  const { register } = useContext(MyContext);


    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(2, "Minimo 2 caracteres")
                .max(15, "Maximo 15 caracteres")
                .required("Campo obligatorio!"),
            email: Yup.string()
                .email("Formato de email invalido")
                .required("Campo obligatorio!"),
            password: Yup.string()
                .min(8, "Minimo 8 caracteres")
                .required("Campo obligatorio!"),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password")], "contraseñas no coinciden")
                .required("Campo obligatorio!"),
        }),
        onSubmit: async (values) => {
            //alert(JSON.stringify(values, null, 2));
            const response =  await register(values);
           console.log(response + "hola");
           navigate('/login');
        },
    });

    return (<Layout>
        <div className="container w-50 mt-5 vh-100">
            <form onSubmit={formik.handleSubmit} className="colorRegis p-3 bordered-2 rounded-2" >
                <div className="row g-3">
                    <div className="text-center">
                        <label className="form-label">Nombre</label>
                        <input
                            name="nombre"
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            type="text"
                            className="form-control" />
                        {formik.errors.nombre && formik.touched.nombre && (
                            <p className="p-form">{formik.errors.nombre}</p>
                        )}
                    </div>
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="form-control" />
                    {formik.errors.email && formik.touched.email && (
                        <p className="p-form">{formik.errors.email}</p>
                    )}
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="form-control"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className="p-form">{formik.errors.password}</p>
                    )}
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirmar Password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        className="form-control" />
                    {formik.errors.confirm_password &&
                        formik.touched.confirm_password && (
                            <p className="p-form">{formik.errors.confirm_password}</p>
                        )}
                </div>
                <div className=" d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary rounded-pill"> registrar </button>
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