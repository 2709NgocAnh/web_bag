import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { MENU_HEADER } from "~/components/constant/Menu";
import Category from "./component/category/Category";
import MenuItem from "./component/menuItem/MenuItem";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu() {
  return (
    <div className={cx("menu__link")}>
      {MENU_HEADER.map((item, index) => {
        if (item.dropdown === true) {
          return (
            <li key={index}>
              <div className={cx("dropdown")}>
                <MenuItem title={item.title} to={item.to} />
                <div className={cx("dropdown__content")}>
                  <Category />
                </div>
              </div>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <MenuItem title={item.title} to={item.to} />
            </li>
          );
        }
      })}
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
