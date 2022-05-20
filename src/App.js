import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./styles/App.scss";
import NavMenu from "./components/navbar/NavMenu";
import ItemListContainer from "./components/itemlist/ItemListContainer";
import ItemDetailContainer from "./components/item_detail/ItemDetailContainer";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Container fluid>
          <NavMenu />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/detail" element={<ItemDetailContainer />} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
