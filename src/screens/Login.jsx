import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../conponents/Loader";
import useLoading from "../hooks/useLoading";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 const loading = useLoading()

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://127.0.0.1:5004/api/login", {
        email,
        password,
      });
      if (resp.data === "success") {
        navigate("/");
        toast.success(`${resp.data}`);
      } else {
        toast.error(`${resp.data}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="checking p-2 flex justify-center flex-col  items-center ">
      {loading ? (
        <Loader/>
      ) : (
        <form
          onSubmit={submitHandler}
          className="border p-6 md:w-[400px]  bg-white gap-4 flex justify-center flex-col items-center  rounded-lg "
        >
          <h2 className="font-bold text-center text-2xl">Login</h2>

          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="  rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full focus:bg-white transition-all duration-100  focus:outline-none   "
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
            className="rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full focus:bg-white transition-all duration-100  focus:outline-none   "
          />
          <div className="flex justify-center w-full flex-col ">
            <button
              type="submit"
              className="border mt-4 w-full  px-5 border-yellow-500 hover:bg-yellow-500 py-1.5 transition-all duration-100  rounded-md "
            >
              Login
            </button>{" "}
            <span className="my-4 text-center">
              Don t have an account?{" "}
              <Link to={"/signup"} className="font-bold">
                Sgin Up
              </Link>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
