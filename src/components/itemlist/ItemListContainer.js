import React from "react";
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";

const ItemListContainer = () => {
  return (
    <Container className="item_list_container">
      <ItemList />
    </Container>
  );
};

export default ItemListContainer;
