import { Field, Form, Formik, useFormikContext } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import MyContext from "../../../MyContext";

const FormReference = (props) => {
    //Crea un contexto de formik para el formulario actual
    const formikContext = useFormikContext();
    if (props.saveFormRef) {
        // Asigna el contexto de formik a la prop del componente
        props.saveFormRef(formikContext);
    }
    return null;
};

const ProductForm = ({ onSubmit, saveFormRef, values }) => {

    const { products, currencyFormatter } = useContext(MyContext)

    const initialValues = values || {
        titulo: "",
        descripcion: "",
        producto_id: products[0].id
    }

    const schema = Yup.object({
        titulo: Yup.string()
            .required("Campo obligatorio!"),
        descripcion: Yup.string()
            .min(10, "Minimo 10 caracteres")
            .required("Campo obligatorio!"),
        producto_id: Yup.string()
            .required("Campo obligatorio!")
    })

    return (
        <div className="container formColor rounded-4 mt-3">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
                {({ errors, touched }) => (
                    <Form>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label ms-2">Titulo</label>
                                <Field className="form-control" id="titulo" name="titulo" />
                                {errors.titulo && touched.titulo && (<p className="p-form">{errors.titulo}</p>)}
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label ms-2">Descripción</label>
                                <Field className="form-control" id="descripcion" name="descripcion" as="textarea" />
                                {errors.descripcion && touched.descripcion && (<p className="p-form">{errors.descripcion}</p>)}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label ms-2">Formato</label>
                            <Field
                                className="form-select"
                                as="select"
                                id="producto_id"
                                name="producto_id">
                                {products.map((product, index) => (
                                    <option key={index} value={product.id}>
                                        {product.marca} | {product.formato} | {product.tipo} | {currencyFormatter.format(product.precio)}
                                    </option>
                                ))}
                            </Field>
                            {errors.formato && touched.formato && (<p className="p-form">{errors.formato}</p>)}
                        </div>

                        {/* Asigna referencia para poder editar/capturar informacion del formulario actual desde cualquier lado */}
                        <FormReference saveFormRef={saveFormRef} />
                    </Form>
                )}
            </Formik>
        </div>
    )

}

export default ProductForm; 