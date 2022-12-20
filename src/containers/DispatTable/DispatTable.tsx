import "./style.css";
import React from "react";
import { Input, Switch, Table } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { ReactComponent as EditIcon } from "../../assets/images/edit_icon.svg";
import { ReactComponent as UploadIcon } from "../../assets/images/upload.svg";

function DispatTable({ data }: any) {
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
            {/* <th className="edit"></th>
            <th className="dowload"></th> */}
            <th className="disabled"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user: any) => (
            <tr key={user?.id}>
              <td>
                {user?.address}
              </td>
              <td className="name">{user?.last_name} <br /> {user?.first_name} {user?.middle_name}</td>
              <td>{user?.index}</td>
              {/* <td className="edit">
                <EditIcon />
              </td>
              <td className="dowload">
                <UploadIcon />
              </td> */}
              <td className="disabled">
                <Switch size="md" color="green" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default DispatTable;
