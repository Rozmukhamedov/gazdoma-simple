import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { Container, Grid } from "@mantine/core";
import { ReactComponent as ICONT } from "../../assets/images/telegram.svg";
import { ReactComponent as ICONF } from "../../assets/images/facebook.svg";
import { ReactComponent as Apple } from "../../assets/images/apple.svg";
import { ReactComponent as Android } from "../../assets/images/android.svg";

function Footer() {
  return (
    <div className="footer">
      <Container size={"xl"}>
        <Grid>
          <Grid.Col span={12} sm={4} xs={6}>
            <div className="footer__logo">
              <img src={Logo} alt="Клапан PRO" />
              <h3>Клапан PRO</h3>
            </div>

            <p>
              ООО «Клапан PRO» <br />
              240046 <br />
              Москва, ул. Ленина, д. 35, оф. 404
            </p>
            <p className="gmail">
              <a href="info@klapanpro.com">info@klapanpro.com</a>
            </p>
          </Grid.Col>
          <Grid.Col span={12} sm={4} xs={6} className="footer__second">
            <h4>Навигация</h4>
            <p>
              <Link to="/">Главная</Link>
            </p>
            <p>
              <Link to="/">Личный кабинет</Link>
            </p>
            <p>
              <Link to="/">Мое оборудование</Link>
            </p>
            <p>
              <Link to="/">Подключение</Link>
            </p>
          </Grid.Col>
          <Grid.Col span={12} sm={4} xs={6}>
            <h4>Контакты</h4>
            <div className="footer__icons">
              <div
                style={{ padding: "13px 16px 9px 14px" }}
                className="footer__icon"
              >
                <ICONT />
              </div>
              <div
                style={{ padding: "13px 18px 9px 18px" }}
                className="footer__icon"
              >
                <ICONF />
              </div>
              <div
                style={{ padding: "13px 18px 9px 18px" }}
                className="footer__icon"
              >
                <ICONF />
              </div>
            </div>
            <div className="button_1">
              <Apple /> <p>Скачать на <br /> Apple</p>
            </div>
            <div className="button_2">
              <Android /> <p>Скачать на <br /> Android</p>
            </div>
          </Grid.Col>
        </Grid>
        <p className="copyright">© 2021 Клапан PRO</p>
      </Container>
    </div>
  );
}

export default Footer;
