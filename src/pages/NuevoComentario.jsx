import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AnnotationIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/////// FIREBASE //////
import firebaseApp from "../firebase/credenciales";
import { getFirestore, updateDoc, doc } from "firebase/firestore";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { uid } from "uid";
import Swal from "sweetalert2";
import Comentarios from "./Comentarios";
import Spinner from "../components/Spinner";

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const NuevoComentario = ({ despacho, enlaceID, usuario }) => {
  //////// MANEJO DE ARCHIVOS //////
  let urlDescarga;
  let archivoLocal;

  const fileHandler = (e) => {
    // detectar archivo
    archivoLocal = e.target.files[0];
  };

  const handleSubmit = async (valores) => {
    try {

        // cargar archivo a firebase storage
        const archivoRef = ref(storage, `adjuntocoment/${archivoLocal.name}`);
        await uploadBytes(archivoRef, archivoLocal);

        // obtener url de descarga
        urlDescarga = await getDownloadURL(archivoRef);
        console.log(urlDescarga)
        // Se asigna la dirección del archivo a la constante archivo
        valores.adjunto = urlDescarga;

        let nuevosComentarios = [...despacho.comentarios, valores]

        try {
            despacho.comentarios = nuevosComentarios;
                updateDoc(doc(db, `despachos/${enlaceID}`), despacho)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Guardado Correctamente",
                    showConfirmButton: false,
                    timer: 3000,
                  });
        } catch (error) {
            console.log('primero',error)
        }
    
      
    } catch (error) {
      console.log('segundo',error);
    }
  };

  return (
    <>
      <h1>Holas</h1>

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
          <label className="text-gray-800  font-semibold " htmlFor="notas">
            Comentario:
          </label>
          <Field
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
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-orange-700
                        hover:file:bg-violet-100"
            />
          </div>

          <button className="text-gray-800 mt-5 font-semibold " type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default NuevoComentario;
