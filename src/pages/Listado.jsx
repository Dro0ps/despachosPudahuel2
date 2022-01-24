import React, { useState, useEffect } from 'react'
/* import Despacho from '../components/Despacho'; */
import { collection, query, getDocs, getFirestore, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import firebaseApp from '../firebase/credenciales';
import DataTable from 'react-data-table-component';
import { Component } from 'react/cjs/react.production.min';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import EditarDespacho from './EditarDespacho';



const Encabezado = styled.p`
    color: #bd4f23;
    font-weight: bold;
    font-size: 15px;
`;

const Boton = styled.button`
    padding-right: 5px
    font-size: 15px;
    font-weight: 900;
    border-radius: 5px;
    border: none;
    transition: background-color .3s ease;
`

moment.locale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
  );


const firestore = getFirestore(firebaseApp);

const Listado = ({usuario}) => {

    moment.locale('es');

    
   
    const navigate = useNavigate();

    const [despachos, setDespachos] = useState([]);
    const [pending, setPending] = useState(true)


    useEffect(() => {
        const obtenerDespachosApi = async () => {
            try {
                //Como llamar documentos y listarlos en Firebase IMPORTANTE
                const q = query(collection(firestore,"despachos"));
                const querySnapshot = await getDocs(q);
                
                const resultado = [];

                querySnapshot.forEach((doc) => {
                    /* console.log(doc.id, "=>", doc.data()); */
                    resultado.push({
                        id: doc.id,
                        ...doc.data()
                    })
                    
                })

                setDespachos(resultado);

                if(despachos) {
                    setPending(false);
                }

            } catch (error) {
                console.log(error)
            }
        }
        const escucha = query(collection(firestore,"despachos"))
        onSnapshot(escucha,(querySnapshot) => {
            const result = [];
            querySnapshot.forEach((doc) => {
                result.push(doc.data());
            })
            obtenerDespachosApi();

            /* console.log("los datos son: ",result.join(", "))
            */
        })
        obtenerDespachosApi();
    }, [])

    const handleEliminar = async id => {
        
            try {
                await deleteDoc(doc(firestore, `despachos/${id}`))

                // Elimina del state el despacho eliminado de la api y lo actualiza
                // llama todos los despachos que sean diferentes al id seleccionado para eliminarlo del state
                const arrayDespachos = despachos.filter( despacho => despacho.id !== id )
                setDespachos(arrayDespachos);
                
            } catch (error) {
                console.log(error);
            }
        
    }

    

    const columnas = [
        
        {
            name: <Encabezado>N° Doc</Encabezado>,
            selector: row => row.documento,
            cell: row => <Boton  onClick={() => navigate(`/despachos/${row.id}`)}>{row.documento}</Boton>,
            sortable: true,
            grow: 0,
            wrap: true

        },
        {
            name: <Encabezado>Nombre del Cliente</Encabezado>,
            selector: row => <p className=' font-bold text-black-900 uppercase'>{row.nombre}</p>,
            sortable: true,
            grow: 0.6,
            wrap: true

        },
        {
            name: <Encabezado>Dirección</Encabezado>,
            selector: row => row.direccion,
            sortable: false,
            grow: 1,
            wrap: true

        },
        
        {
            name: <Encabezado>Detalles</Encabezado>,
            selector: row => row.notas,
            sortable: false,
            grow: 2,
            wrap: true,
            

        },
        {
            name: <Encabezado>Creado</Encabezado>,
            selector: row => <p className=' font-bold text-black-900'>{row.creador.usuario.nombre}  
            <span className=' font-light'>{' el '}{moment(row.creado).format('Do MMMM  YYYY, h:mm:ss a')}</span></p>,
            sortable: true,
            omit: false,
            wrap: true,

        },
        {
            name: <Encabezado>Estado</Encabezado>,
            selector: row => {row.recibido, row.despachado, row.confirmado},
            ////////////////////////////////////////////////////////
            cell: row => <div>{row.confirmado ? <button >Confirmado</button> : 
            <div>{ row.despachado ? <p>Despachado</p> : 
            <div>{ row.recibido ? <p>Recibido</p> : 
            <p>Pendiente</p>}</div>}</div>}</div>,
            ///////////////////////////////////////////////////////
            sortable: true,
            grow: 0.5,
            wrap: true,

        },

        {
            name: <Encabezado>Acciones</Encabezado>,
            cell: row => <div>
            {<Boton onClick={() => {navigate(`/despachos/editar/${row.id}`)}}>Editar</Boton>}

            { (usuario.rol === 'admin') && <Boton  
                onClick={ () =>{
                    if ( row.despachado=== true){
                        Swal.fire({
                            title: 'NO SE DEBEN ELIMINAR REGISTROS YA DESPACHADOS!',
                            text: "¿ESTAS SEGURO?",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si, Eliminalo!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Estas seguro?',
                                    text: `Deseas Eliminar el Registro ${row.documento} ?`,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Si, Estoy Seguro'
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                        handleEliminar(row.id)
                                        Swal.fire(
                                            `Registro #${row.documento}`,
                                            'Ha sido eliminado.',
                                            'success'
                                          )
                                          
                                    }
                                  })
                            }
                          })
                    } else {
                        Swal.fire({
                            title: 'Estas seguro?',
                            text: `Deseas Eliminar el Registro ${row.documento} ?`,
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si, Estoy Seguro'
                          }).then((result) => {
                            if (result.isConfirmed) {
                                handleEliminar(row.id)
                                Swal.fire(
                                    `Registro #${row.documento}`,
                                    'Ha sido eliminado.',
                                    'success'
                                  )
                                  
                            }
                          })

                    }

                   
                    
                }}
            
            >Eliminar</Boton>}

            </div>
            
            ,
            sortable: false,
            grow: 0,
            wrap: true

        },
        
        
        
    ];

    /*****************************************************/

    const pagOpciones = {
        rowsPerPageText: 'Filas por pagina',
        rangeSeparatorText: ' de ',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos'
    }

    /*****************************************************/

    /**************** COMPONENTE DE TABLA ****************/
    class Tabla extends Component{
        
        //Buscador
        state={
            busqueda:'',
            despachos: [],
        }

        onChange= async e=>{
            e.persist();
            await this.setState({busqueda: e.target.value});
            this.filtrarElementos();
        }

        filtrarElementos=()=>{
            var search=despachos.filter(item=>{
                if(
                item.nombre.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
                item.direccion.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
                item.documento.toString().includes(this.state.busqueda) ||
                item.notas.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda)
                
                
                
                
                ){
                    return item;
                }
                
            });
            this.setState({despachos: search});
        }

        componentDidMount(){
            this.setState({despachos: despachos });
        }

        

        render(){
            return (
                <>
                    {/* Campo BUSCADOR */}
                        
                        <Encabezado>Filtrar resultados</Encabezado>
                        <input
                                type="text"
                                placeholder="Buscar"
                                className=" mb-3 mt-3  pl-7 pr-12  "
                                name="busqueda"
                                value={this.state.busqueda}
                                onChange={this.onChange}
                            />
                
                    {/* MUESTRA TABLA */}
                    
                        <DataTable
                            expandibleRows
                            columns={columnas}
                            data={this.state.despachos}
                            pagination
                            paginationComponentOptions={pagOpciones}
                            fixedHeader
                            fixedHeaderScrollHeight="1000px"
                            progressPending={pending}
                            noDataComponent={<p>No se encontro ningún elemento</p>}
  
                        />
                   
                </>
            )
        }
    }

    /************* FIN DE COMPONENTE DE TABLA *************/

    return (
        <>
            <h1 className='font-extrabold text-4xl flex justify-center text-orange-900'>Listado de despachos</h1>
            
            <Tabla />
            
        </>
    )
}

export default Listado
