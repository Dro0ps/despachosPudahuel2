

const Comentarios = ({ comentario }) => {
  

  



  return (
    <>
    {/* <div className=" mt-2 pl-5 flex items-center ">
          <ul>
            <li class="  p-3 border rounded-md text-gray-dark mb-2 font-medium text-black"><span>{comentario.creador}: </span>{comentario.comentario}</li>
          </ul>
    </div> */}

    <div className="card border rounded-lg p-2 mt-2">
            <div className="card-body flex items-top">
              <div className="leading-none flex-1">
                <div className="card-header__title  flex justify-between  mb-3 font font-extrabold tracking-tight text-gray-500  ">
                  <p className="uppercase ">{comentario.creador.nombre}</p><p className="lowercase font font-extralight">creado: {comentario.creado}</p></div>
                <div className="flex items-center">
                  <div className="font-semibold text-gray-500 p-">{comentario.comentario} </div>
                </div>
              </div>    
              
            </div>
            
          </div>
    </>
  );
};

export default Comentarios;
