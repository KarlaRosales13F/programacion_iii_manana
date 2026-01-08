import React, { useState } from "react";
import { Card, Form, Input, Button, Alert } from "antd";

export default function AntFormCard() {
  const [ok, setOk] = useState(false);

  const onFinish = (values: { email: string }) => {
    setOk(true);
    setTimeout(() => setOk(false), 2000);
    console.log(values);
  };

  return (
    <Card title="Newsletter" style={{ marginTop: 16 }}>
      {ok && (
        <Alert
          style={{ marginBottom: 12 }}
          message="✅ Suscripción simulada (demo)"
          type="success"
          showIcon
        />
      )}

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Correo"
          name="email"
          rules={[
            { required: true, message: "Ingresa tu correo" },
            { type: "email", message: "Correo inválido" },
          ]}
        >
          <Input placeholder="correo@dominio.com" />
        </Form.Item>

        <Button type="primary" htmlType="submit">Suscribirme</Button>
      </Form>
    </Card>
  );
}