import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navBar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import './style.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";


function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = ()=>{
    return(
       <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{display:"flex" }}>
          <LeftBar />
          <div style={{flex:6}}> 
            <Outlet />
          </div>
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
