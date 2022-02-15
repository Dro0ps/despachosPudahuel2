import { getAuth, signOut } from "firebase/auth";
import { Outlet, Link, useLocation } from "react-router-dom"
import db from '../firebase/credenciales'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoHomar from '../img/logoHomar.png'
import {  faClipboardCheck, faClipboardList, faHourglassHalf, faBoxes,  faPlus, faSignOutAlt, faTruck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import MenuMovil from '../components/MenuMovil'



const auth = getAuth(db);


const Layout = ({usuario}) => {

    const location = useLocation();
    const urlActual = location.pathname;


    const cerrarSesion = () => {
        Swal.fire({
            title: '¿Desea Cerrar Sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Cerrar Sesión!'
          }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth)
            }
          })
        
    }


    return (
        
        <div className="md:flex md:min-h-screen  ">

            <div className="md:w-1/7 hidden bg-orange-900 px-5 py-10 md:flex sm:flex-col justify-between items-center ">
                
                <div>
                <h2 className="text-4xl font-extrabold text-center text-white"><img className=" max-w-auto" src={logoHomar} alt="Logo" /></h2>


                

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  pt-6 lg:pt-0" id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block  text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                        </li>
                    </ul>
                </div>
                
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

                    <Link to="/despachos/entregados" className={`${urlActual === '/despachos/entregados' ? 'text-orange-300' : 'text-white'}
                        text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>
                        <FontAwesomeIcon className="mr-2" icon={faBoxes}/>Entregados
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

            <div className=" sm:p-4  md:h-screen  w-full overflow-scroll">

                <div className="flex align-middle  md:hidden justify-between content-between items-center mb-8">
                    {/* Logo Homar */}
                    <h2 className="text-4xl font-extrabold text-center text-white"><img className=" max-w-auto" src={logoHomar} alt="Logo" /></h2>


                    {/* Menu Hamburguer */}
                    <div className="block lg:hidden text-1xl">
                        <button id="nav-toggle" className="md:hidden  flex items-center px-3 py-2 border rounded text-orange-500 border-orange-500 transition-colors hover:text-orange-700 hover:border-orange-700">
                            <svg className="fill-current h-10 w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>

                </div>

                {/* Menu Hamburguer 2 */}
                <MenuMovil/>
                
                <Outlet/>
            </div>
            
        </div>
    )
}

export default Layout
