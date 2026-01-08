import React from "react";
import { Card, Typography, Space, Button } from "antd";

const { Title, Text } = Typography;

export default function AntHero() {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Title level={2} style={{ marginTop: 0 }}>Home (Ant Design)</Title>
      <Text type="secondary">
        Home armada con componentes Ant Design (enterprise UI).
      </Text>

      <div style={{ marginTop: 16 }}>
        <Space wrap>
          <Button type="primary">Acción principal</Button>
          <Button>Acción secundaria</Button>
        </Space>
      </div>
    </Card>
  );
}