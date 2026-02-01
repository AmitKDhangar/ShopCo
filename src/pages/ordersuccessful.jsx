import { useContext, useState } from "react";
import { OrderedContext } from "../context/ordercontext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const OrderPlaced = () => {
  const {OrderPlaced,setOrderPlaced} = useContext(OrderedContext);
  const navigate = useNavigate();
  if(OrderPlaced){
    setTimeout(()=>{
    setOrderPlaced(false);
    navigate('/orders');
  },2000)
  }
  return (
    <>
       {OrderPlaced && (<div className="order-placed absolute z-30 xs:w-[100%] xs:h-[100lvh] bg-white flex justify-center items-center flex-col">
        <div className="image-container">
          <img
            src="https://cdn.dribbble.com/userupload/23236934/file/original-7ea85c6fe9ce1164bef4e89b3e560a6c.gif"
            alt=""
            className="h-48"
          />
        </div>
        <div className="btntoorders">
          <Link to={'/orders'}><button>
            Go to orders <i className="ri-arrow-right-up-long-line"></i>
          </button></Link>
        </div>
      </div>)}
    </>
  );
};

export default OrderPlaced;