import Home from "./pages/home/Home"
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 Outlet,
} from "react-router-dom";
import Products from "./pages/products/Products";
import User from "./pages/users/User";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"

function App() {

  const Layout = ()=>{

    return <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer"><Menu/></div>
        <div className="contentContainer"><Outlet/></div>
      </div>
      <Footer/>
    </div>
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"users",
          element:<User/>
        },
        {
          path:"products",
          element:<Products/> 
        }
      ]
    
    },
    {
      path:"/login",
      element:<Login/>
    }
    
  ]);
  
  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );

  return (
    <RouterProvider router={router} />
    )
}

export default App
