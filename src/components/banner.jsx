import BannerModels from "../assets/BannerModels.jpg";
const Banner = () => {
  return (
    <div className="flex xs:flex-col lg:flex-row">
      <div className="banner-section xs:w-full lg:w-1/2 xs:p-1.5 sm:p-1.5 md:p-2.5 lg:p-4.5 xl:p-8">
        <div className="punchline">
          <h1 className="xs:my-.5 xs:mx-2 xs:leading-[28px] sm:leading-[28px] md:leading-[30px] lg:leading-[40px] xl:leading-[47px]">Find Clothes that matches Your Style</h1>
        </div>
        <div className="punch-line-detail  xs:my-1 xs:mx-2 lg:py-1">
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <div className="shopnow-btn flex justify-center items-center lg:justify-start xs:py-2">
          <button className="bg-black text-white xs:p-1 xs:px-10 xs:py-[8px] rounded-2xl xs:w-[95%] lg:w-auto transition-all delay-100 duration-100  ease-in-out hover:bg-slate-800" >
           <a href="#newarrivals"> Shop Now</a>
          </button>
        </div>
        <div className="metrics-section flex justify-between xs:p-2">
          <div className="banner-1">
            <p className="metric font-extrabold">200+</p>
            <p className="metric-info">International Brands</p>
          </div>
          <div className="banner-2">
            <p className="metric font-extrabold">2000+</p>
            <p className="metric-info">High-Quality Products</p>
          </div>
          <div className="banner-3">
            <p className="metric font-extrabold">30000+</p>
            <p className="metric-info">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="models-section flex justify-center items-center overflow-hidden xs:w-full lg:w-1/2 xs:p-1">
        <div className="vector flex xs:h-[10px] xs:mr-7 ">
          <img
            src="https://img.freepik.com/premium-vector/shine-star-black-icon-isolated-vector-illustration_34480-1056.jpg?semt=ais_incoming&w=740&q=80  "
            alt=""
            className="rounded-full animate-[spin_10s_linear_infinite]"
          />
        </div>
        <img src={BannerModels} alt="" className="xs:h-[100px]" />
        <div className="vector xs:mb-36">
          <img
            src="https://img.freepik.com/premium-vector/shine-star-black-icon-isolated-vector-illustration_34480-1056.jpg?semt=ais_incoming&w=740&q=80  "
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
