import moment from "moment";

moment.locale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
}
);

const Comentarios = ({ comentario }) => {

  moment.locale('es');

  



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
                  <p className="uppercase ">{comentario.creador.nombre}</p><p className="lowercase font font-extralight">{moment(comentario.creado).format('Do MMMM  YYYY, h:mm:ss a')}</p></div>
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
