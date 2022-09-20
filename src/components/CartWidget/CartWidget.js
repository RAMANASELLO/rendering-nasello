import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'


export const CartWidget = () => {
  const{getTotalProducts}=useContext(CartContext)
    return (
      <div>
        <Link to="/cart">
          <span>
            {getTotalProducts}
          </span>
        </Link>
        
      </div>
    )
  }
  
  export default CartWidget