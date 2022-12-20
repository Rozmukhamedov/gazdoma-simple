import "./style.css";
import React from "react";
import { Table } from "@mantine/core";

function EquipmentTable({ data }: any) {
  const colorCharge = (e: number) => {
    if (e > 0 && e < 21) {
      return "red";
    }
    if (e > 20  && e < 41) {
      return "orange";
    }
    if (e > 40 && e < 61) {
      return "yellow";
    }
    if (e > 60 && e < 81) {
      return "darkgreen";
    }
    if (e > 80) {
      return "green";
    }
    return e;
  };

  const colorUpdate = (e: number) => {
    if (e > 0 && e < 21) {
      return "red";
    }
    if (e > 20  && e < 41) {
      return "orange";
    }
    if (e > 40 && e < 61) {
      return "yellow";
    }
    if (e > 60 && e < 81) {
      return "darkgreen";
    }
    if (e > 80) {
      return "green";
    }
    return e;
  };

  return (
    <div className="equipment__table">
      <h4>Текущие показания и состояние оборудования</h4>
      <Table>
        <thead>
          <tr>
            <th className="valves">Клапаны</th>
            <th className="pressure">Давление</th>
            <th className="charge">Заряд</th>
            <th className="status">Состояние</th>
            <th className="update">Последнее обновление</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any) => (
            <tr key={item?.id}>
              <td className="valves">ОУ—{item?.ch}</td>
              <td className="pressure">{item?.co} бар.</td>
              <td className={`charge ${colorCharge(item?.charge)}`}>
                {item?.charge}%
              </td>
              <td className="status">
                {item?.connected ? (
                  <div className="open">Открыт</div>
                ) : (
                  <div className="close">Закрыть</div>
                )}
              </td>
              <td className="update">
                {item?.connected ? <div>Открыт</div> : <div>Закрыть</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EquipmentTable;
