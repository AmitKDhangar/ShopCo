import Party from "../assets/BrowsebyDressStyle/Party.png";
import Gym from "../assets/BrowsebyDressStyle/Gym.png";
import Formal from "../assets/BrowsebyDressStyle/Formal.png";
import Casual from "../assets/BrowsebyDressStyle/Casual.png";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/uselocalstorage";
const BrowseByDressStyle = () => {
  const [, setstoredValue] = useLocalStorage("category-item");
  return (
    <>
      <div className="browsebydressstyle flex justify-center items-center">
        <div className="browsebydresstyle-container bg-[#F0F0F0] rounded-xl xs:m-2.5 p-1 xs:w-[100%] sm:w-[80%] lg:w-[95%] ">
          <div className="broswerbydrestyle-headline xs:p-4">
            <h1 className="text-center font-extrabold">
              Browse By Dress Style
            </h1>
          </div>
          <div className="dress-styles pb-8 flex justify-center items-center xs:flex-wrap lg:flex-wrap xs:gap-1.5 md:gap-2">
            {/* dress-style- */}
            <Link to={"/category"}>
              <div
                className="dress-style border-2 bg-white flex items-start lg:ml-2.5 overflow-hidden  xs:rounded-2xl xs:p-2 md:p-2.5 lg:p-3 xl:p-6 2xl:p-9 cursor-pointer xs:w-full sm:w-[280px] md:w-[320px] xl:w-[400px]"
                onClick={() => setstoredValue("Casual")}
              >
                <div className="dress-style-name z-10">
                  <p className="xs:px-[35px] sm:px-[10px] md:px-[29px] lg:px-[12px] xl:px-[0px] py-2.5 font-extrabold">Casual</p>
                </div>
                <div className="dress-style-img">
                  <img
                    src={Casual}
                    alt=""
                    class="casual-image xs:h-24 lg:h-34 xl:h-38  xs:scale-[160%] lg:scale-[220%] object-fit xs:mx-10 sm:mx-24 md:mx-[90px] lg:mx-[120px] xl:scale-[250%] xl:mx-[195px] object-fit transition-all delay-150 duration-600 ease-in-out hover:scale-[225%]"
                  />
                </div>
              </div>
            </Link>
            {/* dress-style- */}
            <Link to={"/category"}>
              <div
                className="dress-style border-2 bg-white flex justify-between items-start overflow-hidden  xs:rounded-2xl xs:p-2 md:p-2.5 lg:p-3 xl:p-6 2xl:p-9 cursor-pointer xs:w-full sm:w-[280px] md:w-[320px] xl:w-[600px]"
                onClick={() => setstoredValue("Formal")}
              >
                <div className="dress-style-name z-10">
                  <p className="xs:px-[30px] sm:px-[1px] md:px-[15px] lg:px-[10px] xl:px-[0px] py-2.5 font-extrabold">Formal</p>
                </div>
                <div className="dress-style-img">
                  <img
                    src={Formal}
                    alt=""
                    class="formal-image  xs:h-24 lg:h-34 xl:h-38 xs:mx-12 sm:mx-28 lg:mx-15 xl:mx-64  xs:scale-[180%] lg:scale-[195%] xl:scale-[280%]  object-fit
                    transition-all delay-150 duration-600 ease-in-out hover:scale-[225%]"
                  />
                </div>
              </div>
            </Link>
            {/* dress-style- */}
            <Link to={"/category"}>
              <div
                className="dress-style border-2 bg-white flex justify-between items-start overflow-hidden xs:px-9 lg:px-6 xs:rounded-2xl xs:p-2 md:p-2.5 lg:p-3 xl:p-6 2xl:p-9 cursor-pointer xs:w-full sm:w-[280px] md:w-[320px] xl:w-[600px]"
                onClick={() => setstoredValue("Party")}
              >
                <div className="dress-style-name z-10">
                  <p className="xs:px- py-2.5 font-extrabold">Party</p>
                </div>
                <div className="dress-style-img xs:ml-12">
                  <img
                    src={Party}
                    alt=""
                    class="xs:h-24 lg:h-34 xl:h-38  xs:scale-[170%] xs:mr-4 lg:scale-[190%] object-fit transition-all delay-150 duration-600 ease-in-out hover:scale-[225%]"
                  />
                </div>
              </div>
            </Link>
            {/* dress-style- */}
            <Link to={"/category"}>
              <div
                className="dress-style border-2 bg-white flex justify-between items-start lg:ml-2.5 overflow-hidden xs:px-10 xl:px-0 lg:px-6 xs:rounded-2xl xs:p-2 md:p-2.5 lg:p-3 xl:p-6 2xl:p-9 cursor-pointer xs:w-full sm:w-[280px] md:w-[320px] xl:w-[400px]"
                onClick={() => setstoredValue("Gym")}
              >
                <div className="dress-style-name z-10">
                  <p className="xs:px- py-2.5 font-extrabold">Gym</p>
                </div>
                <div className="dress-style-img xs:ml-24">
                  <img
                    src={Gym}
                    alt=""
                    class="xs:h-24 lg:h-34 xl:h-38  xs:scale-[200%] xs:mr-4 lg:scale-[290%] lg:mr-3  object-fi transition-all delay-150 duration-600 ease-in-out hover:scale-[225%]"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByDressStyle;
