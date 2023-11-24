import React, { useState } from 'react'
import { AiTwotoneShop } from "react-icons/ai";

const Card = (props) => {
    const {produc}=props;

  return (
    <div>
      {produc.map((produc,index)=>(
            <div className="col">
            <div className="card shadow-sm">
             <img width="100%" height="225" src={produc.img}></img>
              <div className="card-body">
                <p className="card-text">{produc.tittle}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-warning"><AiTwotoneShop/> </button>
                    <small>Agregar al carrito</small>
                  </div>
                  <p className="text-body-danger">{produc.precio}</p>
                </div>
              </div>
            </div>
          </div>
      ))};
  

    </div>
  )
}

export default Card
