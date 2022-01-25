import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AnnotationIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/////// FIREBASE //////
import firebaseApp from "../firebase/credenciales";
import { getFirestore, updateDoc, doc,  } from "firebase/firestore";

import { Formik, Form, Field } from "formik";
import { uid } from "uid";
import Swal from "sweetalert2";
import Comentarios from "./Comentarios";
import Spinner from "../components/Spinner";

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const NuevoComentario = ({ despacho, enlaceID, usuario }) => {
  const [open, setOpen] = useState(false);
  const [cargando, setCargando] = useState(false);


  const AbreFormulario = () => {
    setOpen(true);
  };

  //////// MANEJO DE ARCHIVOS //////
  let urlDescarga;
  let archivoLocal;

  const fileHandler = (e) => {
    // detectar archivo
    archivoLocal = e.target.files[0];
  };

  const handleSubmit = async (valores) => {

    if( valores.comentario === "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Formulario Vacio',
            text: 'No puede agregar un formulario vacio!',
            timer: 3000
        })
        return;
    }

    setCargando(true);
    
    
    try {
      if (archivoLocal) {
        // cargar archivo a firebase storage
        const archivoRef = ref(storage, `adjuntocoment/${archivoLocal.name}`);
        await uploadBytes(archivoRef, archivoLocal);

        // obtener url de descarga
        urlDescarga = await getDownloadURL(archivoRef);
        console.log(urlDescarga);
        // Se asigna la dirección del archivo a la constante archivo
        valores.adjunto = urlDescarga;
      }

      let nuevosComentarios = [...despacho.comentarios, valores];

      try {
        despacho.comentarios = nuevosComentarios;
        await updateDoc(doc(db, `despachos/${enlaceID}`), despacho);
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Guardado Correctamente",
          showConfirmButton: false,
          timer: 3000,
        });
      } catch (error) {
        console.log("primero", error);
      }
    } catch (error) {
      console.log("segundo", error);
    }

    setCargando(false)

    setOpen(false)
  };

  return (
    <>
      <button
        className="m-2 text-1xl mt-10 mb-10 uppercase max-w-lg text-gray-600"
        onClick={AbreFormulario}
      >
        Agregar Comentario{" "}
        <FontAwesomeIcon
          className="text-2xl mt-4 text-gray-600"
          icon={faComments}
        />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12  sm:mx-0 sm:h-10 sm:w-10">
                      <AnnotationIcon
                        className="h-8 w-8 text-orange-400 "
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium uppercase mb-5 text-gray-900"
                      >
                        Agrega un Comentario
                      </Dialog.Title>

                      <Formik
                        initialValues={{
                          id: uid(),
                          comentario: "",
                          creador: usuario,
                          adjunto: "",
                          creado: +new Date(),
                        }}
                        onSubmit={async (values, { resetForm }) => {
                          await handleSubmit(values);
                          // resetForm para reiniciar el formulario
                          resetForm();
                        }}
                      >
                        <Form>
                          <label
                            className="text-gray-800  font-semibold "
                            htmlFor="notas"
                          >
                            Comentario:
                          </label>
                          <Field
                            as="textarea"
                            cols="20"
                            rows="5"
                            id="comentario"
                            name="comentario"
                            type="comentario"
                            className="mt-2 block w-full p-3 bg-gray-100"
                            placeholder="Escribe un comentario"
                          />

                          <div className="mb-4">
                            <input
                              type="file"
                              onChange={fileHandler}
                              className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            mt-5
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-orange-700
                            hover:file:bg-violet-100"
                            />
                          </div>

                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row inline-flex justify-between">
                  
            { !cargando ?
            <>
                  <button
                  className="w-full inline-flex justify-center rounded-md
                  border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white 
                    focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 
                   sm:w-auto sm:text-sm"
                  type="submit"
                >
                  Guardar
                </button>

                

                <button
                  type="button"
                  className="mt-3 w-full  rounded-md border border-gray-300 shadow-sm px-4 py-2 
                  bg-white text-base font-medium text-gray-700 
                  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>

            </>

                :
            
            <>
                
                <button
                    className="w-full inline-flex justify-center rounded-md
                    border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white 
                      focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 
                     sm:w-auto sm:text-sm"
                    type="submit"
                    disabled
                  >
                    Guardar
                  </button>

                  <Spinner/>

                  <button
                    type="button"
                    className="mt-3 w-full  rounded-md border border-gray-300 shadow-sm px-4 py-2 
                    bg-white text-base font-medium text-gray-700 
                    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    disabled
                  >
                    Cancel
                  </button>
            </>
            }
                    
                </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>

                
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {despacho.comentarios ? (
        <>
          <h2 className=" mb-5 font font-extrabold tracking-tight text-gray-700 sm:text-2xl">
            Comentarios:{" "}
          </h2>

          {despacho.comentarios.map((comentario) => (
            <Comentarios
              key={despacho.comentarios.id}
              comentario={comentario}
            />
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default NuevoComentario;
