import { createBrowserRouter } from "react-router-dom";
import App from "../utilities/App";
import About from "../pages/about";
import Contact from "../pages/contact";
import WishList from "../pages/wishlist";
import Services from "../pages/services";
import Layout from "../components/layout";
import ProductDetails from "../components/productdetail";
import Category from "../components/category";
import Cart from "../pages/cart";
import Error from "../pages/error";
import OnSale from "../pages/onsale";
import Brands from "../pages/brands";
import NewArrival from "../components/newarrival";
import Signup from "../pages/signup";
import Account from "../pages/account";
import Orders from "../pages/orders";
import EditProfile from "../pages/editprofile";
export const router = createBrowserRouter([
  {
    path: "/", //root URL
    Component: App,
    children: [
      { path: "/", Component: Layout },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "services", Component: Services },
      { path: "wishlist", Component: WishList },
      { path: "productdetails", Component: ProductDetails },
      { path: "category", Component: Category },
      { path: "cart", Component: Cart },
      { path: "signup", Component: Signup },
      { path: "onsale", Component: OnSale },
      { path: "newarrivals", Component: NewArrival },
      { path: "brands", Component: Brands },
      { path: "orders", Component: Orders },
      { path: "account", Component: Account },
      {path:"editprofile",Component:EditProfile},
      // { path: "cart", Component: <Cart/> },
      // { path: "cart/:id?", Component: <Cart/> }, //optional params;
      { path: "*", Component: Error }, //catch all;
    ],
  },
]);
