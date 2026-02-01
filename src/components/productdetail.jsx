import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchingProducts from "../slices/asyncthunks/productsasyncthunk";
import FetchCategories from "../slices/asyncthunks/categoryasyncthunk";
import { useLocalStorage } from "../hooks/uselocalstorage";
import Loading from "./loading";
import { Link, useLocation } from "react-router-dom";
import { addCart } from "../slices/cartslice";
import {addwishList} from '../slices/wishlistslice'
import { removewishList } from "../slices/wishlistslice";
import { useContext } from "react";
import {NotificationContext} from '../context/notificationcontext';
const ProductDetails = () => {
  // notification 
  const {message,setmessage}=useContext(NotificationContext);
  // state for current image
  const [curImg, setcurImg] = useState(0);
  // dispatch functions for dispatching action
  const dispatchAction = useDispatch();
  // for getting current selected product from local storage
  const [storedValue, setstoredValue] = useLocalStorage("items");
  // quantity of the product
  const [quantity, setquantity] = useState(1);
  // fetching data from the store
  const { data, loading, error } = useSelector((state) => state.product);
  const items = data.data;
  // fetching data from the categories from the store;
  const {
    data: suggested,
    loading: load,
    error: categoryerror,
  } = useSelector((state) => state.category);
  
  const suggestedProducts = suggested?.data;
  // filtering the selected item out of the list.
  const selectedProduct =
    items && items.find((items) => items.id === Number(storedValue));
  // categoryID of the selected Product;
  const categoryID = selectedProduct?.category?.id;
  // current path of the application
  const currentlocation = useLocation();
  // dispaching actions for products
  useEffect(() => {
    dispatchAction(fetchingProducts());
  }, [dispatchAction]);

  useEffect(() => {
    if (categoryID) {
      dispatchAction(FetchCategories(categoryID));
    }
  }, [categoryID]);
  // product to be add in the cart
  const addProduct = {
    ...selectedProduct,
    quantity: quantity,
  };
  const cartdata = useSelector((state) => state.cart);
  const [productexits, setproductexits] = useState();
  // add to cart
  const addtocartRef = useRef();
  const addtocart = () => {
    if (cartdata.find((items) => items.id === addProduct.id)) {
      setproductexits("Product is already in the cart");
      addtocartRef.current.disabled = true;
      addtocartRef.current.style.cursor = "not-allowed";
      setmessage("product is already added in cart")
    } else {
      dispatchAction(addCart(addProduct));
      setmessage("product is successfully added in cart")
    }
  };

  // wishlist
  const [wishlist,setwishlist] = useState(true);
  let wishlistRef = useRef();
  const addWishListproduct = ()=>{
    if(wishlist){
      setmessage("Product has been added in Wishlist");
      dispatchAction(addwishList(selectedProduct));
    }
    else{
     setmessage("Product has not been removed in Wishlist");
    dispatchAction(removewishList(selectedProduct?.id));
    }
  }

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location]);

  return (
    <>
      {loading ? (
        <div className="loader flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="product-details-container">
          <div className="location flex items-center xs:px-2 xs:py-1 md:py-2 lg:py-2.5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8259/8259448.png"
              alt=""
              className="xs:px-1 xs:h-3 md:h-4 md:px-2 lg:px-3 lg:h-5 "
            />
            <p className="font-semibold">
              home{currentlocation.pathname}
            </p>
          </div>
          <div className="product-detail flex justify-center xs:flex-col lg:flex-row lg:p-1.5 xl:p-2.5">
            <div className="product-image-container flex justify-evenly items-start xs:flex-col-reverse lg:flex-row lg:w-[70%] xl:w-[60%]">
              <div className="imageslide flex flex-col justify-evenly xs:w-full lg:w-auto xs:flex-row lg:flex-col xs:m-1">
                {selectedProduct?.images.map((item, id) => (
                  <div
                    key={id}
                    className="image-container flex justify-evenly border-2 border-black rounded-md overflow-hidden lg:my-1"
                  >
                    <img
                      src={item}
                      alt={`product-${id}`}
                      onClick={() => setcurImg(id)}
                      className="xs:h-[88px] sm:h-[100px] md:h-[120px] lg:h-24 xl:h-32 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="image xs:rounded-lg overflow-hidden xs:p-2 rounded-md">
                <img
                  src={selectedProduct?.images[curImg]}
                  alt=""
                  className=" rounded-lg lg:h-[410px] xl:h-[500px] cursor-pointer"
                />
              </div>
            </div>
            <div className="product-details xs:p-2.5 lg:w-1/2  ">
              <div className="product-title-and-wishlist-icon flex items-center">
                <div className="product-title xs:w-[95%]">
                <h4>{selectedProduct?.title}</h4>
              </div>
              <div className="wishlist-container xs:w-[5%] xs:m-2">
                <i
                  className={`ri-heart-3-line cursor-pointer text-lg ${wishlist ? 'text-black' : 'text-red-500'}`}
                  ref={wishlistRef}
                  onClick={()=>{addWishListproduct(setwishlist(!wishlist))}}
                ></i>
              </div>
              </div>
              <div className="rating"></div>
              <div className="price xs:p-1">
                <p className="flex items-center">
                  ${selectedProduct?.price}
                  <p className="mx-2 text-gray-400 line-through">
                    {" "}
                    ${selectedProduct?.price + 10}
                  </p>
                  <p className="discount flex mx-1 bg-red-300 justify-center items-center rounded-xl p-0.5 text-red-500">
                    -{35}%
                  </p>
                </p>
              </div>
              <div className="description border-b-2 border-gray-300 xs:pb-1.5">
                <p>{selectedProduct?.description}</p>
              </div>
              <div className="color-selection border-b-2 border-gray-300  xs:py-1">
                <p>Select Color</p>
                <div className="pick-colors flex">
                  <div className="color border-2 xs:h-6 xs:w-6 xs:m-1 lg:h-7 lg:w-7 rounded-full bg-[#4F4631] inline-block cursor-pointer hover:border-black"></div>
                  <div className="color  border-2 xs:h-6 xs:w-6 xs:m-1 lg:h-7 lg:w-7 rounded-full bg-[#314F4A] inline-block cursor-pointer hover:border-black"></div>
                  <div className="color  border-2 xs:h-6 xs:w-6 xs:m-1 lg:h-7 lg:w-7 rounded-full bg-[#31344F] inline-block cursor-pointer hover:border-black"></div>
                </div>
              </div>
              <div className="size-selection border-b-2 border-gray-300 xs:py-1 overflow-hidden">
                <p>Choose Size</p>
                <div className="sizes flex justify-around items-center flex-wrap  xs:p-1.5 cursor-pointer">
                  <div className="size border xs:p-1 xs:m-1 bg-[#F0F0F0] rrounded-lgg:rounded-2xl xs:rounded-3xl lg:px-3 lg:py-1 hover:bg-black hover:text-[#fffff] ">
                    <p className="text-gray-500">Small</p>
                  </div>
                  <div className="size border  xs:p-1 xs:m-1 bg-[#F0F0F0] rounded-lg lg:rounded-2xl xs:rounded-3xl lg:px-3 lg:py-1 hover:bg-black hover:text-white cursor-pointer">
                    <p className="text-gray-500">Medium</p>
                  </div>
                  <div className="size border  xs:p-1 xs:m-1 bg-[#F0F0F0] rounded-lg lg:rounded-2xl xs:rounded-3xl lg:px-3 lg:py-1 hover:bg-black hover:text-white cursor-pointer">
                    <p className="text-gray-500">Large</p>
                  </div>
                  <div className="size border  xs:p-1 xs:m-1 bg-[#F0F0F0] rounded-lg lg:rounded-2xl xs:rounded-3xl lg:px-3 lg:py-1 hover:bg-black hover:text-white cursor-pointer">
                    <p className="text-gray-500">X-Large</p>
                  </div>
                  <div className="size border  xs:p-1 xs:m-1 bg-[#F0F0F0] rounded-lg lg:rounded-2xl xs:rounded-3xl lg:px-3 lg:py-1 hover:bg-black hover:text-white cursor-pointer">
                    <p className="text-gray-500">3X-Large</p>
                  </div>
                  <div className="size border  xs:p-1 xs:m-1 bg-[#F0F0F0] rounded-lg lg:rounded-2xl xs:rounded-3xl lg:px-3 lg:py-1 hover:bg-black hover:text-white cursor-pointer">
                    <p className="text-gray-500">4X-Large</p>
                  </div>
                </div>
              </div>
              <div className="quantityandaddtocart-wrapper">
                <div className="quantityandcart flex justify-evenly xs:py-2.5 ">
                  <div className="quantity bg-[#F0F0F0] xs:w-[30%] rounded-2xl flex items-center justify-evenly xs:p-0.5">
                    <i
                      className="ri-subtract-line cursor-pointer"
                      onClick={() => setquantity((q) => Math.max(1, q - 1))}

                    ></i>{" "}
                    <p>{quantity}</p>
                    <i
                      className="ri-add-line cursor-pointer"
                      onClick={() => {
                        setquantity(quantity + 1);
                      }}
                    ></i>
                  </div>
                  <div className="addtocart xs:w-[65%] lg:w-[60%]">
                    <button
                      className="bg-black xs:w-full  rounded-2xl xs:p-1.5 lg:p-2 lg:rounded-3xl"
                      ref={addtocartRef}
                    >
                      <p className="text-white" onClick={addtocart}>
                        Add to cart
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews"></div>
          <div className="suggestion-section xs:m-1.5 lg:p-6 border-b border-gray-300">
            <div className="headline xs:p-1 md:p-4 lg:p-2">
              <h1 className="text-center">You Might Like this</h1>
            </div>
            <div className="products flex justify-center items-center rounded-2xl  overflow-y-auto m-1 xs:w-full">
              <div className="loader">{loading && <Loading />}</div>
              <div className="error">
                {error && (
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://i.pinimg.com/originals/bf/2e/3c/bf2e3c17175ebb5570a5dca9e927346b.gif"
                      alt=""
                      className="xs:h-5 lg:h-20"
                    />
                    <p className="text-red-500">{error}</p>
                  </div>
                )}
              </div>
              {suggestedProducts &&
                suggestedProducts.slice(0, 5).map((items) => (
                  <div
                    className="product-wrapper cursor-pointer xs:m-4"
                    id={items?.id}
                  >
                    <div
                      className="product-container bg-[#F0EEED] flex justify-center items-center"
                      onClick={() => {
                        setstoredValue(items?.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <Link to={"/productdetails"}>
                        <img
                          src={items?.images[0]}
                          alt=""
                          className="xs:rounded-lg"
                        />
                      </Link>
                    </div>
                    <div className="text-container xs:m-1">
                      <p className="font-extrabold">
                        {items?.title?.slice(0, 25)}
                      </p>
                      <div className="rating flex items-center">
                        <img
                          src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png"
                          alt=""
                          className="xs:h-4"
                        />
                        <p className="ml-2">5.0/5.0</p>
                      </div>
                      <p className="flex">
                        ${items?.price}
                        <p className="mx-2 text-gray-400 line-through">
                          {" "}
                          ${items?.price + 10}
                        </p>
                        <p className="discount flex mx-1 bg-red-300 justify-center items-center rounded-xl p-0.5 text-red-500">
                          -{35}%
                        </p>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
