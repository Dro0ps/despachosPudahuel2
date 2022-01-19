import { getAuth, signOut } from "firebase/auth";
import { Outlet, Link, useLocation } from "react-router-dom"
import db from '../firebase/credenciales'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoHomar from '../img/logoHomar.png'
import {  faClipboardCheck, faClipboardList, faHourglassHalf, faPlus, faSignOutAlt, faTruck } from "@fortawesome/free-solid-svg-icons";


const auth = getAuth(db);


const Layout = ({usuario}) => {

    const location = useLocation();
    const urlActual = location.pathname;


    const cerrarSesion = () => {
        signOut(auth)
    }

    
    return (
        <div className="md:flex md:min-h-screen">

            <div className="md:w-1/4 bg-orange-900 px-5 py-10 flex flex-col justify-between">
                
                <div>
                <h2 className="text-4xl font-extrabold text-center text-white"><img className=" max-w-auto" src={logoHomar} alt="Logo" /></h2>


                
                
                <nav className="mt-10">

                    
                    <Link to="/despachos/nuevo" className={` ${urlActual === '/despachos/nuevo' ? 'text-orange-300' : 'text-white'}
                        text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>
                        <FontAwesomeIcon className="mr-2" icon={faPlus}/>Nuevo
                    </Link>


                    <Link to="/despachos" className={`${urlActual === '/despachos' ? 'text-orange-300' : 'text-white'}
                        text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>
                        <FontAwesomeIcon className="mr-2" icon={faHourglassHalf}/>Pendientes
                    </Link>

                    
                    <Link to="/despachos/despachados" className={`${urlActual === '/despachos/despachados' ? 'text-orange-300' : 'text-white'}
                        text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>
                        <FontAwesomeIcon className="mr-2" icon={faTruck}/>Despachados
                    </Link>

                    <Link to="/despachos/confirmados" className={`${urlActual === '/despachos/confirmados' ? 'text-orange-300' : 'text-white'}
                        text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>
                        <FontAwesomeIcon className="mr-2" icon={faClipboardCheck}/>Confirmados
                    </Link>

                    {usuario.rol !== 'bodega' &&
                        <Link to="/despachos/listado" className={`${urlActual === '/despachos/listado' ? 'text-orange-300' : 'text-white'}
                            text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>
                            <FontAwesomeIcon className="mr-2" icon={faClipboardList}/>Listado
                        </Link>
                    }

                    {usuario && 
                    <h2 className="text-white mt-20 mb-10">Usuario: <p className="font-extrabold uppercase text-1xl">{usuario.nombre}</p></h2>
                    }
                    

                    



                </nav>


            </div>


            
            
                <button 
                    className='text-1xl font-extrabold text-center text-white hover:text-orange-300 transition-colors' 
                    onClick={cerrarSesion}><FontAwesomeIcon className="mr-2" icon={faSignOutAlt}/>Cerrar Sesión
                </button>
            
  
            
                
                
            </div>

            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet/>
            </div>

            
        </div>
    )
}

export default Layout
