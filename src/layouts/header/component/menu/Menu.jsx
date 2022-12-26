import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { MENU_HEADER } from "~/components/constant/Menu";
import Category from "./component/category/Category";
import MenuItem from "./component/menuItem/MenuItem";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);
function Menu({ handleSubmitCategory, handleSubmitAllProduct }) {
  //call API
  return (
    <div className={cx("menu-link")}>
      {MENU_HEADER.map((item, index) => {
        if (item.dropdown === true) {
          return (
            <li key={index}>
              <div className={cx("dropdown")}>
                <MenuItem title={item.title} to={item.to} />
                <div className={cx("dropdown-content")}>
                  <Category
                    handleSubmitCategory={handleSubmitCategory}
                    handleSubmitAllProduct={handleSubmitAllProduct}
                  />
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
