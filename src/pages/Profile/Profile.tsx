import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { Container } from "@mantine/core";
import { Logout } from "../../containers";
import { useGetUser } from "../../hooks/query";

function Profile() {
  const [opened, setOpened] = useState(false);
  const getUser = useGetUser({})
  
  return (
    <Container size={"xl"}>
      <div className="profile">
        <h1>Личный кабинет</h1>
        <div className="profile__box">
          <h4>{getUser.data?.first_name}</h4>
          <p>{getUser.data?.address}</p>
          <h5><Link to={`/profile/edit/${getUser.data?.id}/`}>Редактировать информацию</Link></h5>
          <h5><Link to={`/profile/edit/${getUser.data?.id}/`}>Изменить пароль</Link></h5>
          <Button className="btn" type={"button"} onClick={() => setOpened(prev => !prev)}>
            Изменить
          </Button>
        </div>
      </div>
      <Logout opened={opened} setOpened={setOpened}/>
    </Container>
  );
}

export default Profile;
