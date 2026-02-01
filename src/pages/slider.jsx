import { NavLink } from "react-router-dom";
const SlideMenu = ({ setHideMenu, HideMenu }) => {
  return (
    <>
      <div className="slide-menu flex justify-between flex-col absolute left-0 top-0 h-[100lvh] xs:w-[55%] lg:hidden bg-neutral-100 rounded-r-xl rounded-br-xl border">
        <div className="menu-links">
          <div className="shop-co-headline w-full flex justify-between items-center  xs:p-1.5">
            <h1>ShopCo</h1>
            <i class="ri-xrp-line" onClick={() => setHideMenu(!HideMenu)}></i>
          </div>
          <ul className="flex justify-evenly items-start flex-col h-[55lvh] px-8">
            <NavLink to={"/"}>
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-home-3-line xs:mr-1"></i>
                <p>Home</p>
              </li>
            </NavLink>
            <NavLink to={"/newarrivals"}>
              {" "}
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-luggage-cart-line xs:mr-1"></i>
                <p>New Arrivals</p>
              </li>
            </NavLink>
            <NavLink to={"/brands"}>
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-building-line xs:mr-1"></i>
                <p>Brands</p>
              </li>
            </NavLink>
            <NavLink to={"/onsale"}>
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-shirt-line xs:mr-1"></i>
                <p>OnSale</p>
              </li>
            </NavLink>
            <NavLink to={"/trending"}>
              {" "}
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-funds-line xs:mr-1"></i>
                <p>Trending</p>
              </li>
            </NavLink>
            <NavLink to={"/discounts"}>
              {" "}
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-discount-percent-line xs:mr-1"></i>
                <p>Discounts</p>
              </li>
            </NavLink>
            <NavLink to={"/categories"}>
              {" "}
              <li
                className="flex items-center justify-center"
                onClick={() => setHideMenu(!HideMenu)}
              >
                <i class="ri-menu-search-line xs:mr-1"></i>
                <p>Categories</p>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="copyright flex justify-center items-center mb-3">
          <p className="text-[#00000099] mb-1 xs:text-[7px] sm:text-[9px] md:text-[10px]">
            Shop.co © 2000-2025, All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;
