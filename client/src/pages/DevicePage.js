import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/bigStar.png";
import { useHistory, useParams } from "react-router-dom";
import {
  addProductToCart,
  deleteDevice,
  fetchDevices,
  fetchOneDevice,
} from "../components/redux/device";
import { SHOP_ROUTE } from "../utils/consts";
import Footer from "../components/Footer";
import { Context } from "../index";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const history = useHistory();
  const { user } = useContext(Context);

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  const deleteItem = (id) => {
    deleteDevice(id);
    history.push(SHOP_ROUTE);
  };

  let email = localStorage.getItem("email");
  console.log(email);

  // const addDeviceToCart = () => {
  //   console.log();
  //   addProductToCart();
  // };

  return (
    <>
      <Container className="mt-3">
        <hr style={{ marginBottom: 30 }} />
        <Row>
          <Col md={4}>
            <Card
              className="d-flex flex-column align-items-center justify-content-around"
              style={{
                width: 300,
                height: 300,
                fontSize: 32,
                border: "none",
              }}
            >
              <h3>{device.name}</h3>
            </Card>
          </Col>
          <Col md={4}>
            <Image
              style={{
                objectFit: "contain",
              }}
              width={300}
              height={300}
              src={device.img}
            />
          </Col>
          <Col md={4}>
            <Card
              className="d-flex flex-column align-items-center justify-content-around"
              style={{
                width: 300,
                height: 300,
                fontSize: 32,
                border: "none",
              }}
            >
              <h3>Цена: {device.price} ₽</h3>
            </Card>
          </Col>
        </Row>
        <hr style={{ marginTop: 30 }} />
        <Row className="d-flex flex-column mt-5 mb-4">
          <h1 style={{ marginTop: 20, marginBottom: 30 }}>Характеристики:</h1>
          {device.info.map((info, index) => (
            <Row
              key={info.id}
              style={{
                padding: 10,
                marginBottom: 3,
                fontSize: 17,
              }}
            >
              {info.title}: {info.description}
            </Row>
          ))}
        </Row>
        <hr style={{ marginBottom: 40 }} />
        {email === "admin@gmail.com" ? (
          <>
            <Button
              style={{
                backgroundColor: "black",
                border: "none",
                padding: 10,
                marginTop: 10,
                marginBottom: 40,
              }}
              onClick={() => deleteItem(id)}
            >
              УДАЛИТЬ ПРОДУКТ
            </Button>
            {/* 
            <Button
              style={{
                backgroundColor: "black",
                border: "none",
                padding: 10,
                marginTop: 10,
                marginLeft: 50,
                marginBottom: 40,
              }}
              onClick={() => addProductToCart(id)}
            >
              ДОБАВИТЬ ПРОДУКТ В КОРЗИНУ
            </Button> */}
          </>
        ) : null}
      </Container>
      <Footer />
    </>
  );
};

export default DevicePage;
