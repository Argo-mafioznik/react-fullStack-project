import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Context } from "..";
import Footer from "../components/Footer";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import { fetchBrands, fetchTypes } from "../components/redux/device";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  return (
    <>
      <Container
        style={{
          marginTop: 70,
        }}
        className="d-flex flex-column "
      >
        <Button
          variant={"outline-dark"}
          className="mt-4 p-2"
          onClick={() => setTypeVisible(true)}
        >
          Добавить тип
        </Button>
        <Button
          variant={"outline-dark"}
          className="mt-4 p-2"
          onClick={() => setBrandVisible(true)}
        >
          Добавить бренд
        </Button>
        <Button
          variant={"outline-dark"}
          className="mt-4 p-2"
          onClick={() => setDeviceVisible(true)}
        >
          Добавить устройство
        </Button>
        <CreateBrand
          show={brandVisible}
          onHide={() => setBrandVisible(false)}
        />
        <CreateDevice
          show={deviceVisible}
          onHide={() => setDeviceVisible(false)}
        />
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Admin;
