import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./styles/App.scss";
import NavMenu from "./components/navbar/NavMenu";
import ProductsList from "./components/itemlist/ProductsList";
import ProductDetails from "./components/item_detail/ProductDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <NavMenu />
          <Routes>
            <Route exact path="/" element={<ProductsList />} />
            <Route
              exact
              path="/items/:idProduct"
              element={<ProductDetails />}
            />
            <Route>404 Not Found</Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
