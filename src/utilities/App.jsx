import "../styles/App.css";
import { lazy } from "react";
const DealBar = lazy(() => import('../components/dealsbar'));
const Navbar = lazy(() => import('../components/navbar'));
const FeedBack = lazy(() => import('../components/feedbacks'));
const Footer = lazy(() => import('../components/footer'));
const PreLoader = lazy(() => import('../components/preloader'));
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { OrderedContextProvider } from "../context/ordercontext";
import { NotificationContextProvider } from "../context/notificationcontext";
import Notification from "../pages/notification";
function App() {
  const [preloader,setpreloader] = useState(true)
  setTimeout(() => {
    setpreloader(false);
  },3000);
  return (  
    preloader ? <PreLoader /> : (
      <>
       <NotificationContextProvider>
       <OrderedContextProvider>
        <Notification/>
        <DealBar />
        <Navbar />
        <Outlet />
        <FeedBack />
        <Footer />
        </OrderedContextProvider>
        </NotificationContextProvider>
      </>
    )
  );
}

export default App;
