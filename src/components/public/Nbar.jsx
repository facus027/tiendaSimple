import React from 'react'
import { AiTwotoneShop } from "react-icons/ai";
import logo from '../../access/img/logo.jpg'


const Nbar = () => {
  
  return (
    <header id="hed" Class="p-3 text-bg-white">
    <div Class="container">
      <div Class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" Class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img Class="bi me-2" width="32" height="32" src={logo}></img>
        </a>

        <ul Class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" Class="nav-link px-2 text-dark">Inicio</a></li>
          <li><a href="#" Class="nav-link px-2 text-white">Categorias</a></li>
          <li><a href="#" Class="nav-link px-2 text-white">Envios</a></li>
          <li><a href="#" Class="nav-link px-2 text-white">Ubicacion</a></li>
          <li><a href="#" Class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form Class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" Class="form-control form-control-warning text-bg-warning" placeholder="¿Que estas buscando?" aria-label="Search"/>
        </form>

        <div Class="text-end">
          <button type="button" Class="btn btn-outline-light me-2"><AiTwotoneShop/></button>
          <button type="button" Class="btn btn-warning">Buscar...  </button>
        </div>
      </div>
    </div>
  </header>
  
  )
}

export default Nbar
