import React from "react";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import imagen from "../../assets/celular.jpg";
import imagen1 from "../../assets/ic_shipping.png";
const Item = () => {
  return (
    <div className="item">
      <div>
        <img src={imagen} alt="" className="imagen" />
      </div>
      <div className="item_detail">
        <div className="item_price">
          <h3 className="price">
            $1.980
            <span className="ms-2">
              <img src={imagen1} alt="" />
            </span>
          </h3>
          <p className="location">Capital Federal</p>
        </div>

        <p className="description">Apple Ipod 5g 16gb Igual a nuevo</p>
        <p className="description">Completo Unico</p>
      </div>
    </div>
  );
};

export default Item;

//  <Col className="bg-light item ">
//    <Container className=" ">
//      <Row>
//        <Col xs={2} className="border boder-2 border-danger">
//          <img src={imagen} alt="" className="imagen justify-content-start" />
//        </Col>
//        <Col xs={10}>
//          <Container className="border border-1 border-danger">
//            <Row clasName="justify-content-between ms-5">
//              <Col className="price">$1.980</Col>
//              <Col className="location">Capital Federal</Col>
//            </Row>

//            <div className="d-flex flex-column">
//              <div className=" description">
//                Apple Ipod 5g 16gb Igual a nuevo
//              </div>
//              <div className=" stateProduct">Completo Unico</div>
//            </div>
//          </Container>
//        </Col>
//      </Row>
//    </Container>
//  </Col>;

// <div className="border border-1 border-dark item m-0">
//     <div className="">
//       <img src={imagen} alt="" className="imagen " />
//     </div>
//     <div>
//       <div className="product_detail">
//         <div className="d-flex justify-content-between ">
//           <div className="price">$1.980</div>
//           <div className="location align-align-self-baseline">
//             Capital Federal
//           </div>
//         </div>
//         <div className="d-flex flex-column data">
//           <div className="description"> Apple Ipod 5g 16gb Igual a nuevo</div>
//           <div className="description">Completo Unico</div>
//         </div>
//       </div>
//     </div>
//   </div>
