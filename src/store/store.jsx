import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/cartslice";
import ProductSlice from "../slices/productslice";
import CategoriesSlice from "../slices/categoriesslice";
import orderSlice from "../slices/orderslice";
import wishlistSlice from "../slices/wishlistslice";
import EditprofileSlice from "../slices/editprofile";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
    category: CategoriesSlice,
    order: orderSlice,
    wishlist: wishlistSlice,
    editprofile:EditprofileSlice,
  },
});
export default store;
