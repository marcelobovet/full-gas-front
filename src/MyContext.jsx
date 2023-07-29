import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const MyContext = createContext();

const URL_API = "https://jsonplaceholder.typicode.com";


const ContextProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(false);

  const [cart, setCart] = useState([])

  const [user, setUser] = useState(null)
  // LOGIN

  const login = async (email, password) => {
    console.log(email, password)
    // Hacer peticion axios al endpoint de iniciar sesion del backend, debe retornar un token que se guarda como variable en el localStorage.

    localStorage.setItem("token", "asdasdasdasdasdasdasdasd");
    getMe();
  };

  const logout = async () => {
    setUser(null)
    localStorage.removeItem("token");
  }

  const getMe = async () => {
    const token = localStorage.getItem('token');
    // 1.- obtenemos el token del localstorage
    // 2.- Hacer llamada al endpoint que retorna los datos del usuario logueado (usar token para saber quien esta logueado)
    // 3.- guardar en user, lo retornado por la api
    const user = { name: 'marcelo', role: { id: 1, name: "admin" } }
    // const user = { name: 'nicolas', role: {id: 2, name: "user"} }
    setUser(user)
  }

  //////////////////////////////////////////////////////////////////////
  const getPosts = async () => {
    setPostLoading(true)
    const { data: rPosts } = await axios.get(URL_API + "/posts");
    setPosts([...rPosts])
    setPostLoading(false)
  };

  const addPost = async () => {
    await axios.post(URL_API + "/posts");
    addPost();
  };

  const editPost = async (id) => {
    await axios.put(URL_API + `/posts/${id}`);
    editPost();
  };

  const deletePost = async (id) => {
    await axios.delete(URL_API + `/posts/${id}`);
    deletePost();
  };

  // CARRO

  const addProductCart = ({ quantity, product }) => {

    //Se busca si el producto a agregar ya esta en el carrito 
    const findProduct = cart.find(cart => cart.product.id === product.id)

    //Si el producto NO esta en el carrito lo agrega directamente a este.
    if (!findProduct) {
      setCart([...cart, { quantity, product }])

      // Si el producto SI esta en el carrito busca el indice del producto dentro del carro y modifica la cantidad asociada al producto.
    } else {
      const objIndex = cart.findIndex((cart => cart.product.id === product.id));
      cart[objIndex].quantity = quantity;
      setCart([...cart])
    }
  }

  const removeProductCart = ({ quantity, product }) => {

    //Si la cantidad ingresada por paramentro es 0, elimina el producto del carrito
    if (quantity === 0) {
      const newCart = cart.filter(cart => cart.product.id !== product.id);
      setCart([...newCart]);

      // Si la cantidad ingresada por parametro es mayor a 0 busca el indice del producto dentro del carro y modifica la cantidad asociada al producto.
    } else {
      const objIndex = cart.findIndex((cart => cart.product.id === product.id));
      cart[objIndex].quantity = quantity;
      setCart([...cart])
    }
  }

  // actualizar el valor del carro
  /* const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => (total += product.precio * precio.count));
    setTotal(total);
  } */

  useEffect(() => {
    getPosts();
  }, []);

  //Este useEffect hace que al recargar la pagina no se cierre la sesion si existe un token en el localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getMe();
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        posts,
        postLoading,
        getPosts,
        addPost,
        editPost,
        deletePost,
        cart,
        addProductCart,
        removeProductCart,
        login,
        logout,
        user
        // total,
        // setTotal,
        // cart,
        // setCart,
        // pizzas,
        // setPizzas,
        // addPizzas,
        // getPizza,
        // removePizzas
      }}>
      {children}
    </MyContext.Provider>
  )

}
export { ContextProvider };
export default MyContext;