import "./style.css";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Burger, Container, Drawer, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { Button } from "../../components";

function Header() {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
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
      <div className="header__mobile">
        <Container>
          <div className="header__flex">
            <Drawer
              opened={opened}
              onClose={() => setOpened(false)}
              title={<img src={Logo} alt="Клапан PRO" />}
              padding="xl"
              size="xl"
            >
              <ul>
                <li>
                  <Link  onClick={() => setOpened(false)} to={"/"}>Главная</Link>
                </li>
                <li>
                  <Link  onClick={() => setOpened(false)} to={"/profile"}>Личный кабинет</Link>
                </li>
                <li>
                  <Link  onClick={() => setOpened(false)} to={"/equipment"}>Мое оборудование</Link>
                </li>
                <li>
                  <Link  onClick={() => setOpened(false)} to={"/dispatcher"}>Подключение</Link>
                </li>
              </ul>
            </Drawer>
            <img src={Logo} alt="Клапан PRO" />
            <Group position="center">
              <Button onClick={() => setOpened(true)}>
                <Burger
                  opened={opened}
                  // onClick={() => setOpened((o) => !o)}
                  title={title}
                />
              </Button>
            </Group>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
