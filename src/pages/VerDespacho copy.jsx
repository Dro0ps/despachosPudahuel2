import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

import { 
    getFirestore,
    getDoc, 
    doc, 
    updateDoc, 
    
} from "firebase/firestore";

import firebaseApp from "../firebase/credenciales";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";


moment.locale("es");


const db = getFirestore(firebaseApp);

const VerDespacho = () => {

    const [despacho, setDespacho] = useState({
        
    });

    const {
        nombre,
        creado,
        direccion,
        documento,
        notas,
        recibido,
        despachado,
        confirmado,
        archivo
    } = despacho;


    const [cargando, setCargando] = useState(true);

    //Lee el id que tengamos en la url: hooks useParams
    const {id: enlaceID} = useParams();

    
    //////////////Escucha del servidor////////////////

    let respuesta;

    
    useEffect(() => {
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try {

                const ref = doc(db, `despachos/${enlaceID}`);

                const consulta = await getDoc(ref);

                respuesta = consulta.data();
                
                setDespacho(respuesta);
                
                 
            } catch (error) {
                console.log(error)
            }

            setCargando(false);
        }
        obtenerClienteAPI();
    }, [despacho.despachado])


    //////// CAMBIOS DE ESTADO///////
    const estadoRecibido = async(despacho) => {
        setDespacho({
            ...despacho,
            recibido = true
        })
        console.log(despacho.recibido)
    }

    const estadoDespachado = async(despacho) => {
        setDespacho({
            ...despacho,
            despachado = true
        })
        console.log(despacho.despachado)
    }

    const estadoConfirmado = async(despacho) => {
        setDespacho({
            ...despacho,
            confirmado = true
        })
        console.log(despacho.confirmado)
    }

    ///////// ACTUALIZA CAMBIOS DE ESTADO ///////
    const actualizaEstado = async() => {
        await updateDoc(doc(db, `despachos/${enlaceID}`), despacho);
    }

    

    

    return (
        /* Object.keys(despacho).length === 0 ? <p>No hay resultados</p> : ( */
        <div className="relative bg-white overflow-hidden">
        <div className="pt-4 pb-80 sm:pt-4 sm:pb-40 lg:pt-8 lg:pb-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div className="sm:max-w-lg">
        {!cargando ? <>

            { despacho ?
            <>
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-700 sm:text-4xl">{nombre}</h1>
            <p className="mt-4 text-xl text-gray-500">Detalles de la Orden </p>

                {creado && 
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">Creado el: </span>
                    {`${moment(creado).format('LL')} ${moment(creado).format('LTS')}`}
                </p>
                }

                {direccion && 
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">Dirección: </span>
                    {direccion}
                </p>
                }
                
                {documento && 
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">n° documento: </span>
                    {documento}
                </p>
                }
                
                {notas &&
                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-500 uppercase font-bold">Descripción: </span>
                    {notas}
                </p> }

                
                <div className="mt-6">
                {/******************Recibido*******************/}
                    {recibido ?
                    <button 
                        className="inline-block text-center mr-4 bg-green-300 border border-green rounded-md
                         py-3 px-8 font-medium text-black"
                    >Recibido</button>

                    :

                    <button 
                        className="inline-block text-center mr-4 bg-white-700 border border-green rounded-md
                         py-3 px-8 font-medium text-black hover:bg-green-300"
                        onClick={estadoRecibido}
                        value={recibido}
                    >Recibido</button>
                    }
                
                {/******************Despachado*******************/}
                    {despachado ?
                    <button 
                        className="inline-block text-center mr-4 bg-green-300 border border-green rounded-md
                        py-3 px-8 font-medium text-black"
                    >Despachado</button>

                    :

                    <button 
                        className="inline-block text-center mr-4 bg-white-700 border border-green rounded-md
                         py-3 px-8 font-medium text-black hover:bg-green-300"
                         value={despachado}
                        onClick={estadoDespachado}
                    >Despachado</button>
                    }

                {/******************Confirmado*******************/}
                {confirmado ?
                    <button 
                        className="inline-block text-center mr-4 bg-green-300 border border-green rounded-md
                        py-3 px-8 font-medium text-black"
                    >Confirmado</button>

                    :

                    <button 
                        className="inline-block text-center mr-4 bg-white-700 border border-green rounded-md
                         py-3 px-8 font-medium text-black hover:bg-green-300"
                        value={confirmado}
                        onClick={estadoConfirmado}
                    >Confirmado</button>
                    }

                </div>


                {archivo &&
                <p className="text-1xl mt-8 text-gray-600">
                    <a href={archivo} className="inline-block text-center bg-orange-700 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-orange-800"
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