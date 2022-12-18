import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Action from "./component/action/Action";
import Logo from "./component/logo/Logo";
import Menu from "./component/menu/Menu";
import Search from "./component/search/Search";

const cx = classNames.bind(styles);
function Header(props) {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Logo />
        <Menu />
        <Search />
        <Action />
      </div>
    </header>
  );
}

export default Header;
