import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { faBars, faBoxes, faClipboardCheck, faClipboardList, faDoorOpen, faHourglassHalf, faPlus, faTruck } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import db from '../firebase/credenciales'
import { getAuth, signOut } from "firebase/auth";

  
const auth = getAuth(db);


export default function Example() {


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
    <div className="w-56 text-right lg:hidden block top-16">
      <Menu as="div" className=" relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500  hover:bg-orange-700 rounded-md   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <FontAwesomeIcon className="mr-2" icon={faBars} />
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-orange-200 hover:text-orange-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            
            <div className="px-1 py-1">
              

              {/* ******************** Items Desplegables ****************** */}

              {/* ******** Nuevo ******** */}

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to='/despachos/nuevo'
                    className={`${
                      active ? 'bg-orange-500 text-white font-semibold' : 'text-orange-900'
                    } group flex rounded-md font-semibold items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        aria-hidden="true"
                        icon={faPlus}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-400"
                        aria-hidden="true"
                        icon={faPlus}
                      />
                    )}
                    Crear Nuevo
                    
                  </Link>
                )}
              </Menu.Item>

              {/* ******** Pendientes ******** */}

              <Menu.Item>
                
                {({ active }) => (
                  <Link
                    to='/despachos'
                    className={`${
                      active ? 'bg-orange-500 text-white font-semibold' : 'text-orange-900'
                    } group flex rounded-md font-semibold items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        aria-hidden="true"
                        icon={faHourglassHalf}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-400"
                        aria-hidden="true"
                        icon={faHourglassHalf}
                      />
                    )}
                    Pendientes
                  </Link>
                )}
                
                
               
                
              </Menu.Item>

              {/* ******** Despachados ******** */}

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to='/despachos/despachados'
                    className={`${
                      active ? 'bg-orange-500 text-white font-semibold' : 'text-orange-900'
                    } group flex rounded-md font-semibold items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        aria-hidden="true"
                        icon={faTruck}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-400"
                        aria-hidden="true"
                        icon={faTruck}
                      />
                    )}
                    Despachados
                  </Link>
                )}
              </Menu.Item>

              {/* ******** Entregados ******** */}

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to='/despachos/entregados'
                    className={`${
                      active ? 'bg-orange-500 text-white font-semibold' : 'text-orange-900'
                    } group flex rounded-md font-semibold items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        aria-hidden="true"
                        icon={faBoxes}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-400"
                        aria-hidden="true"
                        icon={faBoxes}
                      />
                    )}
                    Entregados
                  </Link>
                )}
              </Menu.Item>


              {/* ******* Confirmados ******** */}

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to='/despachos/confirmados'
                    className={`${
                      active ? 'bg-orange-500 text-white font-semibold' : 'text-orange-900'
                    } group flex rounded-md font-semibold items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        aria-hidden="true"
                        icon={faClipboardCheck}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-400"
                        aria-hidden="true"
                        icon={faClipboardCheck}
                      />
                    )}
                    Confirmados
                  </Link>
                )}
              </Menu.Item>

            {/* ********** Listado  ********* */}

            <Menu.Item>
                {({ active }) => (
                  <Link
                    to='/despachos/listado'
                    className={`${
                      active ? 'bg-orange-500 text-white font-semibold' : 'text-orange-900'
                    } group flex rounded-md items-center font-semibold w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-white"
                        aria-hidden="true"
                        icon={faClipboardList}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-400"
                        aria-hidden="true"
                        icon={faClipboardList}
                      />
                    )}
                    Listado
                  </Link>
                )}
              </Menu.Item>

              {/* ******* CERRAR SESIÓN ******* */}

              <div className=''>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={cerrarSesion}
                    className={`${
                      active ? 'bg-orange-500 text-white font-bold' : 'text-orange-900'
                    } group flex font-bold rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-black"
                        aria-hidden="true"
                        icon={faDoorOpen}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="w-5 h-5 mr-2 text-orange-900"
                        aria-hidden="true"
                        icon={faDoorOpen}
                      />
                    )}
                    Cerrar Sesión
                  </button>
                )}
              </Menu.Item>
              </div>
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


