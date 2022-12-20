import "./style.css";
import React from "react";
import { Input, Switch, Table } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { ReactComponent as EditIcon } from "../../assets/images/edit_icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/images/upload.svg";

function DispatTable() {
  return (
    <div className="dispatch__table">
      <h4>Пользователи</h4>
      <Input
        style={{ width: "306px" }}
        rightSection={<IconSearch />}
        variant="filled"
        placeholder="Your email"
        radius="md"
      />
      <Table>
        <thead>
          <tr>
            <th>Адрес</th>
            <th className="name">ФИО</th>
            <th>№ датчика</th>
            <th className="edit"></th>
            <th className="dowload"></th>
            <th className="disabled"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Москва, <br /> Ленина, д. 35, оф. 404
            </td>
            <td className="name">Майборода Дмитрий Павлович</td>
            <td>9287523</td>
            <td className="edit">
              <EditIcon />
            </td>
            <td className="dowload">
              <UploadIcon />
            </td>
            <td className="disabled">
              <Switch size="md" color="green" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DispatTable;
