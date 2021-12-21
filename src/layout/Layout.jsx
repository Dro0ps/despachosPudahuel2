import { Outlet, Link, useLocation } from "react-router-dom"
import React from 'react';


const Layout = () => {

    const location = useLocation();
    const urlActual = location.pathname;
    
    return (
        <div className="md:flex md:min-h-screen">

            <div className="md:w-1/4 bg-orange-900 px-5 py-10">
                <h2 className="text-4xl font-extrabold text-center text-white">Despachos - Pudahuel</h2>

                <nav className="mt-10">

                    <Link to="/despachos" className={`${urlActual === '/despachos' ? 'text-orange-300' : 'text-white'}
                     text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>Despachos</Link>

                    <Link to="/despachos/nuevo" className={`${urlActual === '/despachos/nuevo' ? 'text-orange-300' : 'text-white'}
                     text-2xl block mt-2 font-extrabold hover:text-orange-300 transition-colors`}>Nuevo Despacho</Link>

                </nav>
            </div>

            <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet/>
            </div>

            
        </div>
    )
}

export default Layout
