import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Loader from "../conponents/Loader";
import useLoading from "../hooks/useLoading";
import toast from "react-hot-toast";


function SignUp() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdd] = useState("");
  const navigate = useNavigate();
  const loading = useLoading(2000)

  
//  SignUp data
  const sumitHandler = async (e) => {
  e.preventDefault()
    try {
      const response = await axios.post("http://127.0.0.1:5004/api/signup", {
        name,
        pass,
        email,
        address,
      });
      if(response.data.success == "success"){
        toast.success(`${response.data.msg}`)
        navigate("/");
      }
      else{
        console.log(response.data.msg)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="checking flex p-2  justify-center flex-col items-center">
        {loading ? (
         <Loader/>
        ) : (
          <form
            onSubmit={sumitHandler}
            className="border p-2  md:w-[400px] md:p-4 bg-white gap-4  flex justify-center flex-col items-center rounded-lg shadow-md"
          >
            <h2 className="font-bold text-2xl mt-4 text-center">Sign Up</h2>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
              className="rounded-md p-2 shadow-inner  border focus:border-yellow-500 outline-none w-full focus:bg-white transition-all duration-100  focus:outline-none   "
              required
            />

            <input
            required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              className="rounded-md p-2 shadow-inner  border focus:border-yellow-500 outline-none w-full focus:bg-white transition-all duration-100  focus:outline-none   "
            />

            <input
            required
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="text"
              placeholder="Password"
              className="rounded-md p-2  shadow-inner  border focus:border-yellow-500 outline-none w-full focus:bg-white transition-all duration-100  focus:outline-none   "
            />

            <input
            required
              onChange={(e) => setAdd(e.target.value)}
              value={address}
              type="text"
              placeholder="address"
              className="rounded-md p-2 shadow-inner  border focus:border-yellow-500 outline-none w-full focus:bg-white transition-all duration-100  focus:outline-none   "
            />
            <button
              type="submit"
              className="border mt-4 w-full px-2   border-yellow-500 hover:bg-yellow-500 py-1.5 transition-all duration-100 rounded-md "
            >
              Sign Up
            </button>
            <Link to={"/login"} className="flex mb-4 text-start">
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
