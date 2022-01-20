import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

import db from "../firebase/credenciales";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
import Swal from "sweetalert2";


const auth = getAuth(db);

const LoginForm = ({ usuario }) => {
  const firebaseApp = getFirestore(db);

  const [isRegister, setIsRegister] = useState(false);
  const [errorSesion, setErrorSesion] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
    nombre: "",
    rol: "",
  });

  const { email, password, nombre, rol } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registrarUsuario = async (email, password, nombre, rol) => {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docuRef = await doc(firebaseApp, "usuarios", infoUsuario.user.uid);
    await setDoc(docuRef, { nombre: nombre, rol: rol, email: email });
  };

  async function submitHandler(e) {
    e.preventDefault();

    if (isRegister) {
      registrarUsuario(email, password, nombre, rol);
    } else {
      
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          // Signed in
          setErrorSesion(null)
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          if( errorCode === 'auth/wrong-password' || 'auth/user-not-found') {
            setErrorSesion('Usuario o Contraseña Incorrecta')
          }
          if( errorCode === 'auth/too-many-requests') {
            setErrorSesion('Demasiados Intentos Erroneos, Usuario Bloqueado!!!')
          }
          /* console.log(errorCode, 'Hola', errorMessage) */
        })


    }
  }

  const activaRegistro = () => {
    if (!isRegister) {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  };

  return (
    <>
  
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-auto w-auto"
                src="https://homar.cl/wp-content/uploads/2020/09/logo-homar.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {!isRegister ? "Inicia Sesión" : "Registrate"}
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={submitHandler}>
              <div className="rounded-md shadow-sm -space-y-px">
                {isRegister && (
                  <div>
                    <input
                      id="nombre"
                      name="nombre"
                      value={nombre}
                      type="text"
                      autoComplete="nombre"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                      border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
                      focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                      placeholder="Nombre de Usuario"
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border
                    border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
                    focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Correo"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                            placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 
                            focus:border-orange-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  {errorSesion && <p className=" font-bold  text-red-600 text-center">{errorSesion}</p>}
                </div>
                
                <div>
                  {isRegister && (
                    <select
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 
                              placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                              focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                      name="rol"
                      id="rol"
                      value={rol}
                      onChange={handleChange}
                    >
                      <option value="">-- Seleccione Rol del Usuario --</option>
                      <option value="vendedor">vendedor</option>
                      <option value="bodega">bodega</option>
                    </select>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent 
                          text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                      aria-hidden="true"
                    />
                  </span>
                  {!isRegister ? "Iniciar Sesión" : "Registrarse"}
                </button>

                <div className=" mt-4">
                  {!isRegister ? (
                    <button onClick={activaRegistro}>
                      ¿Quieres Registrarse?
                    </button>
                  ) : (
                    <button onClick={activaRegistro}>
                      ¿Quieres Iniciar Sesión?
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      
    </>
  );
};

export default LoginForm;
