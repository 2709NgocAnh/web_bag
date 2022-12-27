import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "~/redux/slice/product/ProductSlice";
import { getSlider } from "~/redux/slice/slider/SliderSlice";
import { getCategory } from "~/redux/slice/category/CategorySlice";
import Header from "~/layouts/header/Header";
import Slider from "~/layouts/slider/Slider";
import Footer from "~/layouts/footer/Footer";
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
  console.log(listProduct?.length);

  return (
    <div>
      <Header />
      <Slider />
      {listProduct?.length === 0 || listProduct?.length === undefined ? (
        <NoProduct />
      ) : (
        <Products />
      )}
      <Footer />
    </div>
  );
}
