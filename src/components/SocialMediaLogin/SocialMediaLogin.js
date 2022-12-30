import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SocialMediaLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <>
      {loading && <Loading />}
      {error && <p className="text-red text-center mt-2">{error?.message}</p>}
      <div className="w-full md:w-1/2 lg:w-1/3 mt-3 mx-auto space-y-6">
        <div className="flex items-center">
          <div className="w-1/2 bg-gray-400 h-1"></div>
          <p className="p-3">or</p>
          <div className="w-1/2 bg-gray-400 h-1"></div>
        </div>
        <button
          onClick={() => signInWithGoogle()}
          className="w-full p-3 bg-white border-2 rounded-lg flex justify-center items-center"
        >
          <img
            className="mr-2"
            width={30}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="google"
          />
          Sign in with google
        </button>
      </div>
    </>
  );
};

export default SocialMediaLogin;
