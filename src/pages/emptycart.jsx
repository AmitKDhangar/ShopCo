const EmptyCart = () => {
 return (
  <div className="empty-cart flex justify-center items-center flex-col xs:p-2 xs:m-2">
   <div className="flex justify-center items-center flex-col">
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-download-png-6024626.png" alt="" className="xs:h-24 lg:h-36 xl:h-40"/>
   <p className="xs:text-xs font-semibold">You cart is Empty</p>
   </div>
  </div>
 );
}
export default EmptyCart;