import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProducts } from "../slices/asyncthunks/productsasyncthunk";
import Loading from "../components/loading";
const OnSale = () => {
  // getting products from the store
  const {data,loading,error} = useSelector((state) => state.product);;
  // dispatch action for asyncthunk
  const dispatchAction = useDispatch();
  // onsale reactive variable
  const [onsale,setonsale] = useState();
  // filtering onsale product based on the price range
 const filteredProducts = data?.data?.filter(
  (item) => item.price >= 50 && item.price <= 150);

 const [viewmore,setviewmore] = useState(false);
  const [defaultProducts,setdefaultProducts] = useState(4);
 // calling asynthunk using useeffect on mount of the component.
  useEffect(() => {
    dispatchAction(fetchingProducts());
  }, [dispatchAction]);

  useEffect(()=>{
    if(viewmore){
      setdefaultProducts(15);
    }
    else{
      setdefaultProducts(4);
    }
  },[viewmore])
  return (
    <>
      <div className="onsale-container">
        <div className="onsale-headline flex justify-center items-center xs:p-2 xs:m-2">
          <p>OnSale Products</p>
        </div>
        <div className="products flex flex-col justify-center items-center lg:flex-wrap rounded-2xl  overflow-y-auto m-1 xs:w-full">
        <div className="loader">{loading && <Loading />}</div>
        <div className="error">{error &&  <div className="flex flex-col justify-center items-center">
              <img
                src="https://i.pinimg.com/originals/bf/2e/3c/bf2e3c17175ebb5570a5dca9e927346b.gif"
                alt=""
                className="xs:h-54"
              />
              <p className="text-red-500 xs:text-[16px]">{error}</p>
            </div>}</div>
        <div className="products-utimate-wrapper grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {filteredProducts && filteredProducts.slice(0,defaultProducts).map((items) => (
          <div className="product-wrapper cursor-pointer  xs:m-3" id={items.id}>
            <div className="product-container flex justify-center items-center transition-all duration-1000 ease-in-out" onClick={()=>{setstoredValue(items.id)}}>
              <Link to={'/productdetails'}><img src={items.images[0]} alt="" className="xs:rounded-lg object-fit" /></Link>
            </div>
            <div className="text-container xs:m-1">
              <p className="font-extrabold">{items.title.slice(0, 25)}</p>
              <div className="rating flex items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png"
                  alt=""
                  className="xs:h-4"
                />
                <p className="ml-2">5.0/5.0</p>
              </div>
              <p className="flex">
                ${items.price}
                <p className="mx-2 text-gray-400 line-through">
                  {" "}
                  ${items.price + 10}
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
      <div className="viewall flex justify-center items-center" onClick={()=>{setviewmore(!viewmore)}}>
        <p className="viewall-btn border-gray border rounded-2xl px-8 p-1 cursor-pointer">
          View {viewmore ? 'Less' : "All"}
        </p>
      </div>
      </div>
    </>
  );
};

export default OnSale;
