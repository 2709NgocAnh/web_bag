import classNames from "classnames/bind";
import styles from "./Products.module.scss";

import { Image } from "cloudinary-react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addCart } from "~/redux/slice/cart/CartSlice";
import Price from "./component/Price/Price";
import ButtonPriceSale from "./component/ButtonPriceSale/ButtonPriceSale";

const cx = classNames.bind(styles);

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  return (
    <div className={cx("product")}>
      {productList?.map((product) => {
        return (
          <div className={cx("product__item")} key={product._id}>
            <ButtonPriceSale
              price={product.price}
              price_sale={product.price_sale}
            />

            <NavLink to={`/product/detail/${product._id}`}>
              <Image
                className={cx("product__item--img")}
                cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                publicId={product.images[1]}
              />
            </NavLink>

            <div className={cx("product__item--content")}>
              <Link
                className={cx("product__item--title")}
                to={`/product/detail/${product._id}`}
              >
                {product.name}
              </Link>
              <Price price={product.price} price_sale={product.price_sale} />
              <button
                className={cx("product__item--button")}
                onClick={() => {
                  dispatch(addCart(product));
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
