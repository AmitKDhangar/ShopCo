import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Account = () => {
  const profile = useSelector((state) => state.editprofile);
  useEffect(()=>{
  //  for mounting the component;
  },[profile])
  return (
    <>
      <div className="account-wrapper bg-gray-100 xs:p-0.5 lg:p-1">
        <div className="account-headline flex justify-center items-center">
          <p>Account</p>
        </div>
        <div className="account-container bg-white xs:rounded-md lg:rounded-xl ">
          <div className="profile-photo xs:w-full">
            <div className="image-container flex justify-center items-center flex-col rounded-2xl xs:p-1.5">
              <img
                src={
                  profile[0]?.profilephoto ||
                  "https://pfpmaker.com/content/img/profile-pictures/aesthetic/4.png"
                }
                alt=""
                className="h-36 cursor-pointer xs:h-[130px] lg:h-44 p-1 bg-cover rounded-full"
              />

              <div className="username">
                <p>{profile.length === 1 ? profile[0]?.name : "Lorem Singh"}</p>
              </div>
            </div>
          </div>
          <div className="options xs:w-full xs:p-2 md:p-2.5">
            <ul>
              <Link to={"/editprofile"}>
                <li className="flex item-center justify-between rounded-lg xs:p-1.5 xs:m-2 lg:m-2.5 hover:bg-sky-50 cursor-pointer">
                  <div className="option flex items-end justify-between">
                    <i class="ri-user-line xs:mr-1.5"></i>
                    <p>Edit Profile</p>
                  </div>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
              </Link>
              <li className="flex item-center justify-between rounded-lg xs:p-1.5 xs:m-2 lg:m-2.5 hover:bg-sky-50 cursor-pointer">
                <div className="option flex items-end justify-between">
                  <i class="ri-map-pin-line xs:mr-1.5"></i>
                  <p>Shopping Address</p>
                </div>
                <i class="ri-arrow-right-s-line"></i>
              </li>
              <Link to={"/wishlist"}>
                <li className="flex item-center justify-between rounded-lg xs:p-1.5 xs:m-2 lg:m-2.5 hover:bg-sky-50 cursor-pointer">
                  <div className="option flex items-end justify-between">
                    <i class="ri-heart-3-line xs:mr-1.5"></i>
                    <p>Wishlist</p>
                  </div>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
              </Link>
              <Link to={"/orders"}>
                <li className="flex item-center justify-between rounded-lg xs:p-1.5 xs:m-2 lg:m-2.5 hover:bg-sky-50 cursor-pointer">
                  <div className="option flex items-end justify-between">
                    <i class="ri-box-1-line xs:mr-1.5"></i>
                    <p>Orders</p>
                  </div>
                  <i class="ri-arrow-right-s-line"></i>
                </li>
              </Link>
              <li className="flex item-center justify-between rounded-lg xs:p-1.5 xs:m-2 lg:m-2.5 hover:bg-sky-50 cursor-pointer">
                <div className="option flex items-end justify-between">
                  <i class="ri-notification-3-line xs:mr-1.5"></i>
                  <p>Notification</p>
                </div>
                <i class="ri-arrow-right-s-line"></i>
              </li>
              <li className="flex item-center justify-between rounded-lg xs:p-1.5 xs:m-2 lg:m-2.5 hover:bg-sky-50 cursor-pointer">
                <div className="option flex items-end justify-between">
                  <i class="ri-bank-card-line xs:mr-1.5"></i>
                  <p>Cards</p>
                </div>
                <i class="ri-arrow-right-s-line"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
