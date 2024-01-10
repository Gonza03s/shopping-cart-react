import { CarritoContext } from "./CarritoContext";
import {useReducer} from 'react'

const initialState = [];

export const CarritoProvider = ({ children }) => 
{

    const comprasReducer = (state = initialState, action={}) =>
    {
        switch(action.type)
        {
            case '[COMPRAS] agregarCompra':
            return [...state, action.payload];
            case '[COMPRAS] aumentarCantidad':
            return state.map((item)=>
            {
              const cant = item.cantidad + 1
              if(item.id == action.payload) return {...item, cantidad: cant}
              return item
            })
            
            case '[COMPRAS] DisminuirCantidad':
            return state.map((item)=>
            {
              const cant = item.cantidad - 1
              if(item.id == action.payload && item.cantidad > 1) return {...item, cantidad: cant}
              return item 
            })
    
            case '[COMPRAS] EliminarCompra':
            return state.filter((compra)=> compra.id !== action.payload);
        }
    }


  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    compra.cantidad = 1;
    const action = {
      type: "[COMPRAS] agregarCompra",
      payload: compra,
    };

    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[COMPRAS] aumentarCantidad",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[COMPRAS] DisminuirCantidad",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[COMPRAS] EliminarCompra",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider value={{listaCompras,agregarCompra,aumentarCantidad,disminuirCantidad,eliminarCompra}}>
      {children}
    </CarritoContext.Provider>
    
    )
};
