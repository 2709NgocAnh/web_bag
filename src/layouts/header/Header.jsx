import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Action from "./component/action/Action";
import Logo from "./component/logo/Logo";
import Menu from "./component/menu/Menu";
import Search from "./component/search/Search";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory } from "~/redux/slice/category/CategorySlice";

const cx = classNames.bind(styles);

function Header(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
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
