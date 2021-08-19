import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      <h3 style={{ marginBottom: 20 }}>Типы:</h3>
      <ListGroup>
        {device.types.map((type) => (
          <ListGroup.Item
            style={{ cursor: "pointer", marginLeft: 10 }}
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
});

export default TypeBar;
