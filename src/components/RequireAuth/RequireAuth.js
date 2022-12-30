import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { loadingSvg } from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  if (loading) {
    <div className="w-full h-[300px] flex justify-center items-center">
      {loadingSvg}
    </div>;
  }
  return children;
};

export default RequireAuth;
