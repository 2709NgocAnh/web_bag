import classNames from "classnames/bind";
import styles from "./Products.module.scss";

import { Image } from "cloudinary-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import Price from "../price/Price";

function Products() {
  const cx = classNames.bind(styles);
  const productList = useSelector((state) => state.product.productList);

  return (
    <div>
      <div className={cx("product")}>
        {productList?.map((product) => {
          return (
            <div className={cx("product__item")} key={product._id}>
              {product.price_sale > 0 ? (
                <span className={cx("product__item--sale")}>
                  {((product.price_sale / 1000) * 100) /
                    (product.price / 1000) <
                    100 &&
                  ((product.price_sale / 1000) * 100) / (product.price / 1000) >
                    0
                    ? (
                        100 -
                        ((product.price_sale / 1000) * 100) /
                          (product.price / 1000)
                      ).toFixed(0) + "%"
                    : ""}
                </span>
              ) : (
                ""
              )}
              <NavLink to={`/product/detail/${product._id}`}>
                <Image
                  className={cx("product__item--img")}
                  cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                  publicId={product.images[1]}
                />
              </NavLink>
              <div className={cx("product__item--content")}>
                <Link
                  to={`/product/detail/${product._id}`}
                  className={cx("product__item--title")}
                >
                  {product.name}
                </Link>
                {/* <Price
                      price={product.price}
                      price_sale={product.price_sale}
                    /> */}
                <button
                  className={cx("product__item--button")}
                  //   onClick={() => {
                  //     addCart(product, 1);
                  //   }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Products.propTypes = {};

export default Products;
