

const FormEdit = () => {
    return(
        <div className="container w-50 formColor">
        <form>
            <label  htmlFor="images"  class="drop-container" id="dropcontainer">
                <span class="drop-title">Sube el archivo aca</span>
                or
                <input type="file" id="images" accept="image/*" required/>
            </label>
            <div className="mb-3 text-center">
                <label className="form-label">Titulo</label>
                <input type="text" className="form-control" /* onChange={handleChangeEmail} */ />
            </div>
            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Marca</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Peso</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="mb-3 text-center">
                <label for="exampleInputPassword1" className="form-label">Precio</label>
                <input type="text" className="form-control" /* onChange={handleChangePassword} */ />
            </div>

            <div className=" d-flex justify-content-center">
                <button type="submit" className="btn btn-primary rounded-pill" /* onClick={onSubmit} */ > Editar</button>
            </div>

        </form>
    </div>
    )

}

export default FormEdit;