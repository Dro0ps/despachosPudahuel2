import React, { useState, useEffect } from "react";
/* import Despacho from '../components/Despacho'; */
import {
  collection,
  query,
  getDocs,
  getFirestore,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import DataTable from "react-data-table-component";
import { Component } from "react/cjs/react.production.min";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import FormularioProducto from "../components/FormularioProducto";
import VistaProducto from "../components/VistaProducto";
import clienteAxios from "../config/axios";

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
`;

moment.locale("es", {
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
  monthsShort:
    "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
});

const firestore = getFirestore(firebaseApp);

const Productos = ({ usuario }) => {
  const [formulario, setFormulario] = useState(false);

  

  const formSubmit = () => {
    setFormulario(!formulario);
  };

  moment.locale("es");

  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const obtenerProductosApi = async () => {
      try {
        //Como llamar documentos y listarlos en Firebase IMPORTANTE
        const q = query(collection(firestore, "productos"));
        const querySnapshot = await getDocs(q);

       

        const resultado = [];

        querySnapshot.forEach((doc) => {
          /* console.log(doc.id, "=>", doc.data()); */
          resultado.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setProductos(resultado);

        if (productos) {
          setPending(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const escucha = query(collection(firestore, "productos"));
    onSnapshot(escucha, () => {
      obtenerProductosApi();
      /* console.log("los datos son: ",result.join(", "))
       */
    });
    obtenerProductosApi();
  }, []);

  const handleEliminar = async (id) => {
    try {
      await deleteDoc(doc(firestore, `productos/${id}`));

      // Elimina del state el despacho eliminado de la api y lo actualiza
      // llama todos los productos que sean diferentes al id seleccionado para eliminarlo del state
      const arrayDespachos = productos.filter((despacho) => despacho.id !== id);
      setProductos(arrayDespachos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = (column, sortDirection) =>
    console.log(column.selector, sortDirection);

  const columnas = [
    {
      name: <Encabezado>Imagen</Encabezado>,
      selector: (row) => (
        <Boton onClick={() => navigate(`/despachos/productos/${row.id}`)}>
          <img className="w-20 h-20" src={row.imagen} />
        </Boton>
      ),
      sortable: false,
      grow: 0.5,
      wrap: true,
    },

    {
      name: <Encabezado>Codigo</Encabezado>,
      selector: (row) => row.cod_interno,
      cell: (row) => (
        <Boton onClick={() => navigate(`/productos/${row.id}`)}>
          {row.cod_interno}
        </Boton>
      ),
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: <Encabezado>Nombre del Producto</Encabezado>,
      selector: (row) => (
        <p className=" font-bold text-black-900 uppercase">
          {row.nombre_producto}
        </p>
      ),
      sortable: true,
      grow: 3,
      wrap: true,
    },
    {
      name: <Encabezado>Categoria</Encabezado>,
      selector: (row) => row.categoria,
      sortable: false,
      grow: 1,
      wrap: true,
    },
  ];

  /*****************************************************/

  const pagOpciones = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: " de ",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  /*****************************************************/

  /**************** COMPONENTE DE TABLA ****************/
  class Tabla extends Component {
    //Buscador
    state = {
      busqueda: "",
      productos: [],
    };

    onChange = async (e) => {
      e.persist();
      await this.setState({ busqueda: e.target.value });
      this.filtrarElementos();
    };

    filtrarElementos = () => {
      var search = productos.filter((item) => {
        if (
          item.cod_interno
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(this.state.busqueda) ||
          item.nombre_producto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(this.state.busqueda) ||
          item.categoria
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(this.state.busqueda)
        ) {
          return item;
        }
      });
      this.setState({ productos: search });
    };

    componentDidMount() {
      this.setState({ productos: productos });
    }

    render() {
      return (
        <>
          <button type="submit" onClick={formSubmit}>
            {formulario ? "Listado de Productos" : "Agregar Productos"}
          </button>

          {formulario ? (
            <FormularioProducto setFormulario={setFormulario} />
          ) : (
            <>
              <Encabezado>Filtrar resultados</Encabezado>
              <input
                type="text"
                placeholder="Buscar"
                className=" sm:flex items-center w-72 text-left space-x-3 px-4 h-12 
                                bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 
                                focus:outline-none focus:ring-2 focus:ring-sky-500 
                                shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 
                                dark:ring-0 dark:text-slate-300 dark:highlight-white/5 
                                dark:hover:bg-slate-700 mb-5"
                name="busqueda"
                value={this.state.busqueda}
                onChange={this.onChange}
              />

              <DataTable
                expandibleRows
                columns={columnas}
                data={this.state.productos}
                pagination
                paginationComponentOptions={pagOpciones}
                fixedHeader
                fixedHeaderScrollHeight="1000px"
                progressPending={pending}
                noDataComponent={<p>No se encontro ningún elemento</p>}
                onSort={handleSort}
              />
            </>
          )}
        </>
      );
    }
  }

  /************* FIN DE COMPONENTE DE TABLA *************/

  return (
    <>
      <h1 className="font-extrabold max-h-full  text-4xl flex justify-center text-orange-700 mb-12 mt-4">
        Listado de Productos
      </h1>

      <Tabla />
    </>
  );
};

export default Productos;
