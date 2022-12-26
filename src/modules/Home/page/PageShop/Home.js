import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "~/redux/slice/product/ProductSlice";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const listproduct = useSelector((state) => state.product.productList);

  return <div>hellllo</div>;
}
