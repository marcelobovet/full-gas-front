import { createContext, useState, useEffect } from "react";
import axios from 'axios';
//import { useNavigate } from "react-router-dom";


const MyContext = createContext();

const URL_API = `${process.env.REACT_APP_BACKEND_URL}`;


const ContextProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [postLoading, setPostLoading] = useState(false);
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState(null);

  const [purchases, setPurchases] = useState([]);
  const [purchasesLoading, setPurchasesLoading] = useState(false);
  const [purchasesError, setPurchasesError] = useState(null);

  // const [userPosts, setUserPosts] = useState([]);
  const [userPostsLoading, setUserPostsLoading] = useState(false);
  //const [userPostsError, setUserPostsError] = useState(null);

  const currencyFormatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  });

  ///////////////////////  LOGIN  ////////////////////////////

  const login = async (email, password) => {
    setLoginLoading(true);
    setLoginError(null);
    try {
      console.log(email, password)
      if (email && password) {
        const { data: { token, email: userEmail, nombre, id } } = await axios.post(URL_API + "/signin", { email, password });
        localStorage.setItem("token", token);
        setUser({ email: userEmail, nombre, id })
        await getUserPuchases();
      }
      setLoginLoading(false);

    } catch ({ response: { data: message } }) {

      setLoginError(message)
      setLoginLoading(false);
    }

  };

  const getMe = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const res = await axios.get(URL_API + "/me", config);
    setUser(res.data)
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem("token");
  }

  ///////////////////////  REGISTER  ////////////////////////////

  const register = async (values) => {
    setRegisterLoading(true);
    setRegisterError(null);

    try {
      console.log(values)
      await axios.post(URL_API + "/signup", values);
      setRegisterLoading(false);

    } catch ({ response: { data: message } }) {
      setRegisterError(message)
      setRegisterLoading(false);
    }
  };

  ///////////////////////  PRODUCTS  ////////////////////////////

  const getProducts = async () => {
    setProductsLoading(true);
    setProductsError(null);

    try {
      const { data } = await axios.get(URL_API + "/products");
      setProductsLoading(false);
      setProducts(data.data)

    } catch ({ response: { data: message } }) {
      setRegisterError(message)
      setProductsLoading(false);
    }
  };

  ///////////////////////  POST  ////////////////////////////////

  const getPosts = async () => {
    setPostLoading(true)
    const { data: rPosts } = await axios.get(URL_API + "/posts");
    setPosts([...rPosts.data])

    setPostLoading(false)
  };

  const getUserPosts = async () => {
    setUserPostsLoading(true)
    console.log(user)
    const { data: rPosts } = await axios.get(URL_API + "/posts/user/" + user.id);
    setUserPostsLoading(false)

    return [...rPosts.data]

  };

  const getPostById = async (id) => {
    setPostLoading(true)
    const res = await axios.get(`${URL_API}/posts/${id}`);
    const postId = await res.data.data
    setPostLoading(false)
    return postId
  };

  const addPost = async (post) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

    setPostLoading(true)
    try {
      await axios.post(URL_API + "/posts", post, config);
      setPostLoading(false);
      getPosts();

    } catch ({ response: { data: message } }) {
      setPostLoading(false);
    }
  };

  const editPost = async (id, values) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    await axios.put(URL_API + `/posts/${id}`, values, config);
    await getPosts();
    return await getPostById(id);
  };

  const deletePost = async (id) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    await axios.delete(URL_API + `/posts/${id}`, config);
    await getPosts();
  };


  ///////////////////////  CARRO  ///////////////////////////////

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


  const cartResume = () => {
    let quantity = 0
    let total = 0

    cart.forEach((cart) => {
      quantity = quantity + cart.quantity;
      total = total + cart.post.precio * cart.quantity

    })

    return { quantity, total }
  }


  /////////////////////////////////////////////////////////////

  const createPurchase = async (purchase) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    await axios.post(URL_API + "/purchases", purchase, config);
    await getUserPuchases();
    setCart([]);
  };

  const getUserPuchases = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    setPurchasesLoading(true)
    try {
      const { data } = await axios.get(URL_API + "/purchases", config);
      setPurchasesLoading(false)
      setPurchases(data.data)
    } catch (error) {
      setPurchasesError(error.message)
      setPurchasesLoading(false)
    }
    // await getPosts();
  };

  useEffect(() => {
    getPosts();
    getProducts();
  }, []);

  /*   // Este useEffect hace que al recargar la pagina no se cierre la sesion si existe un token en el localStorage
   useEffect(() => {
     const token = localStorage.getItem('token');
       if (token) {
       getMe();
       }
    }, []); */

  return (
    <MyContext.Provider
      value={{
        currencyFormatter,
        posts,
        postLoading,
        getPosts,
        addPost,
        editPost,
        deletePost,
        cart,
        cartResume,
        addProductCart,
        removeProductCart,
        login,
        loginLoading,
        loginError,
        logout,
        user,
        getPostById,
        register,
        registerLoading,
        registerError,
        //getMe,
        products,
        productsLoading,
        productsError,
        userPostsLoading,
        getUserPosts,
        createPurchase,
        purchases,

        //signin
        //cartTotal,
        //setCartTotal
      }}>
      {children}
    </MyContext.Provider>
  )

}
export { ContextProvider };
export default MyContext;