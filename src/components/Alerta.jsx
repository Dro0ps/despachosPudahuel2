import React from 'react'

const Alerta = ({children}) => {
    return (
        <div>
            <div className='text-red-600 text-center font-bold'>
                {children}
            </div> 
        </div>
    )
}

export default Alerta
