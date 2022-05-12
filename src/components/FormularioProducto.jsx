import { Fragment, useState } from "react";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseApp from "../firebase/credenciales";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import * as Yup from "yup";

import { Formik, Form, Field } from "formik";
import { uid } from "uid";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";
import Alerta from "./Alerta";
import { useNavigate } from "react-router-dom";

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const nuevoClienteSchema = Yup.object().shape({
  cod_interno: Yup.string().required("Todos los datos son obligatorios"),
  nombre_producto: Yup.string().required("Todos los datos son obligatorios"),
  categoria: Yup.string().required("Todos los datos son obligatorios"),
});

const FormularioProducto = ({ setFormulario, formSubmit, formulario }) => {
  const [spiner, setSpiner] = useState(false);

  const navigate = useNavigate();

  //////// MANEJO DE ARCHIVOS //////
  let urlImagen;
  let archivoLocal;

  const fileHandler = async (e) => {
    // detectar archivo
    archivoLocal = e.target.files[0];
    if (archivoLocal) {
      console.log(archivoLocal);
    }
  };

  const handleSubmit = async (valores) => {
    setSpiner(true);

    try {
      if (archivoLocal) {
        // cargar archivo a firebase storage
        const archivoRef = ref(storage, `productos/${archivoLocal.name}`);
        await uploadBytes(archivoRef, archivoLocal);

        // obtener url de descarga
        urlImagen = await getDownloadURL(archivoRef);
        console.log(urlImagen);
        // Se asigna la dirección del archivo a la constante archivo
        valores.imagen = urlImagen;

        await addDoc(collection(db, "productos"), valores);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Guardado Correctamente",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        await addDoc(collection(db, "productos"), valores);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Guardado Correctamente",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch (error) {
      console.log(error);
    }

    setSpiner(false);
    setFormulario(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <div className="flex justify-between">
          <p className="uppercase font-bold text-gray-500">Registro de productos</p>
          <button
            className="  font-serif  text-orange-500 rounded max-w-xs   transition-colors  hover:text-orange-700"
            type="submit"
            onClick={formSubmit}
          >
            {formulario ? "Volver al Listado" : "Agregar Nuevo"}
          </button>
        </div>

        <Formik
          initialValues={{
            creado: +new Date(),
            cod_interno: "",
            nombre_producto: "",
            categoria: "",
            imagen: urlImagen ?? "",
            estado: 'Disponible'
          }}
          enableReinitialize={true} // props muy util para formulario en conjunto con defaultProps
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            // resetForm para reiniciar el formulario
            resetForm();
          }}
          validationSchema={nuevoClienteSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form className="mt-10">
                <div className="mb-4">
                  <label className="text-gray-800" htmlFor="nombre">
                    Codinterno:
                  </label>
                  <Field
                    type="number"
                    id="cod_interno"
                    name="cod_interno"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Ingrese el código interno"
                  />
                  {errors.cod_interno && touched.cod_interno ? (
                    <Alerta>{errors.cod_interno}</Alerta>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label className="text-gray-800" htmlFor="direccion">
                    Producto:
                  </label>
                  <Field
                    type="text"
                    id="nombre_producto"
                    name="nombre_producto"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Ingrese el nombre del producto"
                  />
                  {errors.nombre_producto && touched.nombre_producto ? (
                    <Alerta>{errors.nombre_producto}</Alerta>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label className="text-gray-800" htmlFor="direccion">
                    Categoria:
                  </label>
                  <Field
                    type="text"
                    id="categoria"
                    name="categoria"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Ingrese categoria del producto"
                  />
                  {errors.nombre_producto && touched.nombre_producto ? (
                    <Alerta>{errors.nombre_producto}</Alerta>
                  ) : null}
                </div>

                <div className="mb-4 flex justify-items-start">
                  <input
                    type="file"
                    onChange={fileHandler}
                    className="block w-auto text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-orange-700
                        hover:file:bg-violet-100"
                  />

                  {spiner && <Spinner />}
                </div>

                {spiner ? (
                  <input
                    type="submit"
                    value="Agregar Producto"
                    className="mt-5 w-full bg-gray-800 p-3 text-white uppercase font-bold text-lg
                         cursor-pointer "
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    value="Agregar Producto"
                    className="mt-5 w-full bg-orange-800 p-3 text-white uppercase font-bold text-lg
                         cursor-pointer hover:text-orange-300 transition-colors"
                  />
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default FormularioProducto;
