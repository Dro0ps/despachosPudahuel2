import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IniciarSesion from './layout/IniciarSesion';
import Layout from './layout/Layout';
import EditarDespacho from './pages/EditarDespacho';
import VerDespacho from './pages/VerDespacho';
import Inicio from './pages/Inicio';
import LoginForm from './pages/LoginForm';
import NuevoDespacho from './pages/NuevoDespacho';


import db from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from './components/Spinner';



const auth = getAuth(db);



 const firestore = getFirestore(db);





function App() {

  /* console.log(import.meta.env); */

  const [usuarioGlobal, setUsuarioGlobal] = useState(true);
  const [ user, setUser ] = useState(null);

  const obtenerUser = async(uid) => {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoUser = docuCifrada.data();
    return infoUser;
  }

  const setUserWithFirebaseAndRolAndName = async(usuarioFirebase) => {
    await obtenerUser(usuarioFirebase.uid).then((usuario) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: usuario.rol,
        nombre: usuario.nombre
      };
      setUser(userData);
    })
  }

  obtenerUser()


  

  useEffect(() => {
    onAuthStateChanged(auth,(usuarioFirebase) => {
      if (usuarioFirebase) {

        if (!user) {
           setUserWithFirebaseAndRolAndName(usuarioFirebase);
        }

        
          // Codígo en caso de que haya sesión iniciada
          setUsuarioGlobal(false);
      } else {

        setUser(null)
          // Codígo en caso de que no haya sesión iniciada
          setUsuarioGlobal(true);
      }
  })
    
  }, [])

  return (
    <>
      <BrowserRouter >
        <Routes>
          { usuarioGlobal ? 
          <>
              <Route path="/" element={<IniciarSesion/>}>
                <Route index element={<LoginForm/>}/>
              </Route>

              <Route
                path='/*'
                element={<Navigate replace to='/'/>}
              />
            </>
            :
            <>

            <Route
              path='/'
              element={<Navigate replace to='/despachos'/>}
            />
            
            <Route path="/despachos" element={<Layout />}>
              <Route index element={<Inicio/>}/>
              <Route path="nuevo" element={<NuevoDespacho/>}/>
              <Route path="editar/:id" element={<EditarDespacho/>}/>
              <Route path=":id" element={<VerDespacho usuario={user} />}/>
            </Route>

          </>

          }

        </Routes>
      </BrowserRouter>
    
    
    </>
    
  )
}

export default App
