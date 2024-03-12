import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider, Outlet, Route, Navigate, ProductedRoute } from "react-router-dom";

function App() {

  const currentUser = true

  const Layout = ()=>{
    return(
       <div>
        <NavBar />
        <div style={{display:"flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }

  const ProductedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <ProductedRoute>
          <Layout />
        </ProductedRoute>
      ,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
