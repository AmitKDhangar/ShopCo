import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocalStorage} from '../hooks/uselocalstorage';
import {removewishList} from '../slices/wishlistslice'
import { addOrder } from "../slices/orderslice";
import { Link } from "react-router-dom";
const EmptyWishList = lazy(() => import('../pages/emptywishlist'));
const Cart = () => {
  const [productID, setProductID] = useState(0);
  const dispatchAction = useDispatch();
  const data = useSelector((state) => state.wishlist);
  // remove product from wishlist
  useEffect(() => {
   dispatchAction(removewishList(productID));
  }, [productID]);
  // wishlist summary
  const [storedValue,setstoredValue] = useLocalStorage("wishlist-summary");
  useEffect(()=>{

  },[setstoredValue])
  return (
    <>
      <div className="location-path"></div>
      <div className="wishlist-headline xs:py-2 xs:px-2 sm:py-2.5 sm:px2.5 md:px-3 md:py-3 lg:px-4 py-2 xl:px-6">
        <h4>Your wishlist</h4>
      </div>
      <div className="wishlist-container flex justify-evenly xs:flex-col lg:flex-row ">
        <div className="wishlist-products flex xs:flex-col lg:w-[70%] rounded-xl border border-gray-400 xs:m-1 xs:p-0.5">
          { data?.length >= 1 ? (data.map((items) => (
            <div className="product-wrapper flex flex-col xs:m-0.5 " key={items?.id}>
              <div className="product-container flex justify-between border-b border-gray-400  xs:p-[3px] lg:p-1 cursor-pointer" onClick={()=> setstoredValue(items)}>
                <div className="product-info flex">
                  <div className="image-container">
                    <img
                      src={items?.images[0]}
                      alt=""
                      className="xs:h-12 xs:m-1 xs:rounded-md lg:h-16 xl:h-24"
                    />
                  </div>
                  <div className="information xs:p-0.5 xs:py-2">
                    <div className="title">
                      <p className="font-bold">{items?.title}</p>
                    </div>
                    <div className="category"><p>{items?.category?.name}  </p></div>
                    <div className="price">
                      <p>${items?.price}</p>
                    </div>
                  </div>
                </div>
                <div className="remove-items flex justify-between items-end flex-col">
                  <i
                    className="ri-delete-bin-6-line text-red-500 cursor-pointer"
                    onClick={() => setProductID(items?.id)}
                  ></i>
                  <div className="quantity xs:w-full rounded-2xl flex items-center justify-evenly xs:p-0.5">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          ))) : <EmptyWishList/>}
        </div>  
      </div>
    </>
  );
};

export default Cart;
