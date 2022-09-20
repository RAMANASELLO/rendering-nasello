import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import {Link} from 'react-router-dom'


export const CartContainer = () => {
    const {productCartList, removeItem, clear, isInCart, getTotalPrice} = useContext(CartContext)

    return (
        <div>
            {
             productCartList.length > 0 ?
            <div>
                {productCartList.map(item=>(
                    <>
                    {console.log("hola", item)}
                        <p>{item.name} - {item.quantity} - {item.price*item.quantity}</p>
                        <button onClick={()=>removeItem(item.id)}>eliminar producto</button>
                    </>
                    
                ))}
                <button onClick={clear}>Vaciar el carrito</button>
                <p>Precio total: {getTotalPrice()}</p>

            </div>
            :
            <>
                 <p> el carrito esta vacio, agrega algun producto</p>
                 <Link to="/" >
                    Dirijase al listado de productos
                 </Link>
            </>

    }  
        </div>
    )
}