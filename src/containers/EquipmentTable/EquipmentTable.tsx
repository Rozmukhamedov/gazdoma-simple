import "./style.css";
import React from "react";
import { Accordion, Table } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function EquipmentTable({ data }: any) {
  const { height, width } = useViewportSize();
  const colorCharge = (e: number) => {
    if (e > 0 && e < 21) {
      return "red";
    }
    if (e > 20 && e < 41) {
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

  const getHour = (e: number) => {
    const d = new Date(e);
    const nowD = new Date();

    let hour = d.getHours();
    let hourNow = nowD.getHours();

    if (hourNow - hour > 0 && hourNow - hour < 1) {
      return "Менее 1 часа";
    }

    if (hourNow - hour > 1 && hourNow - hour < 3) {
      return "Более 1 часа";
    }

    if (hourNow - hour > 2 && hourNow - hour < 6) {
      return "Более 3 часов";
    }

    if (hourNow - hour > 5 && hourNow - hour < 12) {
      return "Более 6 часов";
    }

    return "Более 12 часов";
  };

  const colorUpdate = (e: number) => {
    const d = new Date(e);
    const nowD = new Date();
    let hourNow = nowD.getHours();
    let hour = d.getHours();

    if (hourNow - hour > 0 && hourNow - hour < 1) {
      return "color1";
    }

    if (hourNow - hour > 1 && hourNow - hour < 3) {
      return "color2";
    }

    if (hourNow - hour > 2 && hourNow - hour < 6) {
      return "color3";
    }

    if (hourNow - hour > 5 && hourNow - hour < 12) {
      return "color4";
    }

    return "color5";
  };

  return (
    <>
      {width < 768 ? (
        <div className="equipment__table-mobile">
          <h4>Текущие показания и состояние оборудования</h4>
          <Accordion>
            {data?.map((item: any) => (
              <Accordion.Item value={`${item?.id}`}>
                <Accordion.Control>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="valves">ОУ—{item?.ch}</div>{" "}
                    <div className="update">
                      <div className={`btn ${colorUpdate(item?.updated)}`}>
                        <p>{getHour(item?.updated)}</p>
                      </div>
                    </div>
                  </div>
                </Accordion.Control>

                <Accordion.Panel>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6>Давление</h6>
                      <p className="pressure">{item?.co} бар.</p>
                    </div>
                    <div>
                      <h6>Заряд</h6>
                      <p className={`charge ${colorCharge(item?.charge)}`}>
                        {item?.charge}%
                      </p>
                    </div>
                    <div>
                      <h6>Состояние</h6>
                      <p className="status">
                        {item?.connected ? (
                          <div className="open">Открыт</div>
                        ) : (
                          <div className="close">Закрыть</div>
                        )}
                      </p>
                    </div>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      ) : (
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
                    <div className={`btn ${colorUpdate(item?.updated)}`}>
                      <p>{getHour(item?.updated)}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default EquipmentTable;
