import { UserOutlined } from "@ant-design/icons";
const MENU_ITEMS = [
  {
    icon: <UserOutlined />,
    title: "Đăng Ký",
    to: "/register",
  },
  {
    icon: <UserOutlined />,
    title: "Đăng nhập",
    to: "/sign-in",
  },
];
const USER_MENU = [
  {
    icon: <UserOutlined />,
    title: "View profile",
    to: "/profile",
  },
  {
    icon: <UserOutlined />,
    title: "Log out",
    to: "/sign-in",
    separate: true,
  },
];
const MENU_HEADER = [
  {
    title: "SHOP",
    to: "/shop",
    dropdown: true,
  },
  {
    title: "NEW",
    to: "/product/new",
  },
  {
    title: "ABOUT",
    to: "/about",
  },
  {
    title: "SALE",
    to: "/product/sale",
  },
  {
    title: "CONTACT",
    to: "/contact",
  },
];
export { USER_MENU, MENU_ITEMS, MENU_HEADER };
