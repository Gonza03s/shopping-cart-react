import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { CarritoContext } from "../context/CarritoContext";
import {useContext} from 'react'

export const Navbar = () => {

  const { listaCompras} = useContext(CarritoContext);

  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark py-2">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand text-white mx-5" href="#">Carrito de compras </NavLink>
                <button className="navbar-toggler boton__responsive " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse boton_collapse_responsive mx-5 py-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-white  fs-5 text-decoration-underline">Menu</NavLink>
                        </li>
                    </ul>
                    <NavLink to='/carrito'>
                        <Badge badgeContent={listaCompras.length} color="secondary">
                            <ShoppingCartOutlined className="fs-3" color="primary" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    </>
  );
};
