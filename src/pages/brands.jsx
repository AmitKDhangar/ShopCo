const Brands = () => {
  const brands = [
    {
      id: 0,
      title: "Gucci",
      priceRange: "$100 - $3500",
      image: "https://1000logos.net/wp-content/uploads/2017/01/Gucci-Logo.jpg",
    },
    {
      id: 1,
      title: "Zara",
      priceRange: "$100 - $1500",
      image: "https://www.svgrepo.com/show/303605/zara-logo.svg",
    },
    {
      id: 2,
      title: "Prada",
      priceRange: "$100 - $2500",
      image:"https://cdn.freebiesupply.com/logos/large/2x/prada-logo-png-transparent.png",
    },
    {
      id: 3,
      title: "Calvin Klien",
      priceRange: "$100 - $3500",
      image:
        "https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png",
    },
    {
      id: 4,
      title:"Versace",
      priceRange: "$100 - $1200",
      image:
        "https://images.seeklogo.com/logo-png/14/2/versace-logo-png_seeklogo-148374.png",
    },
     {
      id: 5,
      title:"Nike",
      priceRange: "$100 - $1200",
      image:
        "https://www.freeiconspng.com/uploads/nike-transparent-logos-background-12.png",
    },
  ];
  return (
    <>
      <div className="brands">
        <div className="brands-headline flex justify-center items-center xs:p-2">
          <p className="font-bold">Brands we offer to our Customer</p>
        </div>
        <div className="brands-container">
          <div className="brands-container grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {brands.map((item)=>(
            <div className="brand border bg-black rounded-2xl xs:m-2 xs:p-2 cursor-pointer transition-all delay-75 duration-150 ease-out hover:scale-[103%]" key={item.id}>
              <div className="image-container bg-black flex justify-center items-center border-2 border-white rounded-xl xs:h-fit">
               <img src={item.image} alt="" className="xs:h-24 md:h-16 lg:h-24 xl:h-32 object-fit" />
              </div>
             <div className="brands-info xs:m-2">
               <div className="title">
               <p className="flex text-white">Brand <p className="ml-2"> {item.title}</p></p>
              </div>
              <div className="price-range">
               <p className="text-white">{item.priceRange}</p>
              </div>
              <div className="clothing">
               <p className="text-white">{`Clothing`}</p>
              </div>
             </div>
             </div>
           ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
