import "./style.css";
import { Container } from "@mantine/core";
import React from "react/jsx-runtime";
import Main from "../../assets/images/main.svg";
import Main1 from "../../assets/images/MainMob1.svg";
import Main2 from "../../assets/images/MainMob2.svg";
import { Mobiles } from "../../containers";

function Home() {
  return (
    <Container size={"xl"}>
      <div className="home">
        <h1>Схема платформы</h1>
        <img src={Main} alt="" />
        <Mobiles />
      </div>
      <div className="home__mobile">
        <img src={Main1} alt="" />
        <img src={Main2} alt="" />
        <Mobiles />
      </div>
    </Container>
  );
}

export default Home;
