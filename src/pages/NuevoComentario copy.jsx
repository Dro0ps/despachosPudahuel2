import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AnnotationIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; // para redireccionar

/////// FIREBASE //////
import firebaseApp from '../firebase/credenciales';
import { getFirestore, addDoc, collection, updateDoc, doc} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { uid } from 'uid';


const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const NuevoComentario = ({despacho, enlaceID}) => {

    const [open, setOpen] = useState(false)

    const [coment, setComent] = useState({
        id: uid(),
        comentario: '',
        adjuntoComentario: ''
    })

    const [archivoLocal, setArchivoLocal] = useState()


    const {comentario, adjuntoComentario} = coment;

    
    const leerArchivo = async e => {
        await setArchivoLocal( e.target.files[0] );
        
    }

    let urlDescarga;
    let archivoRef;

    const subirArchivo = async e => {
        archivoRef = await ref(storage, `comentarios/${archivoLocal.name}`);
        
        await uploadBytes(archivoRef, archivoLocal);

        // obtener url de descarga
        urlDescarga = await getDownloadURL(archivoRef);
    }

    const handleComentario = e => {

        setComent({
            ...coment,
            comentario: e.target.value,
        })
        console.log(coment)
    }


    const handleSubmit = async() => {
        try {
            if(archivoLocal) {
                console.log(archivoLocal)

                await subirArchivo();

                if(urlDescarga) {
                    setArchivoLocal({
                        ...coment,
                        adjuntoComentario : urlDescarga
                    })
                }

                if(coment.adjuntoComentario) {

                    let nuevosComentarios = [...despacho.comentarios, coment];

                    const asignarAdjunto = () => {

                        console.log('hola',coment)
                        despacho.comentarios = nuevosComentarios;
                        console.log(despacho.comentarios)
                    }

                    await asignarAdjunto();

                    await updateDoc(doc(db, `despachos/${enlaceID}`), despacho);

                }



                

                

                /* await updateDoc(doc(db, `despachos/${enlaceID}`), despacho.comentarios); */

            } 

           

            
            
        } catch (error) {
            console.log(error)
        }

        setOpen(false)

        console.log(despacho)
        
    }

    return (
        <>
        <button className="m-2 text-1xl mt-4 uppercase max-w-lg text-gray-600" onClick={() => {setOpen(true)}}>
            Agregar Comentario <FontAwesomeIcon className="text-2xl mt-4 text-gray-600" icon={faComments} />
        </button>
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto"  onClose={setOpen}>
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

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
            </span>
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
                        <AnnotationIcon className="h-8 w-8 text-orange-400 " aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium uppercase mb-5 text-gray-900">
                        Agrega un Comentario
                        </Dialog.Title>

                        <div className="mt-2 border border-gray-150">
                            <textarea 
                                className=' block w-full h-40 p-3 ' 
                                name="comentario" 
                                id="comentario" 
                                value={comentario}
                                onChange={handleComentario}
                                cols="40" 
                                rows="20">
                            </textarea>
                        </div>

                        <div className='mt-4'>
                            <input 
                            type="file"
                            onChange={leerArchivo}
                            className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-orange-700
                            hover:file:bg-violet-100"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row inline-flex justify-between">
                    <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md
                     border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white 
                      hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 
                      sm:w-auto sm:text-sm"
                      onClick={handleSubmit}
                    
                    >
                    Agregar Comentario
                    </button>
                    <button
                    type="button"
                    className="mt-3 w-full  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    >
                    Cancel
                    </button>
                </div>
                </div>
            </Transition.Child>
            </div>
        </Dialog>
        </Transition.Root>
            
        </>
    )
}

export default NuevoComentario
