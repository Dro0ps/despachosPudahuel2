import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";

import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";

import firebaseApp from "../firebase/credenciales";
import clienteAxios from "../config/axios";

const db = getFirestore(firebaseApp);

const VistaProducto = () => {
  const [cargando, setCargando] = useState(true);
  const [stock01, setStock01] = useState();
  const [stock02, setStock02] = useState("");
  const [stock303, setStock303] = useState("");
  const [stock301, setStock301] = useState("");

  const [producto, setProducto] = useState({});

  const { id: enlaceID } = useParams();

  function isObjEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const ref = doc(db, `productos/${enlaceID}`);

        const consulta = await getDoc(ref);

        const respuesta = consulta.data();

        await setProducto(respuesta);

        /* ********************************* */
        if (respuesta.cod_interno) {

            /* CONSULTA 01 */
            try {
                const consultaStock01 = await clienteAxios.get(`/api/productos01/${respuesta.cod_interno}`);
                
                if (!isObjEmpty(consultaStock01)) {
                  setStock01(consultaStock01.data[0].DISPON_EX);
                } else {
                  console.log("error en consulta 01");
                }
                
              } catch (error) {
                setStock01("0");
                
              }


            /* CONSULTA 02 */
            try {
                const consultaStock02 = await clienteAxios.get(`/api/productos02/${respuesta.cod_interno}`);
                
                if (!isObjEmpty(consultaStock02)) {
                  setStock02(consultaStock02.data[0].DISPON_EX);
                } else {
                  console.log("error en consulta 02");
                }
                
              } catch (error) {
                setStock02("0");
                
              }


           /* CONSULTA 303 */
           try {
            const consultaStock303 = await clienteAxios.get(`/api/productos303/${respuesta.cod_interno}`);
            
            if (!isObjEmpty(consultaStock303)) {
              setStock303(consultaStock303.data[0].DISPON_EX);
            } else {
              console.log("error en consulta 303");
            }
            
          } catch (error) {
            setStock303("0");
            
          }

           /* CONSULTA 301 */
           try {
            const consultaStock301 = await clienteAxios.get(`/api/productos301/${respuesta.cod_interno}`);
            
            if (!isObjEmpty(consultaStock301)) {
              setStock301(consultaStock301.data[0].DISPON_EX);
            } else {
              console.log("error en consulta 301");
            }
            
          } catch (error) {
            setStock301("0");
            
          }
        }
       
          /* ******************************** */

        
      } catch (error) {
        console.log(error);
      }

      setCargando(false);
    };

    obtenerProducto();
  }, []);

  return (
    <>
      {cargando ? (
        <Spinner />
      ) : (
        <>
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg h-64  text-center"
                src={producto.imagen}
                alt="Imagen del producto"
              />
            </div>

            <div className="p-5">
              <h5 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                {producto.nombre_producto}
              </h5>

                <div className="flex justify-between">
                <p className="mb-3 font-semibold uppercase mt-2 text-black dark:text-gray-400">
                categoria:{" "}
                <span className="text-orange-700">{producto.categoria}</span>
              </p>
                <p className="mb-3 font-semibold uppercase mt-2 text-black dark:text-gray-400">
                Código:{" "}
                <span className="text-orange-700">{producto.cod_interno}</span>
              </p>


                </div>
              

              <div className="grid grid-cols-2">
                <p className=" p-2  font-bold uppercase shadow m-1">
                  Stock Bascuñan:{" "}
                  <span className=" font-normal text-black">{stock02}</span>
                </p>
                <p className=" p-2 font-bold uppercase shadow m-1">
                  Stock Salvador:{" "}
                  <span className=" font-normal text-black">{stock01}</span>
                </p>
                <p className=" p-2 font-bold uppercase shadow m-1">
                  Stock Pudahuel:{" "}
                  <span className=" font-normal text-black">{stock303}</span>
                </p>
                <p className=" p-2 font-bold uppercase shadow m-1">
                  Stock Linares:{" "}
                  <span className=" font-normal text-black">{stock301}</span>
                </p>
              </div>

              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VistaProducto;
