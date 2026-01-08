import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function AntNavbar() {
  const location = useLocation();

  const selectedKey = location.pathname === "/about" ? "about" : "home";

  return (
    <Header style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Link to="/" style={{ color: "white", fontWeight: 800 }}>ANTD Demo</Link>

      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={[
          { key: "home", label: <Link to="/">Home</Link> },
          { key: "about", label: <Link to="/about">About</Link> },
        ]}
        style={{ flex: 1 }}
      />
    </Header>
  );
}