import React, { useState, useEffect } from 'react'
import Despacho from '../components/Despacho';



const Inicio = () => {

    const [despachos, setDespachos] = useState([]);

    useEffect(() => {
        const obtenerDespachosApi = async () => {
            try {
                const url = 'http://localhost:4000/despachos'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setDespachos(resultado)

            } catch (error) {
                console.log(error)
            }
        }

        obtenerDespachosApi();
        
    }, [])

    const handleEliminar = async id => {
        const confirmar = confirm('¿Deseas eliminar este cliente?')
        const url = `http://localhost:4000/despachos/${id}`

        if(confirmar) {
            try {
                const respuesta = await fetch(url, {
                    method: 'DELETE'
                })
                await respuesta.json()

                // Elimina del state el despacho eliminado de la api y lo actualiza
                // llama todos los despachos que sean diferentes al id seleccionado para eliminarlo del state
                const arrayDespachos = despachos.filter( despacho => despacho.id !== id )
                setDespachos(arrayDespachos);
                
            } catch (error) {
                console.log(error);
            }
        }
    }



    return (
        <>
            <h1 className='font-black text-4xl text-orange-900'>Despachos</h1>
            <p className='mt-3'>Administra tus Despachos</p>

            <table className='w-full mt-5 table-auto shadow bg-white '>
                <thead className='bg-orange-800 text-white'>
                    <tr>
                        <th className='p-2'>N°</th>
                        <th className='p-2'>Descripción</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {despachos.map( despacho => (
                        <Despacho
                            key={despacho.id}
                            despacho={despacho}
                            handleEliminar={handleEliminar}
                        />
                    ))}
                </tbody>
            </table>            
            
        </>
    )
}

export default Inicio
