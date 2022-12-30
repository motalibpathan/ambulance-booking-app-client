import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  const [currentUser] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const emailRef = useRef("");

  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.warn("please enter your email address");
    }
  };

  if (currentUser || user) {
    navigate(from, { replace: true });
    console.log("User found");
  }

  return (
    <div className="relative">
      {(loading || sending) && <Loading />}
      <div className="md:container mx-auto h-screen w-full p-5">
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="border border-white rounded-full p-2 bg-[#003580] text-white"
          >
            <FontAwesomeIcon className="mr-2" icon={faTruckMedical} />
            BD Ambulance
          </Link>
        </div>
        <h1 className="text-2xl mt-5 text-center font-bold">Please Login</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 lg:w-1/3 mt-10 mx-auto space-y-6"
        >
          <input
            ref={emailRef}
            className="w-full p-4 bg-gray-100 rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full p-4 bg-gray-100 rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            className=" cursor-pointer w-full p-4 bg-[#003580] text-white"
            type="submit"
            value={"Login"}
          />
        </form>
        {error && <p className="text-red text-center mt-2">{error?.message}</p>}

        {resetError && (
          <p className=" text-center mt-2">
            Reset Error:
            <span className="text-red">
              {resetError?.message.split("Error")[1]}
            </span>
          </p>
        )}

        <p className="text-center mt-3">
          Forgot password?{" "}
          <button
            onClick={resetPassword}
            disabled={sending}
            className="text-red underline "
          >
            {sending ? "sending..." : "Reset Password "}
          </button>
        </p>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-red underline">
            Sign up
          </Link>
        </p>
        <SocialMediaLogin />
      </div>
    </div>
  );
};

export default Login;
