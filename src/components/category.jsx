import useLocalStorge from "../hooks/uselocalstorage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loading from "../components/loading";
import FetchingCategories from "../slices/asyncthunks/categoryasyncthunk";
import { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Category = () => {
  const location = useLocation();
  const [Pricevisible, setPricevisible] = useState(false);
  const [colorvisible, setcolorvisible] = useState(false);
  const [sizevisible, setsizevisible] = useState(false);
  const [dressvisible, setdressvisible] = useState(false);
  const { storedValue } = useLocalStorge("category-item");
  const { setstoredValue } = useLocalStorge("items");
  const dispatchAction = useDispatch();
  const { data, loading, error } = useSelector((state) => state.category);
  const categorydata = data.data;

  useEffect(() => {
    dispatchAction(FetchingCategories(1));
  }, []);

  // Pagination
  // Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const itemperPage = 15;
  const totalPages = Math.ceil(data.length / itemperPage);
  const startIndex = (currentPage - 1) * itemperPage;
  const endIndex = startIndex + itemperPage;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <div className="category-page">
        <div className="location"></div>
        <div className="category-container flex p-2 xs:flex-col lg:flex-row">
          <div className="filters-container flex xs:flex-row lg:flex-col border-2 border-gray-300 m-2 p-2 h-fit rounded-2xl xs:hidden lg:inline-flex xs:w-[280px]">
            <div className="filters">
              <div className="filter-btn border-b border-gray-400 h-auto">
                <div className="filter-headline flex justify-between p-2 border-b border-gray-400">
                  <p className="headline font-bold">Filters</p>
                  <i class="ri-filter-line text-[#00000099] cursor-pointer"></i>
                </div>
                <div className="filters-category p-2">
                  <ul>
                    <li className="flex justify-between items-center p-1">
                      T-shirts
                      <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Shorts{" "}
                      <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Shirts{" "}
                      <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Hoodie{" "}
                      <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Jeans <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="price p-2 border-b border-gray-400">
              <div className="price-headline flex justify-between items-center">
                <p className="headline font-bold">Price</p>
                <i
                  class="ri-arrow-up-s-line cursor-pointer "
                  onClick={(e) => {
                    setPricevisible(!Pricevisible);
                    e.target.style.transform = Pricevisible
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                    e.target.style.transition = "transform 0.3s ease-in-out";
                  }}
                ></i>
              </div>
              {!Pricevisible && (
                <div className="range-container flex">
                  <p className="xs:text-[8px] xs:px-[1px]">$10</p>{" "}
                  <input type="range" className="w-full cursor-pointer" />{" "}
                  <p className="xs:text-[8px] xs:px-[1px]">$1000</p>
                </div>
              )}
            </div>
            <div className="colors p-2 border-b border-gray-400">
              <div className="colors-headline flex justify-between items-center">
                <p className="headline font-bold">Colors </p>
                <i
                  class="ri-arrow-up-s-line cursor-pointer"
                  onClick={(e) => {
                    setcolorvisible(!colorvisible);
                    e.target.style.transform = colorvisible
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                    e.target.style.transition = "transform 0.3s ease-in-out";
                  }}
                ></i>
              </div>
              <div className="colors">
                {colorvisible && (
                  <ul className="flex flex-wrap p-1 cursor-pointer">
                    <li className="xs:h-6 xs:w-6 bg-red-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-blue-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-violet-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-green-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-yellow-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-red-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-blue-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-violet-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-green-300 inline-block rounded-full m-1 hover:border border-black"></li>
                    <li className="xs:h-6 xs:w-6 bg-yellow-300 inline-block rounded-full m-1 hover:border border-black"></li>
                  </ul>
                )}
              </div>
            </div>
            <div className="sizes p-2 border-b border-gray-400">
              <div className="sizes-headline flex justify-between items-center">
                <p className="headline font-bold">Size</p>
                <i
                  class="ri-arrow-up-s-line cursor-pointer"
                  onClick={(e) => {
                    setsizevisible(!sizevisible);
                    e.target.style.transform = sizevisible
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                    e.target.style.transition = "transform 0.3s ease-in-out";
                  }}
                ></i>
              </div>
              <div className="sizes">
                {sizevisible && (
                  <ul className="flex flex-wrap">
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      Small
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      Large
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      Medium
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      Large
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      Extra Large
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      XX Large
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      3X Large
                    </li>
                    <li className="bg-gray-200 rounded-2xl m-1 p-1 hover:bg-black hover:text-white cursor-pointer">
                      4x Large
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="dress-style p-2 mb-2">
              <div className="dress-style-headline flex justify-between">
                <p className="headline font-bold">Dress-style</p>
                <i
                  class="ri-arrow-up-s-line cursor-pointer"
                  onClick={(e) => {
                    setdressvisible(!dressvisible);
                    e.target.style.transform = dressvisible
                      ? "rotate(0deg)"
                      : "rotate(180deg)";
                    e.target.style.transition = "transform 0.3s ease-in-out";
                  }}
                ></i>
              </div>
              <div className="dress-styles">
                {dressvisible && (
                  <ul>
                    <li className="flex justify-between items-center p-1">
                      Casual
                      <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Formal{" "}
                      <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Party <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                    <li className="flex justify-between items-center p-1">
                      Gym <i class="ri-arrow-right-s-line cursor-pointer"></i>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <button className="bg-black text-white rounded-2xl p-2">
              Apply Filter
            </button>
          </div>
          <div className="products m-2 lg:w-full">
            <div className="headline flex justify-between xs:justify-start items-center xs:flex-row-reverse">
              <h4 className="font-bold">{storedValue}</h4>
              <i class="ri-filter-line xs:p-0.5 lg:hidden"></i>
              <p className="flex font-semibold">
                Showing 1 of 1 products{" "}
                <p className="ml-2">sort by : Most Popular</p>
              </p>
            </div>
            <div className="products">
              <div className="loadinganderror flex justify-center items-center">
                {loading && <Loading />}{" "}
                {error && <p className="text-red-300">{}</p>}
              </div>
              <div className="utimate-wrapper flex flex-col">
                <div className="product-wrapper grid justify-evenly xs:grid-cols-2 md:grid-col-3 lg:grid-cols-3 xl:grid-cols-4 ">
                  {categorydata &&
                    categorydata.slice(0, 10).map((items) => (
                      <div className="product-container m-2.5" key={items.id}>
                        <div
                          className="product-image rounded-2xl border-2 border-dotted border-gray-300 w-fit "
                          onClick={() => setstoredValue(items.id)}
                        >
                          <Link to={"/productdetails"}>
                           
                            <img
                              src={items?.images[0]}
                              alt=""
                              className="lg:h-28 xl:h-36 rounded-2xl hover:scale-95"
                            />
                          </Link>
                        </div>
                        <div className="product-info p-1.5">
                          <div className="title">
                            <p className="font-bold">
                              {items.title.slice(0, 5)}
                            </p>
                          </div>
                          <div className="rating flex items-center">
                            <img
                              src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png"
                              alt=""
                              className="xs:h-4"
                            />
                            <p className="ml-2">5.0/5.0</p>
                          </div>
                          <div className="price">
                            <p className="font-bold">${items.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="pagination w-full">
                  <div className="pages flex justify-between ">
                    <div
                      className="previous-arrow flex items-center border border-black px-1 rounded-full cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setcurrentPage((prev) => prev - 1);
                      }}
                    >
                      <i class="ri-arrow-left-line mr-0.5"></i> <p>Previous</p>
                    </div>
                    <ul className="flex justify-evenly xs:w-full lg:w-[40%]">
                      <li className=" flex justify-center items-center border-black border xs:h-5 xs:w-5 lg:h-8 lg:w-8 lg:m-0.5 rounded-full cursor-pointer bg-gray-500">
                        1
                      </li>
                      <li className="bg-gray-200  flex justify-center items-center border-black border xs:h-5 xs:w-5 lg:h-8 lg:w-8 lg:m-0.5 rounded-full cursor-pointer">
                        2
                      </li>
                      <li className="bg-gray-200  flex justify-center items-center border-black border xs:h-5 xs:w-5 lg:h-8 lg:w-8 lg:m-0.5 rounded-full cursor-pointer">
                        3
                      </li>
                      <li className="bg-gray-200  flex justify-center items-center border-black border xs:h-5 xs:w-5 lg:h-8 lg:w-8 lg:m-0.5 rounded-full cursor-pointer">
                        4
                      </li>
                      <li className="bg-gray-200  flex justify-center items-center border-black border xs:h-5 xs:w-5 lg:h-8 lg:w-8 lg:m-0.5 rounded-full cursor-pointer">
                        5
                      </li>
                    </ul>
                    <div
                      className="next-arrow flex items-center border border-black px-1 rounded-full cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setcurrentPage((prev) => prev + 1);
                      }}
                    >
                      <p>Next</p> <i class="ri-arrow-right-line ml-0.5"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
