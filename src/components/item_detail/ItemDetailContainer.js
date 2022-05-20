import React from "react";
import ItemDetail from "./ItemDetail";
import { Container } from "react-bootstrap";
const ItemDetailContainer = () => {
  return (
    <Container className="item_list_container">
      <ItemDetail />
    </Container>
  );
};

export default ItemDetailContainer;
