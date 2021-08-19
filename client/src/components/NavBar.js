import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  FAQ_ROUTE,
  LOGIN_ROUTE,
  QUESTIONS_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { Button, Dropdown, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  let email = localStorage.getItem("email");
  console.log(email);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    history.push(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{
            color: "white",
          }}
          to={SHOP_ROUTE}
        >
          <Image
            style={{ width: 80, height: 45, objectFit: "cover" }}
            src={logo}
          />
          ARGOSHOP
        </NavLink>

        <Dropdown style={{ marginLeft: 30 }}>
          <Dropdown.Toggle
            style={{ background: "none", border: "none" }}
            id="dropdown-basic"
          >
            Информация
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ marginTop: 3, marginLeft: 10 }}>
            <Dropdown.Item onClick={() => history.push(FAQ_ROUTE)}>
              FAQ
            </Dropdown.Item>
            <Dropdown.Item onClick={() => history.push(QUESTIONS_ROUTE)}>
              Questions & Answer
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            {email === "admin@gmail.com" ? (
              <>
                <Button
                  variant={"outline-light"}
                  onClick={() => history.push(ADMIN_ROUTE)}
                >
                  Админ панель
                </Button>
              </>
            ) : null}

            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
