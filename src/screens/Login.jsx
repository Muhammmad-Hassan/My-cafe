import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://127.0.0.1:5004/api/login", {
        email,
        password,
      });
      if (resp.data === "success") {
        navigate("/");
        toast.success(`${resp.data}`)
      } else {
        toast.error(`${resp.data}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] md:-mt-10 flex justify-center flex-col items-center">
      <h2 className="text-2xl mb-3 text-yellow-600 opacity-80 font-bold">
        Login{" "}
      </h2>
      <form
        onSubmit={sumbitHandler}
        className="border p-4 md:p-8 w-[96vw] md:w-[60vw]  flex justify-center flex-col items-center rounded-md border-yellow-500"
      >
        <div className="lg:w-[90%] w-[100%]  flex items-center justify-center flex-col">
          <label
            className=" mr-auto mb-1 font-bold text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full bg-gray-200 focus:bg-white transition-all duration-100  focus:outline-none   text-gray-700"
          />
        </div>
        <div className="lg:w-[90%] w-[100%]  flex items-center justify-center flex-col">
          <label
            className=" mr-auto mb-1 font-bold text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="password"
            className="rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full bg-gray-200 focus:bg-white transition-all duration-100  focus:outline-none   text-gray-700"
          />
        </div>
        <div className="flex justify-center gap-x-2">
          <button
            type="submit"
            className="border mt-4  px-5 border-yellow-500 hover:bg-yellow-500 py-1.5 transition-all duration-100 rounded-md "
          >
            Login
          </button>{" "}
          <Link to={"/signup"}>
            <button className="border mt-4  px-5 border-yellow-500 hover:bg-yellow-500 py-1.5 transition-all duration-100 rounded-md ">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
