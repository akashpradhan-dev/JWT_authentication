import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CartState } from "../contexts/Context";
import SingleProduct from "./SingleProduct";

function Home() {
  const {
    state: { products },
  } = CartState();

  return (
    <div className='home'>
      <Container fluid>
        <Row>
          <Col md={2}>{/* <Filter/> */}</Col>
          <Col md={10}>
            <div className='productContainer'>
              {products.map((prod) => {
                return <SingleProduct prod={prod} key={prod.id} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
