
import Formulario from '../components/Formulario'



const NuevoDespacho = (usuario) => {
    return (
        <>
            <h1 className='font-extrabold text-4xl flex justify-center text-orange-900'>Nuevo Despacho</h1>

            <Formulario
                usuario={usuario}
            />
            
        </>
    )
}

export default NuevoDespacho
