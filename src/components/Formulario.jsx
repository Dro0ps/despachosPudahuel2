import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useNavigate } from 'react-router-dom'; // para redireccionar
import Spinner from './Spinner';
import firebaseApp from '../firebase/credenciales';
import { getFirestore, addDoc, collection} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {useState} from 'react';


const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const Formulario = ({despacho, cargando, usuario}) => {

    const [spiner, setSpiner] = useState(false);

    const navigate = useNavigate();
    

    // Definimos la forma que tendran los datos recibidos por el formulario con yup y shape
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre del cliente es Obligatorio'),
        direccion: Yup.string().required('La Dirección es Obligatoria'),
        tipo_doc: Yup.string().required('Debe Seleccionar el Tipo de Documento'),
        documento: Yup.string().required('El Numero del documento es Obligatorio'),
        notas: Yup.string().required('Debe Agregar una nota o intrucciones del Despacho')
        
    })

    //////// MANEJO DE ARCHIVOS //////
    let urlDescarga; 
    let archivoLocal 

    const fileHandler = async e => {
        // detectar archivo
        archivoLocal = e.target.files[0];
    }

    const handleSubmit = async (valores) => {

        setSpiner(true);

        try {
                

            if(archivoLocal) {

                // cargar archivo a firebase storage
                const archivoRef = ref(storage, `archivos/${archivoLocal.name}`);
                await uploadBytes(archivoRef, archivoLocal);

                // obtener url de descarga
                urlDescarga = await getDownloadURL(archivoRef);
                console.log(urlDescarga)
                // Se asigna la dirección del archivo a la constante archivo
                valores.archivo = urlDescarga;

                await addDoc(collection(db, "despachos"), valores);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Guardado Correctamente',
                    showConfirmButton: false,
                    timer: 3000
                  })
                
            } else {
                
                await addDoc(collection(db, "despachos"), valores);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Guardado Correctamente',
                    showConfirmButton: false,
                    timer: 3000
                  })
                
            }

        } catch (error) {
            console.log(error);
        }

        setSpiner(false);

        navigate('/despachos')//Redirecciona al usuario a otra ventana

    }

    return (
        cargando ? <Spinner/> : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase 
            text-center'>{ despacho?.nombre ? 'Editar Despacho' : 'Registrar nuevo'}</h1>


            <Formik
                initialValues={{
                    creado: +new Date(),
                    creador: usuario,
                    recibido: despacho?.recibido ?? false,
                    despachado: despacho?.despachado ?? false,
                    entregado: despacho?.entregado ?? false,
                    confirmado: despacho?.confirmado ?? false,
                    fecha_despachado: despacho?.fecha_despachado ?? '',
                    fecha_confirmado: despacho?.fecha_confirmado ?? '',
                    nombre: despacho?.nombre ?? '',
                    direccion: despacho?.direccion ?? '',
                    tipo_doc: despacho?.documento ?? '',
                    documento: despacho?.documento ?? '',
                    notas: despacho?.notas ?? '',
                    archivo: urlDescarga ?? '',
                    comentarios: despacho?.comentarios ?? [],

                }}
                enableReinitialize={true} // props muy util para formulario en conjunto con defaultProps
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values);
                    // resetForm para reiniciar el formulario
                    resetForm();
                }}
                validationSchema={nuevoClienteSchema} // LLamamos a la función que validara el formulario 
            >
                {({errors, touched}) => {
                    /* console.log(data) */
                    return (
                <Form className='mt-10'>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='nombre'
                        >Cliente:</label>
                        <Field
                            type="text"
                            id='nombre'
                            name='nombre'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Nombre del Cliente "
                        />
                        {errors.nombre && touched.nombre ?
                            (<Alerta>{errors.nombre}</Alerta> )
                            : null
                        }
                    </div>

                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='direccion'
                        >Dirección:</label>
                        <Field
                            type="text"
                            id='direccion'
                            name='direccion'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Dirección de Envio"
                        />
                        {errors.direccion && touched.direccion ?
                            (<Alerta>{errors.direccion}</Alerta> )
                            : null
                        }
                    </div>

                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='documento'
                        >Tipo de Documento:</label>
                        <Field
                        as="select"
                        id='tipo_doc'
                        name='tipo_doc'
                        className='mt-2 block w-full p-3 bg-gray-100'
                        >
                        <option value="">----Seleccione----</option>
                        <option value="factura">Factura</option>
                        <option value="guía">Guía</option>
                        <option value="-otro">Otro</option>
                        </Field>
                        {errors.documento && touched.documento ?
                            (<Alerta>{errors.documento}</Alerta> )
                            : null
                        }
                    </div>
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='documento'
                        >Numero de Documento:</label>
                        <Field
                            type="text"
                            id='documento'
                            name='documento'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder="Ingrese el numero de Factura / Guia"
                        />
                        {errors.documento && touched.documento ?
                            (<Alerta>{errors.documento}</Alerta> )
                            : null
                        }
                    </div>
                    
                    <div className='mb-4'>
                        <label
                            className='text-gray-800  '
                            htmlFor='notas'
                        >Notas:</label>
                        <Field
                            as='textarea'
                            type="text"
                            id='notas'
                            name='notas'
                            className='mt-2 block w-full h-40 p-3 bg-gray-100'
                            placeholder=" Mensaje "
                        />
                        {errors.notas && touched.notas ?
                            (<Alerta>{errors.notas}</Alerta> )
                            : null
                        }
                    </div>

                    <div className='mb-4 flex justify-items-start'>
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

                    { spiner && <Spinner/> }

                    </div>
                    
                    { spiner ? 
                    
                    <input
                        type='submit'
                        value={ despacho?.nombre ? 'Editar' : 'Agregar Despacho'}
                        className='mt-5 w-full bg-gray-800 p-3 text-white uppercase font-bold text-lg
                         cursor-pointer '
                    />
                    :
                    <input
                        type='submit'
                        value={ despacho?.nombre ? 'Editar' : 'Agregar Despacho'}
                        className='mt-5 w-full bg-orange-800 p-3 text-white uppercase font-bold text-lg
                         cursor-pointer hover:text-orange-300 transition-colors'
                    />
                    
                    }
                    

                    
                    
                    
                    
                </Form>
                
                )}}
            </Formik>
        </div>
        )
    )
}

// Se agregan props por defecto en caso de no recibir ningun despacho
Formulario.defaultProps = {
    despacho: {},
    cargando: false
}

export default Formulario
