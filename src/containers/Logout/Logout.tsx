import "./style.css";
import { Modal } from "@mantine/core";
import React, { FC } from "react";
import { Button } from "../../components";
import { removeCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";

type LogoutProps = {
  opened: boolean;
  setOpened: any;
};

const Logout: FC<LogoutProps> = ({ opened, setOpened }) => {
  const navigate = useNavigate();
  const logFunc = () => {
    removeCookie("token");
    removeCookie("user");
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <Modal
      className="modal"
      withCloseButton={false}
      opened={opened}
      onClose={() => setOpened(false)}
      centered
    >
      <p>Вы действительно хотите выйти?</p>
      <Button className={"btn__logout"} onClick={logFunc}>
        Выйти
      </Button>
      <Button className={"btn__cancel"} onClick={() => setOpened(false)}>
        Отмена
      </Button>
    </Modal>
  );
};

export default Logout;
