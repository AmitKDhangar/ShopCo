import { lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOrder } from "../slices/orderslice";
import { useState } from "react";

const Orders = () => {
  const dispatchAction = useDispatch();
  const orders = useSelector((state) => state.order);
  useEffect(() => {
  }, [dispatchAction]);

  const cancelOrder = (order) =>{
      const cnf = confirm("Are you sure ?");
      if(cnf){
         dispatchAction(removeOrder(order))
      }
  }
  return (
    <>
      <div className="orders-container">
        <div className="order-headline flex justify-between items-center xs:mx-4 xs:my-2">
          <p>Orders</p>
          <div className="orders-count flex justify-center items-center">
            <i class="ri-box-1-line"></i>
            <p className="total-orders">{orders.length}</p>
          </div>
        </div>
        <div className="order-queue flex xs:flex-wrap lg:flex-nowrap">
          <div className="orders bg-white xs:m-2 border border-gray-300 xs:rounded-xl xs:p-1 xs:w-full lg:w-[60%]">
            {orders.length ==0 ? (
              <div className="no-orders flex justify-center items-center flex-col">
                 <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-product-8316266-6632286.png" alt="" className="xs:h-36" />
                 <p>No Orders</p>
              </div>
            ): orders.map((order) => (
              <div key={order.id} className="order flex border justify-center  xs:rounded-lg overflow-hidden items-center xs:my-1.5">
                <div className="image-container">
                  <img src={order?.images[0]} alt="" className="xs:h-16 md:h-20 lg:h-20 object-cover" />
                </div>
               <div className="order-detail flex justify-evenly items-center lg:w-[90%] xs:flex-wrap xs:w-[85%] lg:flex-nowrap lg:p-1">
                 <div className="title xs:p-1 md:p-1.5 lg:p-0.5">
                  <p className="font-semibold">Product Name</p>
                  <p>{order.title}</p>
                </div>
                <div className="category xs:p-1 md:p-1.5 lg:p-0.5">
                  <p className="font-semibold">Category</p>
                  <p>{order?.category?.name}</p>
                </div>
                <div className="quantity xs:p-1 md:p-1.5 lg:p-0.5">
                  <p className="font-semibold">Quantity</p>
                  <p>{order?.quantity}</p>
                </div>
                <div className="expected-delivery xs:p-1 md:p-1.5 lg:p-0.5 ">
                  <p className="font-semibold">Expected Delivery</p>
                  <p className="text-red-500">{`service not available`}</p>
                </div>
                <div className="total-charges xs:p-1 md:p-1.5 lg:p-0.5  ">
                  <p className="font-semibold">Total Charge</p>
                  <p className="text-green-500">
                    ${order?.price * order?.quantity -
                      (order?.price * order?.quantity * 20) / 100 +
                      order?.quantity * 20}
                  </p>
                </div>
                <div className="cancel-order-btn">
                  <button
                    className="bg-red-400 rounded font-semibold xs:p-1.5 xs:px-2.5 xs:rounded-2xl"
                    onClick={() => cancelOrder(order.id)}
                  >
                    cancel
                  </button>
                </div>
               </div>
              </div>
            ))}
          </div>
          <div className="total-sumup  bg-white xs:m-4 border border-gray-300 h-fit xs:rounded-xl xs:p-2 xs:w-full lg:w-[35%]">
            <div className="summary">
              <div className="order-summary">
                <p className="font-bold">Total Orders Summary</p>
              </div>
              <div className="total flex justify-between items-center xs:my-1">
                <p>Item Ordered</p>
                <p>{orders.length}</p>
              </div>
              <div className="total flex justify-between items-center xs:my-1">
                <p>Total Item d delivered</p>
                <p>{`0(service is not available)`}</p>
              </div>
              <div className="total flex justify-between items-center xs:my-1">
                <p>Total Expenditure</p>
                <p>{34}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
