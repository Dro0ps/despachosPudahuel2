import { useEffect } from "react";



const Comentarios = ({comentario}) => {

    console.log(comentario);

    useEffect(() => {
        
    }, [])


    return (
        <div>

            <li>{comentario.comentario}</li>
            <a href={comentario.adjuntoComentario} target="_blank">Ver</a>

            
            
        </div>
    )
}

export default Comentarios
