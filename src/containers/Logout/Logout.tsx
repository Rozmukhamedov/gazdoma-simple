import "./style.css";
import { Modal } from "@mantine/core";
import React, { FC } from "react";
import { Button } from "../../components";

type LogoutProps = {
  opened: boolean;
  setOpened: any;
};

const Logout: FC<LogoutProps> = ({ opened, setOpened }) => {
  return (
    <Modal
      className="modal"
      withCloseButton={false}
      opened={opened}
      onClose={() => setOpened(false)}
      centered
    >
      <p>Вы действительно хотите выйти?</p>
      <Button className={"btn__logout"}>Выйти</Button>
      <Button className={"btn__cancel"} onClick={() => setOpened(false)}>
        Отмена
      </Button>
    </Modal>
  );
};

export default Logout;
