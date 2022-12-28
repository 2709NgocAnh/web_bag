import routeClient from "~/config/routeClient";
import DefaultLayout from "~/layouts/defaultLayout";
import LayoutNoSlider from "~/layouts/layoutNoSlider";
import Register from "~/modules/Auth/page/register/Register";
import Home from "~/modules/Home/page/PageShop/Home";

const PUBLICROUTES = [
  { path: routeClient.home, component: Home, layout: DefaultLayout },
  {
    path: routeClient.userRegister,
    component: Register,
    layout: LayoutNoSlider,
  },
];
export default PUBLICROUTES;
