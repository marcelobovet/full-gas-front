import MyContext from "../MyContext";
import { useContext } from "react";


const BloqueCarro = ({item}) => {
  const { addProductCart, removeProductCart } = useContext(MyContext);

    return(
        <div className="row rounded border my-3 p-2  ms-3 w-75  bloque">
          <div className="col-9 text-uppercase ">{item.post.title}</div>  
          <div className="col-1 text-center p-0">
            <button
              className="btn btn-sm btn-success btnCarro fw-bold"
              onClick={() => addProductCart({ quantity: item.quantity + 1, post: item.post })}   
            >
              +
            </button>
          </div>
          <div className="col-1 text-center p-0">
            <p>{item.quantity}</p>
          </div>
          <div className="col-1 text-center p-0">
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