import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import imagen from "../../assets/detalle.jpg";
const ItemDetail = ({ producto }) => {
  console.log("data", producto);
  const { id } = producto;
  console.log("id", id);
  return (
    <Row className="itemlist">
      <p className="path_product">{id}</p>
      <Row className="itemContainer justify-content-between">
        <Col sm={7} xs={12} className=" order-2 order-sm-1">
          <img src={imagen} alt="" className="imagen" />
          <h3 className="description">Descripcion del producto</h3>
          <h4 className="description_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis
            nisi harum rem cupiditate facilis commodi consequuntur voluptatem a
            voluptas rerum possimus, sint aspernatur, odio tempore porro
            molestias, atque laboriosam saepe quasi perferendis earum.
            Consequuntur perspiciatis beatae nostrum similique omnis eius
            necessitatibus sit neque fugit, nesciunt unde error saepe ut.
          </h4>
        </Col>
        <Col sm={4} xs={12} className="detail_product order-sm-2 mb-4 mb-sm-0">
          <p className="state_stock">Nuevo - 234 vendidos</p>
          <p className="product">Deco Reverse Sombrero Oxford</p>
          <h2 className="price">$1.980</h2>
          <Button className="w-100">Comprar</Button>
        </Col>
      </Row>
    </Row>
  );
};

export default ItemDetail;
