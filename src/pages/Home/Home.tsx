import "./style.css"
import { Container } from "@mantine/core";
import React from "react/jsx-runtime";
import Main from "../../assets/images/main.svg";
import { Mobiles } from "../../containers";

function Home() {
  return (
    <Container size={"xl"}>
      <div className="home">
        <h1>Схема платформы</h1>
        <img src={Main} alt="" />
        <Mobiles />
      </div>
    </Container>
  );
}

export default Home;
