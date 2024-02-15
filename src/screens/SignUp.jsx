import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAdd] = useState("");
  const navigate = useNavigate();

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
    <div className="h-[100vh] md:-mt-10 flex justify-center flex-col items-center">
      <h2 className="text-2xl mb-3 text-yellow-600 opacity-80 font-bold">
        Register{" "}
      </h2>
      <form
        onSubmit={sumitHandler}
        className="border p-4 md:p-8 w-[96vw] md:w-[60vw]  flex justify-center flex-col items-center rounded-md border-yellow-500"
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
          className="border mt-4  px-5 border-yellow-500 hover:bg-yellow-500 py-1.5 transition-all duration-100 rounded-md "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
