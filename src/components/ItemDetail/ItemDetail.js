import { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../CartContext/CartContext";
import { useState, useContext } from "react";


export const ItemDetail = ({ id, name, price, image, category, description }) => {
  const {addItem}=useContext(CartContext)
  const [producto, setProducto] = useState();


  const onAdd=(contador) =>{
    console.log(`Recibo ${contador}`)
  

  const productToAdd = {
    id,
    name,
    price,
    image,
    category,
    description,
  }

  if (contador>0) {
    addItem(productToAdd, contador)
  };
};

return (
  <div>
    <div>
      <h1>{id}</h1>
      <div>{name}</div>
      <div>{producto?.price}</div>
      <img src={producto?.image} alt="" />
      <h1>{category}</h1>
      <div>{producto?.description}</div>
    </div>
     <p>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </p>
  </div>
);
};

export default ItemDetail;