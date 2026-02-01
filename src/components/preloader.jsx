import Loading from '../components/loading';
const PreLoader = () => {
 return ( <>
   <div className="preloader bg-white h-[100lvh] flex justify-center items-center">
   <div className="shopco h-36 flex justify-center items-center flex-col">
    <p className='logo'>ShopCo</p>
    <div className="madewithlove flex"> <p className='madewithlove flex items-center justify-center xs:text-[11px] lg:text-[14px] xl:text-[20px]'>Made with Love </p>
     <i class="ri-heart-3-fill text-red-500 ml-1 text-xl"></i> </div>
     <Loading/>
  
   </div>
   </div>
 </>);
}
 
export default PreLoader;