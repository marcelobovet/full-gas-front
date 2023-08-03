import Layout from "../../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Registrar = () => {


    const register = async () => {
        const URL_API = "http://localhost:3000";
        try {
          await axios.post(URL_API + "/register", );
          alert("Usuario registrado con éxito");
        } catch (error) {
          alert("Algo salió mal ...");
          console.log(error);
        }
      };


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
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
           console.log(values);
           navigate('/login');
        },
    });

    return (<Layout>
        <div className="container w-50 formColor">
            <form onSubmit={formik.handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Nombre</label>
                        <input
                            name="nombre"
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            type="text"
                            className="form-control" />
                        {formik.errors.full_name && formik.touched.full_name && (
                            <p className="p-form">{formik.errors.full_name}</p>
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
                    <button type="submit" className="btn btn-primary rounded-pill" onClick={register}> registrar </button>
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