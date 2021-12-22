import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import FormularioEdicion from "../components/FormularioEdicion";





const db = getFirestore(firebaseApp);

const EditarDespacho = () => {

    
    const [despacho, setDespacho] = useState({});
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
            <h1 className='font-extrabold text-4xl flex justify-center text-orange-900'>Edición de Despacho</h1>


            {/* En caso que el Id no exista no muestre el formulario */}
            {despacho?.nombre ? 
                <FormularioEdicion
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
