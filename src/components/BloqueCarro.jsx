import MyContext from "../MyContext";
import { useContext } from "react";


const BloqueCarro = ({ item }) => {
  const { addProductCart, removeProductCart } = useContext(MyContext);

  return (

      // quizas agregar imagen al bloque 
    <div className="row rounded border my-3 p-2  ms-3  bloque">
      <div className="col-3 text-uppercase pt-1">{item.post.marca}</div>
      <div className="col-3 text-uppercase pt-1">{item.post.formato}</div>
      <div className="col-3 text-uppercase pt-1">$ {item.post.precio}</div>
      <div className="col-1 text-center">
        <button
          className="btn btn-sm btn-success btnCarro fw-bold"
          onClick={() => addProductCart({ quantity: item.quantity + 1, post: item.post })}
        >
          +
        </button>
      </div>
      <div className="col-1 text-center fw-bold m-0 p-0">
        <p className="countBloque">{item.quantity}</p>
      </div>
      <div className="col-1 text-center">
        <button
          className="btn btn-sm btn-danger btnCarro fw-bold"
          onClick={() => removeProductCart({ quantity: item.quantity - 1, post: item.post })}
        >
          -
        </button>
      </div>

    </div>
  )
}

export default BloqueCarro;