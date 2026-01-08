import React from "react";
import { Card, Row, Col, Statistic } from "antd";

export default function AntStats() {
  return (
    <Card title="Métricas">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Statistic title="Usuarios" value={1280} />
        </Col>
        <Col xs={24} md={8}>
          <Statistic title="Ventas" value={342} />
        </Col>
        <Col xs={24} md={8}>
          <Statistic title="Tickets" value={19} />
        </Col>
      </Row>
    </Card>
  );
}