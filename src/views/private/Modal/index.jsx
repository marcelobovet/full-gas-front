import { Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";

const FormReference = (props) => {
    //Crea un contexto de formik para el formulario actual
    const formikContext = useFormikContext();
    if (props.saveFormRef) {
      // Asigna el contexto de formik a la prop del componente
      props.saveFormRef(formikContext);
    }
    return null;
};

const FormPost = ({onSubmit, saveFormRef, posts}) => {

    const initialValues = {
        imagen: "",
        marca: "",
        formato: "",
        tipo: "",
        precio: "",
    }

    const schema = Yup.object({
        imagen: Yup.string()
            .required("Campo obligatorio!"),
        marca: Yup.string()
            /* .min(2, "Minimo 2 caracteres")
            .max(15, "Maximo 15 caracteres") */
            .required("Campo obligatorio!"),
        formato: Yup.string()
            /* .min(1, "Minimo 2 caracteres")
            .max(15, "Maximo 15 caracteres") */
            .required("Campo obligatorio!"),
        tipo: Yup.string()
            /* .min(2, "Minimo 2 caracteres")
            .max(15, "Maximo 15 caracteres") */
            .required("Campo obligatorio!"),
        precio: Yup.string()
            /* .min(2, "Minimo 2 caracteres")
            .max(15, "Maximo 15 caracteres") */
            .required("Campo obligatorio!"),
    })

    return (
        <div className="container formColor rounded-4 mt-3">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
             {({ errors, touched }) => (
            <Form>
                <div className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label ms-2">URL Imagen</label>
                        <Field className="form-control" id="imagen" name="imagen"/>
                        {errors.imagen && touched.imagen && (<p className="p-form">{errors.imagen}</p>)}
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label ms-2">Marca</label>
                        <Field 
                        className="form-select" 
                        as="select" 
                        id="marca" 
                        name="marca">
                            {posts.map((post, index) => (
                                <option key={index} value={post.value}>
                                  {post.marca}
                                </option>
                              ))}
                        </Field>
                        {errors.marca && touched.marca && (<p className="p-form">{errors.marca}</p>)}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label ms-2">Formato</label>
                        <Field 
                        className="form-select" 
                        as="select" 
                        id="formato" 
                        name="formato">
                            {posts.map((post, index) => (
                                <option key={index} value={post.value}>
                                  {post.formato}
                                </option>
                              ))}
                        </Field>
                        {errors.formato && touched.formato && (<p className="p-form">{errors.formato}</p>)}
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label ms-2">Tipo</label>
                        <Field 
                        className="form-select" 
                        as="select" 
                        id="tipo" 
                        name="tipo">
                            {posts.map((post, index) => (
                                <option key={index} value={post.value}>
                                  {post.tipo}
                                </option>
                              ))}
                        </Field> 
                        {errors.tipo && touched.tipo && (<p className="p-form">{errors.tipo}</p>)}
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label ms-2">Precio</label>
                        <Field 
                        className="form-select" 
                        as="select" 
                        id="precio" 
                        name="precio">
                            {posts.map((post, index) => (
                                <option key={index} value={post.value}>
                                  {post.precio}
                                </option>
                              ))}
                        </Field> 
                        {errors.precio && touched.precio && (<p className="p-form">{errors.precio}</p>)}
                    </div>
                </div>
                {/* Asigna referencia para poder editar/capturar informacion del formulario actual desde cualquier lado */}
                <FormReference saveFormRef={saveFormRef} />
            </Form>
             )}
        </Formik>
        </div>
    )

}

export default FormPost; 