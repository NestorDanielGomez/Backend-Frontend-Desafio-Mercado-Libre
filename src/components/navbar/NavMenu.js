import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo_meli from "../../assets/Logo_ML@2x.png";
import logo_find from "../../assets/ic_Search.png";

const NavMenu = () => {
  // fetch("http://localhost:8080/api/items")
  //   .then((respuesta) => {
  //     return respuesta.json();
  //   })
  //   .then((resp) => {
  //     console.log(resp);
  //   });

  fetch("http://localhost:8080/api/items/MLA1124174937")
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resp) => {
      console.log(resp);
    });

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

        <Form className="w-100 d-inline-flex ">
          <FormControl
            type="search"
            placeholder="Nunca dejes de buscar"
            className="d-flex text_find"
            aria-label="Search"
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
