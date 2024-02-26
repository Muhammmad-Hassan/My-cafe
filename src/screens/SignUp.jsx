import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function SignUp() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdd] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading completion after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  const sumitHandler = async () => {
    try {
      const response = axios.post("http://127.0.0.1:5004/api/signup", {
        name,
        pass,
        email,
        address,
      });
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(email);
  return (
    <>
      <div className="h-[100vh] md:mt-10 flex justify-center flex-col items-center">
        <h2 className="text-2xl mb-3 text-yellow-600 opacity-80 font-bold">
          SIGN UP{" "}
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
        ) : (
          <form
            onSubmit={sumitHandler}
            className="border p-4 md:p-8 w-[90vw] md:w-[60vw]  flex justify-center flex-col items-center rounded-md border-yellow-500"
          >
            <div className="lg:w-[90%] w-[100%]  flex items-center justify-center flex-col">
              <label
                className=" mr-auto mb-1 font-bold text-gray-600"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                className="rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full bg-gray-200 focus:bg-white transition-all duration-100  focus:outline-none   text-gray-700"
              />
            </div>
            <div className="lg:w-[90%] w-[100%]  flex items-center justify-center flex-col">
              <label
                className=" mr-auto mb-1 font-bold text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
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
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                type="text"
                placeholder="password"
                className="rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full bg-gray-200 focus:bg-white transition-all duration-100  focus:outline-none   text-gray-700"
              />
            </div>
            <div className="lg:w-[90%] w-[100%]  flex items-center justify-center flex-col">
              <label
                className=" mr-auto mb-1 font-bold text-gray-600"
                htmlFor="address"
              >
                Address
              </label>
              <input
                onChange={(e) => setAdd(e.target.value)}
                value={address}
                type="text"
                placeholder="address"
                className="rounded-md py-2 px-2 shadow-inner  border focus:border-yellow-500 outline-none w-full bg-gray-200 focus:bg-white transition-all duration-100  focus:outline-none   text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="border mt-4  px-8  border-yellow-500 hover:bg-yellow-500 py-1.5 transition-all duration-100 rounded-md "
            >
              Sign Up
            </button>
            <Link to={"/login"} className="flex mt-3 text-start">
              <p className=" tracking-wider">have an account?</p>
              <span className="font-bold">Log in</span>
            </Link>
          </form>
        )}
      </div>
    </>
  );
}

export default SignUp;
