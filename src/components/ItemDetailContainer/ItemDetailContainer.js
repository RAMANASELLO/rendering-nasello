import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../ItemListContainer/mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [items, setItems] = useState(null);

  const getData = (id) => {
    return new Promise((resolve, reject) => {
      const producto = data.find((item) => item.id === parseInt(id));

      setTimeout(() => {
        resolve(data);
      },);
    });
  };

  useEffect(() => {
    getData(productId).then((data) => {
      setItems(data);
    });
  }, [productId, items]);

  return (
    <div>
      <ItemDetail productos={items} productId={productId} />
    </div>
  );
};

export default ItemDetailContainer;