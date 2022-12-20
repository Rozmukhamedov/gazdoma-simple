import "./style.css";
import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Container } from "@mantine/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Container size={"xl"}>
        <div className="header__flex">
          <img src={Logo} alt="Клапан PRO" />
          <ul>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <Link to={"/profile"}>Личный кабинет</Link>
            </li>
            <li>
              <Link to={"/equipment"}>Мое оборудование</Link>
            </li>
            <li>
              <Link to={"/dispatcher"}>Подключение</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
