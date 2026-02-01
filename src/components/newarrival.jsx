import { Products } from "../services/storedata";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { useLocalStorage } from "../hooks/uselocalstorage";
import { Link, useLocation } from "react-router-dom";
const NewArrival = () => {
  const location = useLocation();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
   // viewall products
  const [viewmore,setviewmore] = useState(false);
  const [defaultProducts,setdefaultProducts] = useState(4);
  const [storedValue,setstoredValue] = useLocalStorage("items");
  const fetchingProducts = async () => {
    try {
      const products = await Products();
      const items = products.data;
      setproduct(items);
    } catch {
      seterror("Unable to fetch");
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchingProducts();
  }, []);

  useEffect(()=>{
    if(viewmore){
      setdefaultProducts(15);
    }
    else{
      setdefaultProducts(4);
    }
  },[viewmore])

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location]);
  return (
    <div className="newarrivals xs:p-2.5 lg:p-6 border-b border-gray-300" id="newarrivals">
      <div className="headline xs:p-1 md:p-4 lg:p-2 xs:mt-3">
        <h1 className="text-center">New Arrivals</h1>
      </div>
      <div className="products flex justify-center items-center lg:flex-wrap rounded-2xl  overflow-y-auto m-1 xs:w-full">
        <div className="loader">{loading && <Loading/>}</div>
        <div className="error">{error &&  <div className="flex flex-col justify-center items-center">
              <img
                src="https://i.pinimg.com/originals/bf/2e/3c/bf2e3c17175ebb5570a5dca9e927346b.gif"
                alt=""
                className="xs:h-48 rounded"
              />
              <p className="text-red-500 xs:text-[10px] lg:text-[13px]">{error}</p>
            </div>}</div>
        <div className="products-utimate-wrapper grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {product && product.slice(0,defaultProducts).map((items) => (
          <div className="product-wrapper cursor-pointer  xs:m-3" id={items.id}>
            <div className="product-container  flex justify-center items-center transition-all duration-1000 ease-in-out" onClick={()=>{setstoredValue(items.id)}}>
              <Link to={'/productdetails'}><img src={items.images[0]} alt="" className="xs:rounded-lg" /></Link>
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
      <div className="viewall flex justify-center items-center" onClick={()=>{`${setviewmore(!viewmore)} , ${viewmore ? window.scrollTo({ top: 600, behavior: "smooth" }) : ""}`}}>
        <p className="viewall-btn border-gray border rounded-3xl px-8 p-2 cursor-pointer transition-opacity delay-75 ease-in-out hover:bg-gray-50">
          View {viewmore ? 'Less' : "All"}
        </p>
      </div>
    </div>
  );
};

export default NewArrival;
