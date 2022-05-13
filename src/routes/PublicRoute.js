import { Fragment } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Home from '../pages/home';


const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("access_token")) {
        return <Navigate to="/" replace />
    }
    return <Outlet />;
}

function PublicRoute() {
    return (
      <Fragment>
        
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
            <Route element={<HandleLoginSuccessfully />}>
                <Route path="register" element={<Register />} />
                <Route path='login' element={<Login />} />
            </Route>
        </Routes>
  
      </Fragment>
    );
  }
  
  export default PublicRoute;
  