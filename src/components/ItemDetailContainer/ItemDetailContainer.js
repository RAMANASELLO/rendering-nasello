import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../ItemListContainer/mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";
import {db} from "../../utils/firebase";
import {doc,getDoc} from "firebase/firestore"

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [items, setItems] = useState();

  useEffect(() => {
    const getProducto=async() =>{
      //creamos la referencia del producto 
      const queryRef= doc(db, "items",productId)
      //hacemos la solicitud
      const response= await getDoc(queryRef);
      const newItem= {
        id:response.id,
        ...response.data()
      }
      setItems(newItem); 
    }
      getProducto();
        
    }, [productId]);


return(
    <div>
        <ItemDetail {...items}/>
    </div>
)
}

export default ItemDetailContainer




  // const getData = (id) => {
  //   return new Promise((resolve, reject) => {
  //     const producto = data.find((item) => item.id === parseInt(id));

  //     setTimeout(() => {
  //       resolve(data);
  //     },);
  //   });
  // };

  // useEffect(() => {
  //   getData(productId).then((data) => {
  //     setItems(data);
  //   });
  // }, [productId, items]);

//   return (
//     <div>
//       <ItemDetail productos={items} productId={productId} />
//     </div>
//   );
// };

// export default ItemDetailContainer;