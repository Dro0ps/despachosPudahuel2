import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";





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
        <div className="relative bg-white overflow-hidden">
        <div className="pt-4 pb-80 sm:pt-4 sm:pb-40 lg:pt-8 lg:pb-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
        {!cargando ? <>

            { despacho ?
            <>
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-700 sm:text-4xl">{despacho.nombre}</h1>
            <p className="mt-4 text-xl text-gray-500">Detalles de la Orden </p>

                {despacho.creado && 
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">Creado el: </span>
                    {`${moment(despacho.creado).format('LL')} ${moment(despacho.creado).format('LTS')}`}
                </p>
                }

                {despacho.direccion && 
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">Dirección: </span>
                    {despacho.direccion}
                </p>
                }
                
                {despacho.documento && 
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">n° documento: </span>
                    {despacho.documento}
                </p>
                }
                
                {despacho.notas &&
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">Nota: </span>
                    {despacho.notas}
                </p> }

                {despacho.archivo &&
                <p className="text-1xl mt-8 text-gray-600">
                    <a href={despacho.archivo} className="inline-block text-center bg-orange-700 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-800"
                    target="_blank">
                        <FontAwesomeIcon className="mr-2" icon={faFileDownload} />Descargar Adjunto
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
        </div>
        </div>
        
    </div>
        
        /* ) */
    )
}

export default VerDespacho
