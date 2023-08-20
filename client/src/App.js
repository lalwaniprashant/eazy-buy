import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/eazy-buy/" element={<HomePage />} />
        <Route path="/eazy-buy/product/:slug" element={<ProductDetails />} />
        <Route path="/eazy-buy/categories" element={<Categories />} />
        <Route path="/eazy-buy/cart" element={<CartPage />} />
        <Route path="/eazy-buy/category/:slug" element={<CategoryProduct />} />
        <Route path="/eazy-buy/search" element={<Search />} />
        <Route path="/eazy-buy/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
          /eazy-buy
        </Route>
        <Route path="/eazy-buy/dashboard" element={<AdminRoute />}>
          /eazy-buy
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/eazy-buy/register" element={<Register />} />
        <Route path="/eazy-buy/forgot-password" element={<ForgotPasssword />} />
        <Route path="/eazy-buy/login" element={<Login />} />
        <Route path="/eazy-buy/about" element={<About />} />
        <Route path="/eazy-buy/contact" element={<Contact />} />
        <Route path="/eazy-buy/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
