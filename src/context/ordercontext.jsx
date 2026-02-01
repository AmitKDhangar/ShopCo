import { createContext, useState } from "react";
export const OrderedContext = createContext();
export const OrderedContextProvider = ({ children }) => {
 const [OrderPlaced, setOrderPlaced] = useState(false);
 return (
  <OrderedContext.Provider value={{ OrderPlaced, setOrderPlaced }}>
   {children}
  </OrderedContext.Provider>
 );
};