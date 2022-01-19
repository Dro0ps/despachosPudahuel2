import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IniciarSesion from './layout/IniciarSesion';
import Layout from './layout/Layout';
import EditarDespacho from './pages/EditarDespacho';
import VerDespacho from './pages/VerDespacho';
import Listado from './pages/Listado';
import LoginForm from './pages/LoginForm';
import NuevoDespacho from './pages/NuevoDespacho';


import db from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Spinner from './components/Spinner';
import Pendientes from './pages/Pendientes';
import Despachados from './pages/Despachados';
import Confirmados from './pages/Confirmados';
import Loading from './components/Loading';



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
          setUsuarioGlobal(true);
      } else {
          setUser(null)
          // Codígo en caso de que no haya sesión iniciada
          setUsuarioGlobal(false);
      }
  })
    
  }, [])

  

  return (
    <>
    
      <BrowserRouter >
        <Routes>
          { !usuarioGlobal ? 
          <>       

              <Route path="/" element={<IniciarSesion />}>
                <Route index element={<LoginForm usuario={user}/>}/>
              </Route>

              <Route
                path='/*'
                element={<Navigate replace to='/'/>}
              />
            </>
            :
            <>

          {user ?

          <>
            <Route
              path='/'
              element={<Navigate replace to='/despachos'/>}
            />
            
            <Route path="/despachos" element={<Layout usuario={user}/>}>
              <Route index element={<Pendientes/>}/>
              <Route path="nuevo" element={<NuevoDespacho/>}/>
              <Route path="listado" element={<Listado/>}/>
              <Route path="despachados" element={<Despachados/>}/>
              <Route path="confirmados" element={<Confirmados/>}/>
              <Route path="editar/:id" element={<EditarDespacho/>}/>
              <Route path=":id" element={<VerDespacho usuario={user} />}/>
            </Route>
          
          </>

          :
          <>
          <Route path="/" element={<IniciarSesion />}>
                <Route index element={<LoginForm usuario={user}/>}/>
              </Route>

              <Route
                path='/*'
                element={<Navigate replace to='/'/>}
              />
          </>
            
            
          }

            

          </>

          }

        </Routes>
      </BrowserRouter>
    
    
    </>
    
  )
}

export default App
