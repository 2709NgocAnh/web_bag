const { default: routeClient } = require("~/config/routeClient");
const { default: Home } = require("~/modules/Home/page/Home/Home");

const PUBLICROUTES = [
  { path: routeClient.home, component: Home },
//   { path: config.routes.shop, component: Shop, layout: DefaultLayout },
//   {
//     path: config.routes.listnewproduct,
//     component: ListNewProduct,
//     layout: DefaultLayout,
//   },
//   //   { path: config.routes. listsaleproduct, component: ListSaleProduct, layout: DefaultLayout },
//   {
//     path: config.routes.pageSaleProduct,
//     component: ListSaleProduct,
//     layout: DefaultLayout,
//   },

//   { path: config.routes.profile, component: Profile, layout: DefaultLayout },
//   {
//     path: config.routes.editprofile,
//     component: EditProfile,
//     layout: DefaultLayout,
//   },

//   { path: config.routes.payment, component: Payment, layout: DefaultLayout },
//   { path: config.routes.feedback, component: FeedBack, layout: DefaultLayout },
//   {
//     path: config.routes.detailorder,
//     component: DetailOrder,
//     layout: DefaultLayout,
//   },
//   {
//     path: config.routes.vieworder,
//     component: ViewOrder,
//     layout: DefaultLayout,
//   },
//   { path: config.routes.about, component: About, layout: DefaultLayout },
//   { path: config.routes.contact, component: Contact, layout: DefaultLayout },
//   { path: config.routes.cart, component: Cart, layout: DefaultLayout },
//   {
//     path: config.routes.privacyPolicy,
//     component: PrivacyPolicy,
//     layout: DefaultLayout,
//   },
//   {
//     path: config.routes.returnPolicy,
//     component: ReturnPolicy,
//     layout: DefaultLayout,
//   },
//   {
//     path: config.routes.termsService,
//     component: TermsService,
//     layout: DefaultLayout,
//   },
//   { path: config.routes.register, component: Register, layout: DefaultLayout },
//   { path: config.routes.signin, component: SignIn, layout: DefaultLayout },
//   {
//     path: config.routes.forgetPassword,
//     component: ForgetPassword,
//     layout: DefaultLayout,
//   },
//   {
//     path: config.routes.veryfyEmail,
//     component: VeryfyEmail,
//     layout: DefaultLayout,
//   },

//   {
//     path: config.routes.detailproduct,
//     component: Details,
//     layout: DefaultLayout,
//   },
];
 export default PUBLICROUTES;