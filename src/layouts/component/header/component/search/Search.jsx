import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./SearchProduct.module.scss";
const cx = classNames.bind(styles);

function Search(props) {
  const { setValueSearch, valueSearch, handleSubmit } = props;

  return (
    <div className={cx("search")}>
      <form onSubmit={handleSubmit}>
        <div className={cx("search-box")}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            onChange={(e) => setValueSearch(e.target.value)}
            value={valueSearch}
          />
          <button className={cx("search-btn")} type="submit">
            <SearchOutlined />
          </button>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {};

export default Search;
