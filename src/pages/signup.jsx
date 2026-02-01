import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/uselocalstorage";
import { useContext } from "react";
import {NotificationContext} from '../context/notificationcontext';
const Signup = () => {
  const {message,setmessage} = useContext(NotificationContext);
  // navigator
  const navigate = useNavigate();
  // local storage for saving usercredential;
  const [,setstoredValue] = useLocalStorage("user");
  // slideshow
  const bannerImages = [
    "https://img.freepik.com/free-photo/young-pretty-woman-listening-music-wireless-earphones_1303-20585.jpg?semt=ais_hybrid&w=740&q=80",
    "https://www.shutterstock.com/image-photo/young-fashion-model-stylish-beige-600nw-2382157791.jpg",
    "https://thumbs.dreamstime.com/b/natural-look-beauty-model-woman-test-portrait-young-beautiful-fashion-posing-dark-grey-background-blond-biege-blazer-312642548.jpg",
    "https://img.freepik.com/free-photo/business-man-posing_23-2148018652.jpg?semt=ais_hybrid&w=740&q=80",
    "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-alipazani-2584269.jpg&fm=jpg",
    "https://www.shutterstock.com/image-photo/portrait-beautiful-young-girl-bright-600nw-2498569761.jpg",
    "https://cdn.pixabay.com/photo/2024/11/08/05/28/man-9182458_640.jpg",
  ];
  const [slide, setslide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setslide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // form instance
  const usercredentials = {
    email: "",
    password: "",
  };
  const [fieldInput, setfieldInput] = useState(usercredentials);
  // for getting form inputs
  const handlechange = (e) => {
    const { name, value } = e.target;
    setfieldInput((prev) => ({ ...prev, [name]: value }));
  };
  // form validation
  // error instance for form validation
  const [error, seterror] = useState();
  const formValdiation = () => {
    const err = {};
    if(fieldInput.email && fieldInput.password){
      login();
      setstoredValue(fieldInput);
    }
    if (!fieldInput?.email?.trim()) {
      err.emailerr = "email is blank";
    } else if (!fieldInput?.password?.trim()) {
      err.passerr = "password is mandatory";
    }
    seterror(err);
  };
  // showpassword and hidepassword
  const [showHidePass,setshowHidePass] = useState(false);
  // login
  const login = ()=>{
    setmessage("Login Successfully");
    setTimeout(()=>{
      navigate('/account');
    },2000)
  }
  return (
    <>
      <div className="signup-wrapper bg-gray-100 flex justify-center items-center xs:p-1 lg:p-4">
        <div className="signup-container flex justify-center items-center xs:w-full bg-white xl:w-[75%] 2xl:w-[50%] rounded-2xl p-3">
          <div className="signup-banner relative xs:hidden lg:inline-flex">
            <div className="w-64 banner  flex  bg-black p-10 rounded-tl-xl rounded-tr-[3rem] rounded-bl-3xl overflow-hidden">
              <img
                src={bannerImages[slide]}
                alt=""
                className="lg:h-[350px]  object-cover rounded-tl-xl rounded-tr-[3rem] cursor-pointer rounded-bl-3xl transition ease-in-out duration-700 opacity-95 hover:opacity-100 hover:brightness-110"
              />
            </div>
          </div>
          <div className="signup-form xs:m-1 xs:w-full lg:w-1/2 lg:mx-10">
            <p className="headline lg:text-2xl font-semibold my-2">Login</p>
            <div className="signupusingplatfrom mb-3 flex flex-col items-center">
              <div className="withgoogle border flex items-center rounded-md my-1 w-full justify-between cursor-pointer">
                <img
                  src={`https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png`}
                  alt=""
                  className="h-8"
                />
                <p>Continue with google</p>
                <p></p>
              </div>

              <div className="linkedin  border flex items-center rounded-md my-1 w-full justify-between cursor-pointer">
                <img
                  src={`https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png`}
                  alt=""
                  className="h-8"
                />
                <p>Login with linkedin</p>
                <p></p>
              </div>
              <p className="byemail text-sm">or login with e-mail</p>
            </div>
            <form action="">
              <div className="form-container flex items-center xs:border xs:p-2 xs:rounded-md">
                <input
                  type="text"
                  placeholder="Email"
                  className="text-xs outline-none w-full"
                  value={fieldInput.email}
                  name="email"
                  onChange={(e) => handlechange(e)}
                />
              </div>
              <div className="error flex justify-between items-center">
                <p className="loginbyotp xs:m-0.5">Login via OTP</p>
                {error && <p className="text-red-500">{error.emailerr}</p>}
              </div>
              <div className="form-container flex justify-between xs:border xs:p-[9px] xs:rounded-md">
                <input
                  type={showHidePass ? `text` : `password`}
                  placeholder="Enter Your Password"
                  className="text-xs outline-none w-full"
                  value={fieldInput.password}
                  name="password"
                  onChange={(e) => handlechange(e)}
                />
                <i class={ showHidePass ? `ri-eye-line cursor-pointer` : `ri-eye-off-line `}onClick={()=> setshowHidePass(!showHidePass)}></i>
              </div>
              <div className="error flex justify-between items-center">
                <p className="xs:m-0.5 underline cursor-pointer">
                  forget Password ?
                </p>
                {error && <p className="text-red-500">{error.passerr}</p>}
              </div>
            </form>
            <button
              className="border-2 rounded-3xl w-full bg-black text-white xs:my-1.5 xs:p-2"
              onClick={() => {
                formValdiation();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
