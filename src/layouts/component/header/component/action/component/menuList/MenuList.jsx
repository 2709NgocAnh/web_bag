import classNames from "classnames/bind";
import styles from "./MenuList.module.scss";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

export default function MenuList({ items }) {
  const cx = classNames.bind(styles);
  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("role");
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <div className={cx("wrapper")}>
      {items.map((item, index) => {
        if (item.separate === true) {
          return (
            <div key={index}>
              <button
                onClick={logout}
                style={{ backgroundColor: "#333", width: "100%" }}
              >
                <NavLink
                  className={(nav) => cx("menu-item", { active: nav.isActive })}
                  to={items.to}
                >
                  <span className={cx("title")}>{items.title}</span>
                </NavLink>
              </button>
            </div>
          );
        } else {
          return (
            <div key={index} className={cx("wrapper-item")}>
              <NavLink
                className={(nav) => cx("menu-item", { active: nav.isActive })}
                to={items.to}
              >
                <span className={cx("title")}>{items.title}</span>
              </NavLink>
            </div>
          );
        }
      })}
    </div>
  );
}
