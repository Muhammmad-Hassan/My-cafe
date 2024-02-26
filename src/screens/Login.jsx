import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

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
    <div className="h-[100vh] md:-mt-10 flex justify-center  flex-col  items-center">
      <h2 className="text-2xl mb-3 text-yellow-600 opacity-80 font-bold">
        Login{" "}
      </h2>
      {loading ? (
        <button
        className="inline-block rounded-full bg-yellow-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-green-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        type="button"
      >
        <div
          role="status"
          className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        Loading
      </button>
      ):(
      <form
        onSubmit={sumbitHandler}
        className="border p-6  md:p-10 w-[90vw] md:w-[60vw]   flex justify-center flex-col items-center rounded-md border-yellow-500"
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
      </form>)}
    </div>
  );
}

export default Login;
