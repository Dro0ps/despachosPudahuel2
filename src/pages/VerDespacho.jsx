import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerDespacho = () => {

    const [despacho, setDespacho] = useState();
    const [cargando, setCargando] = useState(true);

    //Lee el id que tengamos en la url: hooks useParams
    const {id} = useParams();
    
    const url = `http://localhost:4000/despachos/${id}`
    
    useEffect(() => {
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try {
                
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                
                 await setDespacho(resultado);
                 
            } catch (error) {
                console.log(error)
            }

            setCargando(false);
        }
        obtenerClienteAPI();
    }, [])


    return (
        /* Object.keys(despacho).length === 0 ? <p>No hay resultados</p> : ( */
        <div>

            {!cargando ? <>
            
                { despacho ?
                <>
                <h1 className='font-black text-4xl text-orange-900'>{despacho.nombre}</h1>
                <p className='mt-3'>Detalles de la Orden </p>


                    {/* <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Nombre: </span>
                    {despacho.nombre}
                    </p> */}


                    {despacho.direccion && 
                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Dirección: </span>
                        {despacho.direccion}
                    </p>
                    }
                    
                    {despacho.documento && 
                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">n° documento: </span>
                        {despacho.documento}
                    </p>
                    }
                    
                    {despacho.notas &&
                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Nota: </span>
                        {despacho.notas}
                    </p> }

                </>

                :

                <Spinner/>
            
            }
            
            </>
            :

            <Spinner/>
            
            }
            
            

             
           
        </div>
        /* ) */
    )
}

export default VerDespacho
