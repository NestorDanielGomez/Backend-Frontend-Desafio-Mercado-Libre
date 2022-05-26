import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import logo_meli from "../../assets/Logo_ML@2x.png";
import logo_find from "../../assets/ic_Search.png";
import { useDispatch } from "react-redux";
import { fetchAsyncProducts } from "../../redux/slices/products";

const NavMenu = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (search === "") return <Alert>INGRESE UNA PALABRA PARA BUSCAR</Alert>;
    dispatch(fetchAsyncProducts(search));
    navigate("/");
    setSearch("");
  };

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

        <Form className="w-100 d-inline-flex " onSubmit={submitHandler}>
          <FormControl
            type="search"
            placeholder="Nunca dejes de buscar"
            value={search}
            className="d-flex text_find"
            aria-label="Search"
            id="searchBar"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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
