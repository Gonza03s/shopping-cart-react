import { Cards } from "../components/Cards";
import { CarritoContext } from "../context/CarritoContext";
import { ProductsContext } from "../context/ProductsContext";
import {useContext} from 'react'

export const ComprasPage = () => {

const {productos} = useContext(ProductsContext);

const {agregarCompra,eliminarCompra} = useContext(CarritoContext);

  const handleAgregar= (compra)=>
  {
    agregarCompra(compra);
  }
  const handleQuitar= (id)=>
  {
    eliminarCompra(id);
  }

if (!Array.isArray(productos)) 
{
  return <p>Cargando productos...</p>;
}

  return (
    <>
      <h1 className='text-center py-5 text-decoration-underline'>MENU DE COMPRAS:</h1>
      

      {
      productos.map((producto) =>(
        <Cards
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar ={()=> handleAgregar(producto)}
          handleQuitar ={()=> handleQuitar(producto.id)}
        ></Cards>
      ))
      }
    </>
  );
};
