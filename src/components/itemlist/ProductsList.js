import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, GetProducts } from "../../redux/slices/products";
import ic_shipping from "../../assets/ic_shipping.png";

const ProductsList = () => {
  let estadoparacargar = useSelector(GetProducts);

  const { items, categories } = estadoparacargar;
  const dispatch = useDispatch();
  const DefaultSearch = "celular";

  useEffect(() => {
    dispatch(fetchAsyncProducts(DefaultSearch));
  }, [dispatch]);

  return (
    <Container className="item_list_container">
      {!estadoparacargar.items ? (
        <Alert variant="success text-center fs-4">CARGANDO PRODUCTO</Alert>
      ) : (
        <>
          <Row className="itemlist">
            {!categories ? (
              <p className="breadCrumb"> Inicio &gt; Categoria General</p>
            ) : (
              <p className="breadCrumb">
                Inicio &gt; {estadoparacargar.categories[0].name}
              </p>
            )}
          </Row>

          <Row className="item_container">
            {items.map((product, index) => {
              return (
                <Row className="item_container" key={index}>
                  <div className="item">
                    <NavLink to={`/items/${product.id}`}>
                      <img
                        src={product.picture}
                        alt={product.title}
                        className="imagen w-100"
                      />
                    </NavLink>
                    <div className="item_detail">
                      <div className="item_price">
                        <h3 className="price">
                          $ {product.price.amount}
                          <span className="ms-2">
                            {product.free_shipping ? (
                              <img
                                src={ic_shipping}
                                alt={product.title}
                                height="25"
                              />
                            ) : (
                              <span></span>
                            )}
                            {/*  */}
                          </span>
                        </h3>
                        <p className="location">Capital Federal</p>
                      </div>

                      <p className="description">{product.title}</p>
                      <p className="description">{product.condition}</p>
                    </div>
                  </div>
                </Row>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductsList;
