import { createContext, useState } from "react";
export const NotificationContext = createContext();
export const NotificationContextProvider = ({children})=>{ 
 const [message,setmessage] = useState("");
 return (
     <NotificationContext.Provider value={{message,setmessage}}>
      {children}
     </NotificationContext.Provider>
 );
}