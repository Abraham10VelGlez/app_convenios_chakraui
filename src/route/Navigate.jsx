
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
//import Welcome from '../components/window/welcome';
//import Welcome2 from '../components/window/Welcome2';
import Cookies from 'js-cookie';
import App2 from '../App2';
import Welcome_site from '../componentsx/Welcome_site';
//import Protector_ from './protector';
///import { Hook_Auth_JsonwebToken } from '../Hooks/login/hook_authentic';
//import Welcome_especialista from '../sesion/especialista/Views/Welcome_especialista';
//import Dictavalbegin from '../sesion/especialista/Views/Dictavalbegin';
//import { UsersProvider } from './context/UsersContext';

//import { AnimatePresence } from 'framer-motion'
//import Error404 from '../components/extras/Error404';

export default function Navigate() {


    //const { username, userId, useremail, json_opt } = Hook_Auth_JsonwebToken();
    // const { json_opt } = Hook_Auth_JsonwebToken();
    //const { json_opt } = Hook_Auth_JsonwebToken();
    //console.log(username);

    ///animar con transiones de paginas
    const location = useLocation()


    return (

        <Routes location={location} key={location.pathname}>
            {/* rutas libres */}
            <Route path="/" index element={<Welcome_site></Welcome_site>} />
            <Route path="/inicio2" index element={<App2></App2>} />
            {/*
            <Route path="/inicio" index element={<Welcome></Welcome>} />
            <Route path="/ini2" index element={<Home />} />
            <Route path="/404" element={<Error404 />} />
            */}

            {/* rutas protegidas 
                <Route path='/applicationigecem_especialista' element={<Welcome_especialista username={username} userId={userId} useremail={useremail} json_opt={json_opt} />} />
                */}

            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound />} />

        </Routes>


    );
}

function Boxes() {
    return <>asd</>
}

function Navbar() {
    // visible on every page
    return <> <h1>NAVEGACION DE RUTAS IEGECEM IMAGES</h1></>
}

function Home() {
    return (
        <>
            <p>SISTEMA DE NAVEGACION DE RUTAS ABRAHAM PARA SISTEMAS</p>
            <ul>
                <li><Link to='/regixpress'> Inicio </Link></li>
                <li><Link to='/json'>ejemplo de json</Link></li>
                <li><Link to='/inicio'>Sistema Catastral de Dictamenes</Link></li>
            </ul>
        </>);
}

function About() {
    return (
        <>
            <p>ACERCA DE</p>
            <ul>
                PAGINAS PROTEGIDAS VERSION NATIVA QUE DETALLE
            </ul>
        </>);
}


function NotFound() {
    return (<><p>Ha llegado a una página que no existe dentro de sitio web de convenios :| </p></>);
}