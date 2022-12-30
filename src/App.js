import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../src/components/Login/Login";
import Booking from "./components/Booking/Booking";
import FindNearby from "./components/FindNearby/FindNearby";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ManageBookings from "./components/ManageBookings/ManageBookings";
import MyBookings from "./components/MyBookings/MyBookings";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/find"
          element={
            <>
              <Header />
              <FindNearby />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <RequireAuth>
              <MyBookings />
            </RequireAuth>
          }
        />
        <Route
          path="/manage-bookings"
          element={
            <RequireAuth>
              <ManageBookings />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
