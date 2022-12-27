import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategory } from "~/redux/slice/category/CategorySlice";
import { getProducts } from "~/redux/slice/product/ProductSlice";
import { getSlider } from "~/redux/slice/slider/SliderSlice";

import NoProduct from "../../component/noproduct/NoProduct";
import Products from "../../component/products/Products";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getSlider());
    dispatch(getCategory());
  }, [dispatch]);
  const listProduct = useSelector((state) => state.product.productList);

  return (
    <div>
      {listProduct?.length === 0 || listProduct?.length === undefined ? (
        <NoProduct />
      ) : (
        <Products />
      )}
    </div>
  );
}
