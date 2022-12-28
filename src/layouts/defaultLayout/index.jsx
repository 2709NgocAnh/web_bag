import classNames from "classnames/bind";
import Discount from "../component/discount/Discount";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import Slider from "../component/slider/Slider";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Slider />
      <Discount />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
