import "./style.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, CustomInput } from "../../components";
import { Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useLoginMutation } from "../../hooks/mutation";
import { setCookie } from "../../utils/cookie";

function Login() {
  const navigate = useNavigate();
  const useLogin = useLoginMutation();

  const form = useForm({
    initialValues: { login: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      login: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      password: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  const onSubmit = (e: any) => {
    const data = {
      phone_number: e.login,
      password: e.password,
    };

    const registr = useLogin.mutateAsync(data);
    registr
      .then((res: any) => {
        setCookie("token", res?.data?.access);
        setCookie("refresh_token", res?.data?.refresh);
        navigate("/profile");
        window.location.reload();
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
          <h4>Вход</h4>
          <CustomInput form={form} name={"login"} placeholder={"Логин"} />
          <CustomInput form={form} name={"password"} placeholder={"Пароль"} />
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

export default Login;
