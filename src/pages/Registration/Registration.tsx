import "./style.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, CustomInput } from "../../components";
import { Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRegistrMutation } from "../../hooks/mutation";

function Registration() {
  const navigate = useNavigate();
  const useRegistr = useRegistrMutation();
  const form = useForm({
    initialValues: {
      name: "",
      address: "",
      index: "",
      telephone: "",
      password: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      address: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      index: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      telephone: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      password: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  const onSubmit = (e: any) => {
    const data = {
      first_name: e.name,
      last_name: e.name,
      middle_name: e.name,
      password: e.password,
      address: e.address,
      index: e.index,
      phone_number: e.telephone,
    };

    const registr = useRegistr.mutateAsync(data);
    registr
      .then((res: any) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container size={"xl"}>
      <div className="login">
        <h1>Вход или регистрация</h1>
        <form className="login__form" onSubmit={form.onSubmit(onSubmit)}>
          <h4>Регистрация</h4>
          <CustomInput
            type={"text"}
            form={form}
            name={"name"}
            placeholder={"Фамилия Имя Отчество"}
          />
          <CustomInput
            type={"text"}
            form={form}
            name={"address"}
            placeholder={"Адрес"}
          />
          <CustomInput
            type={"text"}
            form={form}
            name={"index"}
            placeholder={"Индекс"}
          />
          <CustomInput
            type={"text"}
            form={form}
            name={"telephone"}
            placeholder={"Телефон"}
          />
          <CustomInput
            type={"text"}
            form={form}
            name={"password"}
            placeholder={"Пароль"}
          />
          <Button className="login__btn" type={"submit"}>
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Registration;
