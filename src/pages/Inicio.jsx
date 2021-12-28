import React, { useState, useEffect } from 'react'
/* import Despacho from '../components/Despacho'; */
import { collection, query, getDocs, getFirestore, doc, deleteDoc } from "firebase/firestore";
import firebaseApp from '../firebase/credenciales';
import DataTable from 'react-data-table-component';
import { Component } from 'react/cjs/react.production.min';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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




const db = getFirestore(firebaseApp);

const Inicio = () => {

    

    const navigate = useNavigate();

    const [despachos, setDespachos] = useState([]);
    const [pending, setPending] = useState(true)


    useEffect(() => {
        const obtenerDespachosApi = async () => {
            try {
                //Como llamar documentos y listarlos en Firebase IMPORTANTE
                const q = query(collection(db,"despachos"));
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
        obtenerDespachosApi();
    }, [])

    const handleEliminar = async id => {
        const confirmar = confirm('¿Deseas eliminar este cliente?')

        if(confirmar) {
            try {
                await deleteDoc(doc(db, `despachos/${id}`))

                // Elimina del state el despacho eliminado de la api y lo actualiza
                // llama todos los despachos que sean diferentes al id seleccionado para eliminarlo del state
                const arrayDespachos = despachos.filter( despacho => despacho.id !== id )
                setDespachos(arrayDespachos);
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    /* onClick={() => {navigate(`/despachos/editar/${id}`)}} */


    const columnas = [
        {
            name: <Encabezado>Creado</Encabezado>,
            selector: row => row.creado,
            sortable: true,
            omit: true,
            wrap: true

        },
        {
            name: <Encabezado>N° Doc</Encabezado>,
            selector: row => row.documento,
            cell: row => <Boton  onClick={() => navigate(`/despachos/${row.id}`)}>{row.documento}</Boton>,
            sortable: false,
            grow: 0,
            wrap: true

        },
        {
            name: <Encabezado>Nombre del Cliente</Encabezado>,
            selector: row => row.nombre,
            sortable: false,
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
            name: <Encabezado>Estado</Encabezado>,
            selector: row => {row.recibido, row.despachado, row.confirmado},
            ////////////////////////////////////////////////////////
            cell: row => <div>{row.confirmado ? <p>Confirmado</p> : 
            <div>{ row.despachado ? <p>Despachado</p> : 
            <div>{ row.recibido ? <p>Recibido</p> : 
            <p>Pendiente</p>}</div>}</div>}</div>,
            ///////////////////////////////////////////////////////
            sortable: false,
            grow: 0,
            wrap: true,
            

        },

        {
            name: <Encabezado>Acciones</Encabezado>,
            cell: row => <Boton  onClick={() => {navigate(`/despachos/editar/${row.id}`)}}>Editar</Boton>,
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
            

            {/* <table className='w-full mt-5 table-auto shadow bg-white '>
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
            </table>    */}         


            <Tabla />
            
        </>
    )
}

export default Inicio
