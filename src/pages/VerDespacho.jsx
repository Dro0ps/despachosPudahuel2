import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFileDownload } from "@fortawesome/free-solid-svg-icons";





moment.locale("es");


const db = getFirestore(firebaseApp);

const VerDespacho = () => {

    const [despacho, setDespacho] = useState();
    const [cargando, setCargando] = useState(true);

    //Lee el id que tengamos en la url: hooks useParams
    const {id: enlaceID} = useParams();
    
    useEffect(() => {
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try {

                const ref = doc(db, `despachos/${enlaceID}`);

                const consulta = await getDoc(ref);

                const respuesta = consulta.data();
                
                setDespacho(respuesta);
                 
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
                <h1 className='font-black text-4xl mt-8 text-orange-900'>{despacho.nombre}</h1>
                <p className='mt-3'>Detalles de la Orden </p>


                    {/* <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Nombre: </span>
                    {despacho.nombre}
                    </p> */}


                    {despacho.creado && 
                    <p className="text-2xl mt-4 text-gray-600">
                        <span className="text-gray-800 uppercase font-bold">Creado el: </span>
                        {`${moment(despacho.creado).format('LL')} ${moment(despacho.creado).format('LTS')}`}
                    </p>
                    }

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

                    {despacho.archivo &&
                    <p className="text-1xl mt-8 text-gray-600">
                        <a href={despacho.archivo} className="text-2xl text-orange-800" target="_blank">
                            <FontAwesomeIcon icon={faFileDownload} />Descargar Adjunto
                        </a>
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
