import { useEffect, useState } from "react";
const Footer = () => {
  const [email,setemail] = useState({email:""});
  const [error,seterror] = useState();
  const [subscribe,setsubscribe] = useState(false);
  const err = {};
  // form validation
  const formValidation =()=>{
    if(!email?.email?.trim()){
       err.email = `please enter your email first`;
    }
    else if(email?.email?.trim()){
       setsubscribe(true);
    }
    seterror(err)
  }
  // handle change
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setemail((prev)=> ({...prev,[name]:value}));
  }
  return (
    <>
      <div className="footer-container">
        <div className="newsletter flex xs:flex-wrap lg:flex-nowrap xs:p-3 justify-between items-center bg-black m-5 xs:m-3 rounded-2xl">
          <h1 className="text-white xs:p-2 lg:p-3.5">
            Stay Upto Date about our latest offers
          </h1>
          <div className="newsletter-subscription xs:w-full lg:w-[45%] flex flex-col lg:p-1 lg:m-2">
            {subscribe && subscribe ? (
              <div className="subscribed-letter flex flex-col">
                <img src={`https://media.coschedule.com/uploads/2021/03/best-newsletter-examples.gif`} alt=""  className="rounded-xl object-fit-cover h-36"/><button className="bg-white xs:rounded-3xl xs:p-2 xs:my-1" onClick={()=>setsubscribe(false)}>
              Unsubscribe to Newsletter
            </button></div>
              ):(<div className="newsletter-info flex flex-col">
              <div className="email-holder flex bg-white overflow-hidden xs:rounded-3xl xs:p-1.5 xs:my-2">
              <i class="ri-mail-ai-line m-0.5 text-gray-400 ml-1 px-1 transition-all ease-in-out duration-200 delay-75 cursor-pointer  hover:text-black"></i>
              <input
                type="text"
                placeholder="Enter your email address"
                className="xs:w-[80%] w-full outline-none"
                onChange={(e)=> handleChange(e)}
                value = {email.email}
                name = "email"
              />
            </div>
            <p className="text-red-500 xs:text-[12px]">{error?.email}</p>
            <button className="bg-white xs:rounded-3xl xs:p-2 xs:my-1 hover:bg-gray-100" onClick={()=>formValidation(email)}>
              Subscribe to Newsletter
            </button>
            </div>) }
          </div>
        </div>
        <div className="footer-section flex xs:flex-wrap lg:flex-nowrap">
          <div className="about-section lg:w-[45%] xs:w-full">
            <div className="company-name xs:m-3">
              <p className="logo">Shop.Co</p>
              <p className="text-[#00000099] xs:py-1">
                We have clothes that suits your style brand which you’re proud
                to wear. From women to men.
              </p>
              <div className="social-media-icons flex justify-start">
                <div className="social-media-icon bg-white p-1 border border-gray-300 rounded-full m-1 cursor-pointer  hover:bg-gray-200">
                  <a href="https://x.com/i/flow/login?lang=en-in"><img
                    src="https://help.iubenda.com/wp-content/uploads/2020/05/twitter.png"
                    alt=""
                    className="xs:h-3.5 lg:h-5 xl:h-6"
                  /></a>
                </div>
                <div className="social-media-icon bg-white p-1 border border-gray-300 rounded-full m-1 cursor-pointer  hover:bg-gray-200">
                  <a href="https://www.facebook.com/"><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
                    className="xs:h-3.5 lg:h-5 xl:h-6"
                    alt=""
                  /></a>
                </div>
                <div className="social-media-icon bg-white p-1 border border-gray-300 rounded-full m-1 cursor-pointer  hover:bg-gray-200">
                 <a href="https://www.instagram.com/accounts/login/?hl=en"> <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png"
                    alt=""
                    className="xs:h-3.5 lg:h-5 xl:h-6"
                  /></a>
                </div>
                <div className="social-media-icon bg-white p-1 border border-gray-300 rounded-full m-1 cursor-pointer  hover:bg-gray-200">
                  <a href="https://github.com/login"><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                    className="xs:h-3.5 lg:h-5 xl:h-6"
                    alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="links flex justify-around items-center xs:w-full lg: w-[80%] lg:justify-evenly">
            <div className="links-1 w-1/2 lg:flex justify-evenly">
              <div className="company xs:p-1.5">
                <ul>
                  <p className="uppercase font-extrabold">Company</p>
                  <li className="hover:underline">About</li>
                  <li className="hover:underline">Features</li>
                  <li className="hover:underline">Works</li>
                  <li className="hover:underline">Career</li>
                </ul>
              </div>
              <div className="help xs:p-1.5">
                <ul>
                  <p className="uppercase font-extrabold">Help</p>
                  <li className="hover:underline">Customer Support</li>
                  <li className="hover:underline">Delivery Details</li>
                  <li className="hover:underline">Terms & Conditions</li>
                  <li className="hover:underline">Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="links-2 lg:w-1/2 lg:flex lg:justify-evenly">
              <div className="faq xs:p-1.5">
                <ul>
                  <p className="uppercase font-extrabold">FAQ</p>
                  <li className="hover:underline">Account</li>
                  <li className="hover:underline">Manage Deliveries</li>
                  <li className="hover:underline">Orders</li>
                  <li className="hover:underline">Payments</li>
                </ul>
              </div>
              <div className="resources xs:p-1.5">
                <ul>
                  <p className="uppercase font-extrabold">Resources</p>
                  <li className="hover:underline">Free eBooks</li>
                  <li className="hover:underline">Development</li>
                  <li className="hover:underline">How to - Blog</li>
                  <li className="hover:underline">Youtube Playlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-mark flex justify-between m-2 xs:flex-wrap xs:justify-center lg:flex-nowrap lg:justify-between">
          <p className="text-[#00000099] mb-1">
            Shop.co © 2000-2025, All Rights Reserved
          </p>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt=""
            className="xs:h-2.5   md:h-2 lg:h-5 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
