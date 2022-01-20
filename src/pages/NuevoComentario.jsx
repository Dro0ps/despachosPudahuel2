import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AnnotationIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';

/////// FIREBASE //////
import firebaseApp from '../firebase/credenciales';
import { getFirestore, updateDoc, doc} from 'firebase/firestore';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { uid } from 'uid';
import Swal from 'sweetalert2';
import Comentarios from './Comentarios';
import Spinner from '../components/Spinner';


const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


const NuevoComentario = ({despacho, enlaceID, usuario}) => {


    

    //////// MANEJO DE ARCHIVOS //////
    let urlDescarga; 
    let archivoLocal 

    const fileHandler = async e => {
        // detectar archivo
        archivoLocal = e.target.files[0];
    }


            
        

        

    
        
    
    

    return (
        <>
        <h1>Holas</h1>

        <Formik
            initialValues={{
                id: uid(),
                comentario: '',
                creador: usuario,
                adjunto:'',
                creado: +new Date()
            }}
        >
            
        </Formik>
        
        
            
        </>
    )
}

export default NuevoComentario
