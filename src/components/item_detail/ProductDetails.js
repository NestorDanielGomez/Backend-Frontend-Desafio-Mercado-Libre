import React, { useEffect } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncProductDetail,
  GetSelectedProduct,
  removeSelectedProduct,
} from "../../redux/slices/products";
import ic_shipping from "../../assets/ic_shipping.png";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let dataProduct = useSelector(GetSelectedProduct);

  const dispatch = useDispatch();
  const { idProduct } = useParams();

  useEffect(() => {
    dispatch(fetchAsyncProductDetail(idProduct));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, idProduct]);

  return (
    <Container className="item_list_container">
      {Object.keys(dataProduct).length === 0 ? (
        <Alert variant="success text-center fs-4">CARGANDO PRODUCTO</Alert>
      ) : (
        <>
          <Row className="itemlist RowClass">
            <Row>
              <p className="breadCrumb">
                Producto &gt; {dataProduct.item.title}
              </p>
            </Row>
            <Row>
              <Row className="itemContainer justify-content-between RowClass">
                <Col lg={7} xs={12} className="order-2 order-lg-1 ">
                  <div className="text-center">
                    <img
                      className="ms-lg-3 imagen img-fluid"
                      src={dataProduct.item.picture}
                      alt={dataProduct.item.title}
                    />
                  </div>

                  <h3 className="description">Descripcion del producto</h3>
                  <h4 className="description_detail">
                    {dataProduct.description}
                  </h4>
                </Col>
                <Col
                  lg={4}
                  xs={12}
                  className="detail_product order-lg-2 mb-4 mb-lg-0"
                >
                  <p className="state_stock">
                    {dataProduct.item.condition} -{" "}
                    <span>{dataProduct.item.sold_quantity} vendidos</span>
                  </p>
                  <p className="product">{dataProduct.item.title}</p>
                  <h2 className="price">
                    $ {dataProduct.item.price.amount}
                    <span className="ms-4">
                      {dataProduct.item.free_shipping ? (
                        <img
                          src={ic_shipping}
                          alt={dataProduct.item.title}
                          height="25"
                        />
                      ) : (
                        <span></span>
                      )}
                      {/*  */}
                    </span>
                  </h2>
                  <Button className="w-100">Comprar</Button>
                </Col>
              </Row>
            </Row>
          </Row>
        </>
      )}
    </Container>
  );
};
export default ProductDetails;
