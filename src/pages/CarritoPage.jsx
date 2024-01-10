import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { listaCompras,aumentarCantidad, disminuirCantidad, eliminarCompra} = useContext(CarritoContext);

  const calcularTotal = ()=>
  {
    return listaCompras.reduce( (total, item)=> total + item.price * item.cantidad, 0 ).toFixed(2)
  }

  const handleImpresion = ()=>
  {
    print();
  }


  return (
    <>
    <div className="table-responsive">
      <table className="table table-sm table-dark table-striped table-hover table-bordered  my-5">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {listaCompras.map((item) => (
            <tr key={item.id}>
              <th className='text-start'>{item.title}</th>
              <td>{item.price}</td>
              <td>

              <button  onClick={()=> disminuirCantidad(item.id)} className='btn btn-secondary btn-sm mx-1 modify'>-</button>
              <button className='btn btn-primary btn-sm  mx-1 modify '>{item.cantidad}</button>
              <button onClick={()=> aumentarCantidad(item.id)} className='btn btn-secondary btn-sm mx-1 modify'>+</button>
              
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={()=> eliminarCompra(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

            <tr>

              <th><b>TOTAL:</b></th>
              <td ></td>
              <td></td>
              <td className='text-center'>${calcularTotal()}</td>
            </tr>

        </tbody>
      </table>
      </div>

      <div className="d-grid gap-2">
        <button disabled={listaCompras < 1} onClick={handleImpresion} className="btn btn-primary">Comprar</button>
      </div>
    </>
  );
};
