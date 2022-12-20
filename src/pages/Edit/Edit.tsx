import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button, CustomInput } from "../../components";
import { Container } from "@mantine/core";
import { useForm } from "@mantine/form";

function Edit() {
  const form = useForm({
    initialValues: { login: "", register: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      login: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      register: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <Container size={"xl"}>
      <div className="login">
        <h1>Личный кабинет</h1>
        <form className="login__form">
          <h4>Редактировать информацию</h4>
          <CustomInput form={form} name={"login"} placeholder={"Логин"} />
          <CustomInput form={form} name={"register"} placeholder={"Пароль"} />
          <Button className="login__btn" type={"submit"}>
            Войти
          </Button>
          <Button className="btn" type={"button"}>
            <Link to={"/register"}>Регистрация</Link>
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Edit;
