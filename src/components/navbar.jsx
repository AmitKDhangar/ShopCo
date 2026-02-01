import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import fetchingProducts from "../slices/asyncthunks/productsasyncthunk";
import { useLocalStorage } from "../hooks/uselocalstorage";
import Slider from "../pages/slider";
const Navbar = () => {
  // state for input from the user
  const [searchInput, setsearchInput] = useState("");
  // state for hiding and showing elements
  const [showHide, setshowHide] = useState(false);
  // dispatch ation function
  const dispatchAction = useDispatch();
  // getting cart's data
  const cart = useSelector((state) => state.cart);
  // some element's references;
  const shopRef = useRef();
  const optionRef = useRef();
  const searchRef = useRef();
  const searchBarRef = useRef();
  // fetching all the products
  const { data, loading, error } = useSelector((state) => state.product);
  const allproducts = data.data;
  useEffect(() => {
    dispatchAction(fetchingProducts());
  }, [dispatchAction]);

  // filtersearchresult;
  const [filteredlist, setfilteredlist] = useState([]);
  var searchresult;
  useEffect(() => {
    searchresult =
      allproducts &&
      allproducts.filter((items) =>
        items.title
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      );
    setfilteredlist(searchresult);
  }, [searchInput, allproducts]);
  // setcurrentproduct
  const [, setstoredValue] = useLocalStorage("items");
  // usercredential
  const [storedValue] = useLocalStorage("user");
  //slide Bar
  const [showslideMenu, setshowslideMenu] = useState(false);
  return (
    <>
      <nav className="xs:p-2.5 sm:p-2 md:p-3 lg:p-3.5 border-b border-gray-300 top-0 sticky backdrop-blur-sm z-50">
        <div className="flex  items-center xs:justify-between lg:justify-center">
          {/* logo */}
          <Link to={"/"}>
            <h1 className="logo mr-8">
              <i
                class="ri-menu-4-fill xs:mr-2 lg:hidden"
                onClick={() => setshowslideMenu(!showslideMenu)}
              ></i>
              Shop.Co
            </h1>
          </Link>
          {/* nav-links */}
          <div className="menu-links mr-4 xs:hidden lg:inline-block">
            <ul className="flex items-center">
              <div className="shop-container flex">
                <div>
                  <li
                    className="shop flex items-center mr-5"
                    ref={shopRef}
                    onClick={() => setshowHide(!showHide)}
                    onMouseEnter={() => {
                      optionRef.current.style.display = "inline-block";
                    }}
                  >
                    Shop
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-300 ease-in-out ${
                        showHide ? "rotate-0" : "rotate-180"
                      }`}
                    ></i>
                  </li>
                </div>
                <div
                  className="options bg-white  xs:hidden  absolute lg:top-[54px] xl:top-[60px] lg:rounded-br-xl lg:rounded-bl-xl lg:px-3 lg:py-1"
                  ref={optionRef}
                  style={{ display: showHide ? "inline-block" : "none" }}
                  onMouseLeave={() =>
                    (optionRef.current.style.display = "none")
                  }
                >
                  <ul className="">
                    <li className=" flex items-center lg:m-0.5 transition-all delay-75 duration-100 ease-in-out hover:scale-105">
                      <i class="ri-bar-chart-line lg:mr-1 "></i>Trending
                    </li>
                    <li className=" lg:m-0.5 transition-all delay-75 duration-100 ease-in-out hover:scale-105">
                      <i class="ri-discount-percent-line lg:mr-1"></i>Discounts
                    </li>
                    <li className="lg:m-0.5 transition-all delay-75 duration-100 ease-in-out hover:scale-105">
                      <i class="ri-gift-line lg:mr-1 "></i>Gift Cart
                    </li>
                    <li className=" lg:m-0.5 transition-all delay-75 duration-100 ease-in-out hover:scale-105">
                      <i class="ri-menu-search-line lg:mr-1 "></i>Categories
                    </li>
                  </ul>
                </div>
              </div>
              <Link to={"/onsale"}>
                <li className="mr-5">On Sale</li>
              </Link>
              <Link to={"/newarrivals"}>
                <li className="mr-5">New Arrivals</li>
              </Link>
              <Link to={"/brands"}>
                <li className="mr-5">Brands</li>
              </Link>
            </ul>
          </div>
          {/* search-bar */}
          <div
            className="search-bar flex flex-col items-center border-[1.5px] bg-gray-100 rounded-2xl xl:rounded-3xl lg:mr-3 xs:mr-1 xs:hidden xs:p-[3px] md:p-[4px] lg:p-[4px] lg:flex xl:p-1.5 overflow-hidden"
            ref={searchBarRef}
          >
            <div className="search-container xs:flex">
              <i class="ri-search-line ml-1 mr-1"></i>
              <input
                type="text"
                placeholder="Search for Products"
                className="outline-none bg-gray-100 xs:w-[130px] md:w-[170px] lg:w-[200px] xl:w-[320px] 2xl:w-[500px]"
                onClick={() => {
                  searchRef.current.style.display = "inline-block";
                }}
                onChange={(e) => {
                  setsearchInput(e.target.value);
                }}
              />
            </div>
            <div
              className="search-result overflow-y-auto flex absolute bg-white xs:w-full xs:left-0 xs:top-[35px] xs:rounded-b-xl  lg:left-auto lg:w-[35%] lg:top-[40px] xl:top-[54px] lg:rounded-br-xl lg:rounded-bl-2xl
             "
              onMouseLeave={() => {
                searchRef.current.style.display = "none";
              }}
            >
              <div
                className="search-results-container hidden xs:p-1 lg:p-0"
                ref={searchRef}
                onMouseEnter={() =>
                  (searchRef.current.style.display = "inline-block")
                }
              >
                {filteredlist &&
                  filteredlist.slice(0, 6).map((items) => (
                    <Link to={"/productdetails"}>
                      {" "}
                      <div
                        className="search-item flex items-center xs:w-full lg:m-1 border rounded-3xl xs:m-1 lg:p-1 lg:rounded-full xs:overflow-hidden"
                        key={items.id}
                        onClick={() => {
                          setstoredValue(items.id);
                        }}
                      >
                        <div className="image-container">
                          <img
                            src={items.images[0]}
                            alt={items.slug}
                            className="xs:h-9 lg:h-7 xl:h-11 rounded-full"
                          />
                        </div>
                        <div className="product-info ml-2">
                          <div className="title">
                            <p className="lg:text-[8px] xl:text-[14px]">
                              {items.title}
                            </p>
                          </div>
                          <div className="category">
                            <p className="lg:text-[8px] xl:text-[12px]">
                              {items?.category?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          {/* cart and account */}
          <div className="cart-account-section flex">
            <div className="search">
              <i
                class="ri-search-2-line lg:hidden mr-[6px]"
                onClick={(e) => {
                  searchBarRef.current.style.display = "inline-block";
                  e.target.style.display = "none";
                }}
              ></i>
            </div>
            <div className="cart mr-[4px]">
              <Link to={"/cart"}>
                {cart.length > 0 && (
                  <div className="numberofitems xs:text-[10px] h-2.5 w-2.5 bg-red-500 rounded-full flex justify-center ml-2.5 items-center absolute p-[3px]">
                    <p>{cart.length} </p>
                  </div>
                )}
                <i class="ri-shopping-cart-2-line"></i>
              </Link>
            </div>
            <div className="account ml-[4px]">
              <Link to={storedValue ? `/account` : `/signup`}>
                <i class="ri-user-line"></i>
              </Link>
            </div>
          </div>
        </div>
        {showslideMenu && (
          <Slider setHideMenu={setshowslideMenu} HideMenu={showslideMenu} />
        )}
      </nav>
    </>
  );
};
export default Navbar;
