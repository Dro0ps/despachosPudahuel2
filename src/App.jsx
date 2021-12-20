import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IniciarSesion from './layout/IniciarSesion';
import Layout from './layout/Layout';
import EditarDespacho from './pages/EditarDespacho';
import VerDespacho from './pages/VerDespacho';
import Inicio from './pages/Inicio';
import LoginForm from './pages/LoginForm';
import NuevoDespacho from './pages/NuevoDespacho';



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        {/********************************************************************/}
        <Route path="/" element={<IniciarSesion/>}>
        <Route index element={<LoginForm/>}/>

        </Route>
        {/********************************************************************/}
        <Route path="/despachos" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="nuevo" element={<NuevoDespacho/>}/>
          <Route path="editar/:id" element={<EditarDespacho/>}/>
          <Route path=":id" element={<VerDespacho/>}/>

        </Route>
        {/********************************************************************/}


        
        



      </Routes>
    </BrowserRouter>
  )
}

export default App
