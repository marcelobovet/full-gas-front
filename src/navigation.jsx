import { createBrowserRouter } from "react-router-dom";
import { Registrar, Carro, Inicio, Sesion, Perfil, Detalle, Publicaciones } from './views';

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
        label: "Articulos:",
        inNav: true,
        role: 'all',
        element: <Carro />,
    },
    {
        path: "/profile",
        label: "Mi Perfil",
        inNav: true,
        role: 'all',
        element: <Perfil />
    },
    {
        path: "/publicaciones",
        label: "Mis Publicaciones",
        inNav: true,
        role: 'all',
        element: <Publicaciones />
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