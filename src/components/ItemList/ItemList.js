import Item from "../Item/Item";

export const ItemList = ({ itemsList }) => {
  return (
    <>
      {itemsList &&
        itemsList.map((producto, i) => {
          return (
            <Item
              name={producto.name}
              description={producto.description}
              price={producto.price}
              image={producto.image}
              id={producto.id}
            />
          );
        })}
    </>
  );
};

export default ItemList;