import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo_meli from "../../assets/Logo_ML@2x.png";
import logo_find from "../../assets/ic_Search.png";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getProducsAction } from "../../actions/productActions";
const NavMenu = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const valuetext = e.target.value;
    console.log(valuetext);
    const cargarproducto = () => dispatch(getProducsAction());
    cargarproducto();
  };
  console.log("handlesubmit", handleSubmit);
  return (
    <Navbar className="navMenu" variant="dark">
      <Container className="">
        <NavLink to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo_meli}
              width="55"
              className="d-inline-block me-3 "
            />
          </Navbar.Brand>
        </NavLink>

        <Form className="w-100 d-inline-flex " onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Nunca dejes de buscar"
            className="d-flex text_find"
            aria-label="Search"
            id="searchBar"
          />
          <Button className="btn_find">
            <img src={logo_find} alt="" />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
