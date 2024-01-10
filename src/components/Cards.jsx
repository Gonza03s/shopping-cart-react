import { useState } from "react";
import "../styles/card.css";

export const Cards = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar}) => 
{

  const [agregado, setAgregado] = useState(false);

  const clickAgregar = () => {
    handleAgregar();
    setAgregado(true);
  };
  const clickQuitar = () => {
    handleQuitar();
    setAgregado(false);
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">${precio}</p>

        {agregado ? (
          <button onClick={clickQuitar} type="button" className="boton-quitar">
            Quitar Del Carrito
          </button>
        ) : (
          <button
            onClick={clickAgregar}
            type="button"
            className="boton-agregar"
          >
            Añadir Al Carrito
          </button>
        )}
      </div>
    </div>
  );
};
