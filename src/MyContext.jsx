import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const MyContext = createContext();

const URL_API = "http://localhost:3000";


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
    setPosts([...rPosts.data])
    
    setPostLoading(false)
  };

  const getPostById = async (id) => {
    setPostLoading(true)
    const res = await axios.get(`${URL_API}/posts/${id}`);
    const postId = await res.data
    setPostLoading(false)
    return postId
  };

  const register = async (values) => {
    try {
      console.log(values)
      await axios.post(URL_API + "/signup");
      alert("Usuario registrado con éxito");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

 /*  const signin = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/sigin";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);
      setUsuario()
      navigate("/home");
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };  */

  const addPost = async () => {
    await axios.post(URL_API + "/posts");
    getPosts();
  };

  const editPost = async (id) => {
    await axios.put(URL_API + `/posts/${id}`);
    getPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(URL_API + `/posts/${id}`);
    getPosts();
  };



  // CARRO

  const addProductCart = ({ quantity, post }) => {

    //Se busca si el producto a agregar ya esta en el carrito 
    const findProduct = cart.find(cart => cart.post.id === post.id)

    //Si el producto NO esta en el carrito lo agrega directamente a este.
    if (!findProduct) {
      setCart([...cart, { quantity, post }])

      // Si el producto SI esta en el carrito busca el indice del producto dentro del carro y modifica la cantidad asociada al producto.
    } else {
      const objIndex = cart.findIndex((cart => cart.post.id === post.id));
      cart[objIndex].quantity = quantity;
      setCart([...cart])
    }
  }

  const removeProductCart = ({ quantity, post }) => {

    //Si la cantidad ingresada por paramentro es 0, elimina el producto del carrito
    if (quantity === 0) {
      const newCart = cart.filter(cart => cart.post.id !== post.id);
      setCart([...newCart]);

      // Si la cantidad ingresada por parametro es mayor a 0 busca el indice del producto dentro del carro y modifica la cantidad asociada al producto.
    } else {
      const objIndex = cart.findIndex((cart => cart.post.id === post.id));
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
        user,
        getPostById,
        register
        //signin
        // total,
        // setTotal,
      }}>
      {children}
    </MyContext.Provider>
  )

}
export { ContextProvider };
export default MyContext;