import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";
import toast from "react-hot-toast";
import { keyframes } from "styled-components";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    toast.error("Please Login to access checkout page", {
      style: { fontWeight: "bolder" },
    });
    return <Navigate to="/" />;
  }
  return children;

  // return (
  //   <Route
  //     {...rest}
  //     render={() => {
  //       return user ? children : <Redirect to="/"></Redirect>;
  //     }}
  //   ></Route>
  // );
};
export default PrivateRoute;
