import { useContext, useState } from 'react';
import {NotificationContext} from '../context/notificationcontext';
const Notification = () => {
  const {message,setmessage} = useContext(NotificationContext);
  if(message){
    setTimeout(()=>{
      setmessage("");
    },3000);
  }
 return (
   <>
     {message && (
       <div className="notification-container bg-black absolute xs:left-flex justify-center items-center rounded-3xl z-100 animate-slide-down xs:px-2.5 xs:py-2 md:px-3.5 xs:left-[35vw] xs:top-[8vh]">
         <div className="notification">
           <p className='text-white'>{message}</p>
         </div>
       </div>
     )}
   </>
 );
} 
export default Notification;