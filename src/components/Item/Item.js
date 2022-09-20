import { Link } from "react-router-dom";

export const Item = (item) => {
  return (
    <div>
      <img src={item?.image} alt="" />
      <h1>{item?.name}</h1>
      <p>{item?.description}</p>
      <p>{item?.price}</p>
      <Link to={`/item/${item?.id}`}>
        <button className="boton-ver">Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;