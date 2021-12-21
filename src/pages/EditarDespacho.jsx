import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from '../components/Formulario'
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";



const db = getFirestore(firebaseApp);

const EditarDespacho = () => {

    
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
        <>
            <h1 className='font-black text-4xl text-orange-900'>Editar Despacho</h1>

            <p className='mt-3'>Utiliza este Formulario para editar los datos del Despacho</p>

            {/* En caso que el Id no exista no muestre el formulario */}
            {despacho?.nombre ? 
                <Formulario
                    despacho={despacho}
                    cargando={cargando}
                />
                :
                <p>Despacho ID no válido</p>
            }
            
            
        </>
    )
}

export default EditarDespacho
