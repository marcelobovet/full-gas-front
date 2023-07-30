import { createBrowserRouter } from "react-router-dom";
import { Registrar, Carro, Inicio, Sesion, Favoritos, Publicaciones, Detalle } from './views';

// roles all - admin - user

export const NAVIGATION = [
    {
        path: "*",
        label: "*",
        inNav: false,
        role: 'all',
        element: <Inicio />,
    },
    {
        path: "/main",
        label: "Home",
        inNav: false,
        role: 'all',
        element: <Inicio />,
    },
    {
        path: "/register",
        label: "Registrar",
        inNav: true,
        role: 'all',
        element: <Registrar />,
    },
    {
        path: "/login",
        label: "Iniciar sesión",
        inNav: true,
        role: 'all',
        element: <Sesion />,
    },
    {
        path: "/cart",
        label: "Carro",
        inNav: true,
        role: 'all',
        element: <Carro />,
    },
    {
        path: "/posts",
        label: "Publicaciones",
        inNav: true,
        role: 'admin',
        element: <Publicaciones />
    },
    {
        path: "/favorites",
        label: "Historial y favoritos",
        inNav: true,
        role: 'all',
        element: <Favoritos />
    },
    {
        path: "/posts/:id",
        label: "detalle",
        inNav: false,
        role: 'all',
        element: <Detalle />,
    }
]

export const ROUTES = NAVIGATION.map(({ path, label, inNav, role }) => { return { path, label, inNav, role } })

const router = createBrowserRouter(NAVIGATION);

export default router