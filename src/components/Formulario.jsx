import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useNavigate } from 'react-router-dom'; // para redireccionar
import Spinner from './Spinner';
import firebaseApp from '../firebase/credenciales';
import { getFirestore, updateDoc, addDoc, collection} from 'firebase/firestore';



const db = getFirestore(firebaseApp);



const Formulario = ({despacho, cargando}) => {

    const navigate = useNavigate();

    // Definimos la forma que tendran los datos recibidos por el formulario con yup y shape
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre del cliente es Obligatorio'),
        direccion: Yup.string().required('La Dirección es Obligatoria'),
        documento: Yup.string().required('El Numero del documento es Obligatorio'),
        notas: Yup.string().required('Debe Agregar una nota o intrucciones del Despacho')
    })

    const handleSubmit = async (valores) => {
        try {
            
            if(despacho.id) {

                try {
                    const docRef  = await updateDoc(collection(db, `despachos/${id}`), valores);
                    console.log(docRef);
                    
                } catch (error) {
                    console.log(error);
                }

            } else {
                try {
                    console.log(valores)
                    await addDoc(collection(db, "despachos"), valores);

                } catch (error) {
                    console.log(error);
                }
                
            }
                navigate('/despachos')//Redirecciona al usuario a otra ventana

        } catch (error) {
            console.log(error);
        }
    }

    console.log(cargando);


    return (
        cargando ? <Spinner/> : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase 
            text-center'>{ despacho?.nombre ? 'Editar Despacho' : 'Nuevo Despacho'}</h1>


            <Formik
                initialValues={{
                    nombre: despacho?.nombre ?? '',
                    direccion: despacho?.direccion ?? '',
                    documento: despacho?.documento ?? '',
                    notas: despacho?.notas ?? ''
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
                        >Numero de Documento:</label>
                        <Field
                            type="number"
                            id='documento'
                            name='documento'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Boleta / Factura / Guia"
                        />
                        {errors.documento && touched.documento ?
                            (<Alerta>{errors.documento}</Alerta> )
                            : null
                        }
                    </div>
                    
                    <div className='mb-4'>
                        <label
                            className='text-gray-800'
                            htmlFor='notas'
                        >Notas:</label>
                        <Field
                            as='textarea'
                            type="text"
                            id='notas'
                            name='notas'
                            className='mt-2 block w-full p-3 bg-gray-100'
                            placeholder=" Mensaje "
                        />
                        {errors.notas && touched.notas ?
                            (<Alerta>{errors.notas}</Alerta> )
                            : null
                        }
                    </div>

                    <input
                        type='submit'
                        value={ despacho?.nombre ? 'Editar' : 'Agregar Despacho'}
                        className='mt-5 w-full bg-orange-800 p-3 text-white uppercase font-bold text-lg
                         cursor-pointer hover:text-orange-300 transition-colors'
                    />
                    
                    
                    
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
