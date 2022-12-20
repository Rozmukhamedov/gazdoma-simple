import "./style.css";
import React from "react";
import { Container, Grid } from "@mantine/core";
import { useGetDevices } from "../../hooks/query";
import { EquipmentTable } from "../../containers";
import Image from "../../assets/images/error_m.svg"

function Equipment() {
  const devices = useGetDevices({});
  return (
    <Container size={"xl"}>
      <div className="equipment">
        <h1>Мое оборудование</h1>
        <Grid>
          <Grid.Col span={12} sm={10}>
            <EquipmentTable data={devices.data} />
          </Grid.Col>
          <Grid.Col span={12} sm={2}>
            <div className="message">
              <img src={Image} alt="" />
              <p>Вызвать МЧС</p>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}

export default Equipment;
