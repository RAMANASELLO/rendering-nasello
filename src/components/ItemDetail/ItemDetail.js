import { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../CartContext/CartContext";
import { useState, useContext } from "react";


const ItemDetail = ({ productos, productId }) => {
  const {addItem}=useContext(CartContext)
  const [producto, setProducto] = useState(null);


  const onAdd=(contador) =>{
    console.log(`Recibo ${contador}`)
    console.log("producto", producto)
    addItem(producto, productId, contador)
  } 


  useEffect(() => {
    let prod;
    if (productos) {
      prod = productos?.filter((item) => item.id === Number(productId));
      setProducto(prod[0]);
    }
  }, [productos]);

  return (

    <div>
      <p>
        <img src={producto?.image} alt="" />
        <h1>{producto?.name}</h1>
        <p>{producto?.description}</p>
        <p>{producto?.price}</p>
      </p>

       <p>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </p>
    </div>
  );
};

export default ItemDetail;