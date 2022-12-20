import "./style.css";
import React from "react";
import { Container, Grid } from "@mantine/core";
import { DispatTable } from "../../containers";
import { Button } from "../../components";

function Dispatcher() {
  return (
    <Container size={"xl"}>
      <div className="dispatcher">
        <h1>Диспетчер</h1>
        <Grid>
          <Grid.Col span={12} md={8}>
            <DispatTable />
          </Grid.Col>
          <Grid.Col span={12} md={4}>
            <div className="notifications">
            <h3>Уведомления</h3>
            <div className="notifications__card">
              <h6>24.11.2021 17:50</h6>
              <p>Датчик №9287523 — Москва, ул. Ленина, д. 35</p>
              <Button>Отправить владельцу СМС</Button>
            </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}

export default Dispatcher;
