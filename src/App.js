import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Myaccount from "./pages/Myaccount";
import ProductDetail from "./pages/ProductDetail";
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import Layout from "./components/root/Layout";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Cheakout from "./pages/Cheakout";



const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/product" element={<Shop/>}></Route>
     <Route path="/product/:id" element={<ProductDetail/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/cart" element={<Cart/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/cheakout" element={<Cheakout/>}></Route>
     <Route path="/myaccount" element={<Myaccount/>}></Route>
     <Route path="*" element={<Error/>}></Route>
  </Route>
))



export default function App() {
  return (
   <>
     <RouterProvider router={router}></RouterProvider>
   </>
  )
}