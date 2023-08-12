import MyContext from "../MyContext";
import { useContext } from "react";


const BloqueCarro = ({ item }) => {
  const { addProductCart, removeProductCart } = useContext(MyContext);

  return (
    <div className="d-flex bloque mt-3 rounded border flex-row align-items-center">
      <img className="rounded-start col-3" alt="img-gas" width={150} height={150} src={item.post.imagen} />
      <div className="col-6 ps-3" >
        <div className="text-uppercase"><h3>{item.post.marca} {item.post.tipo}</h3></div>
        <div className="text-uppercase"><h5>{item.post.formato}</h5></div>
        <div className="text-uppercase "><h6>${item.post.precio}</h6></div>
      </div>
      <div className="d-flex flex-row col-3 justify-content-end pe-3">
        <button className="btn btn-sm btn-danger btnCarro fw-bold" onClick={() => removeProductCart({ quantity: item.quantity - 1, post: item.post })}>-</button>
        <p className="mx-4 fw-bold">{item.quantity}</p>
        <button className="btn btn-sm btn-success btnCarro fw-bold" onClick={() => addProductCart({ quantity: item.quantity + 1, post: item.post })}>+</button>
      </div>
    </div >

    // quizas agregar imagen al bloque 
    // <div className="row rounded border my-3 p-2  ms-3  bloque">
    //   <img className="imgStyle"
    //     alt="img-gas"
    //     src={item.post.imagen}>
    //   </img>
    //   <div className="col-3 text-uppercase pt-1">{item.post.marca}</div>
    //   <div className="col-3 text-uppercase pt-1">{item.post.formato}</div>
    //   <div className="col-3 text-uppercase pt-1">$ {item.post.precio}</div>
    //   <div className="col-1 text-center">
    //     <button
    //       className="btn btn-sm btn-success btnCarro fw-bold"
    //       onClick={() => addProductCart({ quantity: item.quantity + 1, post: item.post })}
    //     >
    //       +
    //     </button>
    //   </div>
    //   <div className="col-1 text-center fw-bold m-0 p-0">
    //     <p className="countBloque">{item.quantity}</p>
    //   </div>
    //   <div className="col-1 text-center">
    //     <button
    //       className="btn btn-sm btn-danger btnCarro fw-bold"
    //       onClick={() => removeProductCart({ quantity: item.quantity - 1, post: item.post })}
    //     >
    //       -
    //     </button>
    //   </div>

    // </div>
  )
}

export default BloqueCarro;