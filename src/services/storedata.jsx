import axios from "axios";
// create a axios instance
const Store = axios.create({
 baseURL: "https://api.escuelajs.co/api/v1",
});

// get all the Products
export const Products = () => {
 return Store.get("/products");
}

// get all the categories
export const Categories = () => {
 return Store.get("/categories");
}

// get category by Id
export const CategoriesByID = (id) => {
   return Store.get(`/products/?categoryId=${id}`);
}