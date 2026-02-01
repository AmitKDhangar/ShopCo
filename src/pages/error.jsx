import { useNavigate } from "react-router-dom";
const Error = () => {
 const navigate = useNavigate();
 return (<>
 <div className="error flex flex-col justify-center items-center p-3">
  <img src="https://blog-cdn.lottiefiles.com/2022/08/spotify.gif" alt="" className="rounded-2xl xl:h-96" />
  <button onClick={()=>{navigate(-1)}} className="bg-red-200 m-2.5 rounded-2xl px-4 py-1">Back</button>
 </div>
 </>);
}
 
export default Error;