import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import FormularioEdicion from "../components/FormularioEdicion";
import moment from "moment";
import Spinner from "../components/Spinner";


moment.locale("es");

const db = getFirestore(firebaseApp);

const EditarDespacho = () => {
  const [despacho, setDespacho] = useState({});
  const [cargando, setCargando] = useState(true);

  //Lee el id que tengamos en la url: hooks useParams
  const { id: enlaceID } = useParams();

  useEffect(() => {
    setCargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const ref = doc(db, `despachos/${enlaceID}`);

        const consulta = await getDoc(ref);

        const respuesta = consulta.data();

        setDespacho(respuesta);
      } catch (error) {
        console.log(error);
      }

      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className="font-extrabold text-4xl flex justify-center text-orange-900">
        Edición de Despacho
      </h1>

      {!despacho.despachado ? (
        <>
          {despacho?.nombre ? (
            <FormularioEdicion despacho={despacho} cargando={cargando} />
          ) : (
            <Spinner/>
          )}
        </>
      ) 
      
      : 
      
      (
        <>
          <div className="py-12 bg-white mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  No puedes editar pedidos despachados
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {despacho.nombre} #{despacho.documento}
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Creado el {`${moment(despacho.creado).format('Do MMMM  YYYY, h:mm:ss a')}`}
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  Despachado el {`${moment(despacho.despacho).format('Do MMMM  YYYY, h:mm:ss a')}`}
                </p>
                
              </div>

              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditarDespacho;
