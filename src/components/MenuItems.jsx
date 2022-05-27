import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/quickstart">
        <NavLink to="/quickstart">🚀 Quick Start</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🖼 My NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/MyDaos">
        <NavLink to="/MyDaos">📈 My DAOs</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="onramp">
        <NavLink to="/onramp">💵 Fiat</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 Transfers</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
