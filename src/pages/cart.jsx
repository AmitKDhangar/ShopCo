import { lazy, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeCart} from '../slices/cartslice'
import  EmptyCart from '../pages/emptycart'
import {useLocalStorage} from '../hooks/uselocalstorage';
import { addOrder } from "../slices/orderslice";
import { Link } from "react-router-dom";
const OrderPlaced = lazy(()=> import('../pages/ordersuccessful'));
import { OrderedContext } from "../context/ordercontext";
const Cart = () => {
  const [productID, setProductID] = useState(0);
  const {setOrderPlaced} = useContext(OrderedContext);
  const dispatchAction = useDispatch();
  const data = useSelector((state) => state.cart);

  // Define handleOrdered to update the ordered state
  const handleOrdered = (value) => {
     return setordered(value);
  };

  // remove product
  useEffect(() => {
    dispatchAction(removeCart(productID));
  }, [productID]);
  // order summary
  const [storedValue, setstoredValue] = useLocalStorage("order-summary");
  return (
    <>
        <OrderPlaced handleOrdered={handleOrdered}/>
      <div className="location-path"></div>
      <div className="cart-headline xs:py-2 xs:px-2 sm:py-2.5 sm:px2.5 md:px-3 md:py-3 lg:px-4 py-2 xl:px-6">
        <h4>Your cart</h4>
      </div>
      <div className="cart-container flex justify-evenly xs:flex-col lg:flex-row xs:m-1 ">
        <div className="cart-products flex xs:flex-col lg:w-[49%] rounded-2xl border border-gray-300 xs:m-1 xs:p-0.5">
          { data.length >= 1 ? (data.map((items) => (
            <div className="product-wrapper flex flex-col xs:m-0.5 ">
              <div className="product-container flex justify-between border-b  xs:p-[3px] lg:p-1 x   cursor-pointer" onClick={()=>{setstoredValue(items)}}>
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
                    class="ri-delete-bin-6-line text-red-500 cursor-pointer"
                    onClick={() => setProductID(items?.id)}
                  ></i>
                  <div className="quantity bg-[#F0F0F0] xs:w-full rounded-2xl flex items-center justify-evenly xs:p-0.5">
                    <p className="flex items-center xs:px-2">Quantity {items.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))) : <EmptyCart/>}
        </div>
        <div className="order-summary border border-gray-300 xs:rounded-2xl xs:m-1 xs:p-1 lg:w-[45%]  lg:p-2 h-fit">
          <div className="order-summary-headline xs:py-2 px-2">
            <p className="font-bold">Order Summary</p>
          </div>
          <div className="summary-details xs:p-1">
            {storedValue ? (<>
            <div className="subtotal flex justify-between items-center xs:px-1.5 xs:py-0.5 lg:px-2 lg:py-1">
              <p>{`Subtotal(${storedValue?.quantity})`}</p>{" "}
              <p className="font-semibold">${storedValue?.price*storedValue?.quantity}</p>
            </div>
            <div className="discount flex justify-between items-center xs:px-1.5 xs:py-0.5 lg:px-2 lg:py-1">
              <p>{`Discount(20%)`}</p>{" "}
              <p className="font-semibold text-red-500">${storedValue?.price*storedValue?.quantity*20/100}</p>
            </div>
            <div className="delivery flex justify-between items-center xs:px-1.5 xs:py-0.5 lg:px-2 lg:py-1 border-b border-gray-400">
              <p>Delivery Fee</p> <p className="font-semibold">${20*storedValue?.quantity}</p>
            </div>
            <div className="total flex justify-between items-center xs:px-1.5 xs:py-0.5 lg:px-2 lg:py-1">
              <p>Total</p> <p className="font-semibold">${storedValue?.price*storedValue?.quantity-storedValue?.price*storedValue?.quantity*20/100+20*storedValue?.quantity}</p>
            </div>
            <div className="apply-coupon flex justify-between ">
              <div className="coupon flex items-center bg-slate-200 rounded-3xl flex-1 xs:p-[5px]">
                <i class="ri-coupon-3-line mx-1 xs:text-sm"></i>
                <input
                  type="text"
                  placeholder="Enter Promo code [shopco]"
                  className="bg-slate-200 xs:p-1 w-full"

                />
              </div>
              <button className="bg-black text-white px-6 rounded-3xl ml-2">
                Apply
              </button>
            </div>
            <div className="order flex justify-center items-center">
             <button className="flex items-center bg-black text-white px-10 py-2 m-2 rounded-3xl" onClick={()=> (dispatchAction(addOrder(storedValue),setOrderPlaced(true)))}>
                <p>Order </p>
                <i class="ri-arrow-right-line xs:ml-1"></i>
              </button>
            </div>
            </>): <div className="no-order-summary flex justify-center items-center flex-col">
              <img src={`https://cdn.dribbble.com/userupload/20511136/file/original-049f42c6f7c1a8a2b653a1341594bdd3.gif`} alt="" className="xs:h-36" />
              <p>Select Product or (add to card) to know summary</p> 
              </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
