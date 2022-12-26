import { ShoppingCartOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MENU_ITEMS, USER_MENU } from "~/components/constant/Menu";
import Image from "~/components/image/Image";
import images from "~/ultil/images";
import styles from "./Action.module.scss";
import AvatarUser from "./component/avatarUser/AvatarUser";
import MenuList from "./component/menuList/MenuList";
function Action() {
  const cx = classNames.bind(styles);
  const [auth, setAuth] = useState([]);
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <div>
      <div className={cx("action")}>
        <div className={cx("dropdown")}>
          <button style={{ backgroundColor: "transparent" }}>
            {currentUser ? (
              <AvatarUser Auth={auth} />
            ) : (
              <Image
                className={cx("user-avatar")}
                src={images.noImage}
                alt="Nguyen Van A"
              />
            )}
            <div className={cx("dropdown-content--right")}>
              <MenuList items={currentUser ? USER_MENU : MENU_ITEMS} />
            </div>
          </button>
        </div>
        <div className={cx("Cart")}>
          <NavLink to="/cart">
            <ShoppingCartOutlined />
          </NavLink>
          <span className={cx("Cart--quantity")}>1</span>
        </div>
      </div>
    </div>
  );
}

Action.propTypes = {};

export default Action;
