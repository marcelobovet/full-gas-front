
import { useContext } from "react";
import Layout from "../../components/Layout";
import BloqueCarro from "../../components/BloqueCarro";
import MyContext from "../../MyContext";


const Carro = () => {
  const { cart } = useContext(MyContext);

  return (
  <Layout>
    <div className="container container-carro justify-content-center vh-100">
      {cart && cart.map((cart) => (
        <div> <BloqueCarro item={cart}/></div>     
      ))}
    </div>
  </Layout>)
}






export default Carro;


