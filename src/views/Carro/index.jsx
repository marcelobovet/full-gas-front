
import { useContext } from "react";
import Layout from "../../components/Layout";
import BloqueCarro from "../../components/BloqueCarro";
import MyContext from "../../MyContext";


const Carro = () => {
  const { cart } = useContext(MyContext);

  return (
    <Layout>
      <div className="container d-grid justify-content-center vh-auto bg">
        {cart && cart.map((cart) => (
          <div className="justify-content-center align-item-start col-12" > <BloqueCarro item={cart} /></div>
        ))}
        <div className="d-flex justify-content-end grid-cart h-25">
          <p className=" fw-bold grid-cart pago-total mt-2"> Total: $   </p>
          
        </div>
        <div className="d-flex justify-content-end h-25">
          <button className="btn btn-success pago mb-3 rounded-pill">
            Pagar
          </button>
        </div>
        
      </div>

    </Layout>)
}






export default Carro;


