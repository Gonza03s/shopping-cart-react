import {useState,useEffect} from "react";

import { ProductsContext } from "./ProductsContext";

export const ProductosProvider = ({ children }) => 
{


  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => 
  {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (Array.isArray(data)) {
        setProductos(data);
      } else {
        console.error("La respuesta de la API no es un array:", data);
      }
    } 
    catch (e) 
    {
      console.error('ha ocurrido el siguiente error', error)
      setProductos([]);
    }

   
  };

  useEffect(() => {
    fetchProductos();
  }, []);


  return (
    <ProductsContext.Provider value={{productos}}>
      {children}
    </ProductsContext.Provider>
  );
};
