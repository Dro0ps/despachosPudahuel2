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

import Pendientes from './pages/Pendientes';
import Despachados from './pages/Despachados';
import Confirmados from './pages/Confirmados';
import Entregados from './pages/Entregados';
import Productos from './pages/Productos';
import VistaProducto from './components/VistaProducto';




const auth = getAuth(db);



 const firestore = getFirestore(db);


function App() {

  /* console.log(import.meta.env); */

  const [usuarioGlobal, setUsuarioGlobal] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  


  const obtenerUser = async(uid) => {
    try {
      const docuRef = doc(firestore, `usuarios/${uid}`);
      const docuCifrada = await getDoc(docuRef);
      const infoUser = docuCifrada.data();
      return infoUser;
    } catch (error) {
      console.error('Error obteniendo usuario:', error);
      return null;
    }
  }

  const setUserWithFirebaseAndRolAndName = async(usuarioFirebase) => {
    try {
      const usuario = await obtenerUser(usuarioFirebase.uid);
      if (usuario) {
        const userData = {
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          rol: usuario.rol,
          nombre: usuario.nombre
        };
        setUser(userData);
      }
    } catch (error) {
      console.error('Error configurando usuario:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
      try {
        if (usuarioFirebase) {
          await setUserWithFirebaseAndRolAndName(usuarioFirebase);
          setUsuarioGlobal(true);
        } else {
          setUser(null);
          setUsuarioGlobal(false);
        }
      } catch (error) {
        console.error('Error en autenticación:', error);
        setUsuarioGlobal(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

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
              <Route path="nuevo" element={<NuevoDespacho usuario={user}/>}/>
              <Route path="listado" element={<Listado usuario={user}/>}/>
              <Route path="despachados" element={<Despachados/>}/>
              <Route path="productos" element={<Productos usuario={user}/>}/>
              <Route path="entregados" element={<Entregados/>}/>
              <Route path="confirmados" element={<Confirmados/>}/>
              <Route path="editar/:id" element={<EditarDespacho/>}/>
              <Route path=":id" element={<VerDespacho usuario={user} />}/>
              <Route path="productos/:id" element={<VistaProducto/>}/>
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
