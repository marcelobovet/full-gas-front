
import { useContext } from "react";
import Layout from "../../components/Layout";
import MyContext from "../../MyContext";



const Carro = () => {
  const { cart, addProductCart, removeProductCart } = useContext(MyContext);

 /*  useEffect(() => {
    console.log(cart)
  })
 */
  return (<Layout>
    <div className="container">
      {cart && cart.map((cart) => (
        <div className="row rounded border my-3 p-2 w-75">
          <div className="col-9 text-uppercase ">{cart.product.title}</div>    {/* //aca cambie el map title x name  */}
          <div className="col-1 text-center p-0">
            <button
              className="btn btn-sm btn-success btnCarro fw-bold"
              onClick={() => addProductCart({ quantity: cart.quantity + 1, product: cart.product })}   
            >
              +
            </button>
          </div>
          <div className="col-1 text-center p-0">
            <p>{cart.quantity}</p>
          </div>
          <div className="col-1 text-center p-0">
            <button
              className="btn btn-sm btn-danger btnCarro fw-bold"
              onClick={() => removeProductCart({ quantity: cart.quantity - 1, product: cart.product })}
            >
              -
            </button>
          </div>

        </div>
      ))}
    </div>


  </Layout>)
}






export default Carro;


