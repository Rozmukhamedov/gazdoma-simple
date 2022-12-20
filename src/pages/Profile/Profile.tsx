import "./style.css";
import React, { useState } from "react";
import { Button } from "../../components";
import { Container } from "@mantine/core";
import { Logout } from "../../containers";
import { useGetUser } from "../../hooks/query";

function Profile() {
  const [opened, setOpened] = useState(false);

  const getUser = useGetUser({})
  console.log(getUser)
  return (
    <Container size={"xl"}>
      <div className="profile">
        <h1>Личный кабинет</h1>
        <div className="profile__box">
          <h4>Майборода Дмитрий Павлович</h4>
          <p>Москва, ул. Ленина, д. 35, оф. 404</p>
          <h5>Редактировать информацию</h5>
          <h5>Изменить пароль</h5>
          <Button className="btn" type={"button"} onClick={() => setOpened(prev => !prev)}>
            Выйти
          </Button>
        </div>
      </div>
      <Logout opened={opened} setOpened={setOpened}/>
    </Container>
  );
}

export default Profile;
