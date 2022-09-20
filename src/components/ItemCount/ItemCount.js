import {useState} from 'react'


const Counter = ({stock, initial, onAdd}) => {
const [contador,setContador]=useState(initial)
    const suma=() => {
        
      if (contador<stock) {
        setContador( contador + 1)
      }
    }
    const resta=() => {

      if (contador>initial) {
        setContador ( contador - 1)
      }
        
    }
  return (
      <>
        <div>Carrito</div>
        <h2>{contador}</h2>
        <button className="boton" disabled={contador>9} onClick={suma}>+</button>
        <button className="boton" disabled={contador <= 1}  onClick={resta}>-</button>
        <button
         onClick={()=>{onAdd(contador)}}
         >Agregar al carrito</button>
      </>
    

  )
}

export default Counter