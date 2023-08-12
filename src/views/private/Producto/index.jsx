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

const ProductForm = ({ onSubmit, saveFormRef, values }) => {

    const brands = ["Lipigas", "Gasco", "Abastible"];
    const formats = ["5Kg", "11Kg", "15Kg", "45Kg"];
    const types = ["Catalitico", "Normal"];

    const initialValues = values || {
        titulo: "",
        descripcion: "",
        imagen: "",
        marca: brands[0],
        formato: formats[0],
        tipo: types[0],
        precio: 0,
    }

    const schema = Yup.object({
        titulo: Yup.string()
            .required("Campo obligatorio!"),
        descripcion: Yup.string()
            .min(10, "Minimo 10 caracteres")
            .required("Campo obligatorio!"),
        imagen: Yup.string()
            .required("Campo obligatorio!"),
        marca: Yup.string()
            .required("Campo obligatorio!"),
        formato: Yup.string()
            .required("Campo obligatorio!"),
        tipo: Yup.string()
            .required("Campo obligatorio!"),
        precio: Yup.number()
            .min(1, "Precio debe ser mayor a $0")
            .required("Campo obligatorio!"),
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
                        <div className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label ms-2">URL Imagen</label>
                                <Field className="form-control" id="imagen" name="imagen" />
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
                                    {brands.map((brand, index) => (
                                        <option key={index} value={brand}>
                                            {brand}
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
                                    {formats.map((format, index) => (
                                        <option key={index} value={format}>
                                            {format}
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
                                    {types.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </Field>
                                {errors.tipo && touched.tipo && (<p className="p-form">{errors.tipo}</p>)}
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label ms-2">Precio</label>
                                <Field
                                    className="form-control"
                                    type="number"
                                    id="precio"
                                    name="precio"
                                />
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

export default ProductForm; 