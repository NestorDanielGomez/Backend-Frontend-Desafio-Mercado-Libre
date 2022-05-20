import React from "react";
import ItemDetail from "./ItemDetail";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
const ItemDetailContainer = () => {
  const producto = useSelector((state) => state.productos.productos);
  console.log("producto aca", producto);
  return (
    <Container className="item_list_container">
      <ItemDetail producto={producto} />
    </Container>
  );
};

export default ItemDetailContainer;
