import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Hleper/slice/CartSlice";

function Card({ img, name, desc, options, id }) {
  const [size, setSize] = useState("");
  const priceRef = useRef();
  let priceOptions = Object.keys(options);

  let price = options[size];
  console.log(`${size} Hi `)

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  const dipatch = useDispatch();

  return (
    <>
      <img
        src={img}
        className="rounded-md object-cover h-[180px] w-[150px] lg:h-[200px] lg:w-[240px] hover:scale-105 transition-all cursor-grab ease-in-out duration-200"
      />
      <div className="">
        <h5 className="mt-1 font-semibold ">{name}</h5>
        <p className=" font-normal text-sm w-[100px] lg:w-full">
          {"this is some important text "}
        </p>
      </div>
      <div className="flex justify-between py-1">
        <select
          onChange={(e) => setSize(e.target.value)}
          className=" rounded-md cursor-pointer"
          ref={priceRef}  
        >
          {priceOptions.map((data)=>{
            return(
              <option key={data} value={data}>{data}</option>
            )
          })}
        </select>
        <p className="text-gray-500 font-bold">Rs.{price}</p>
      </div>
      <hr className="" />
      <button
        className="p-1 mt-2 hover:scale-105 hover:border hover:text-yellow-600 border-solid border-yellow-600 bg-yellow-500 opacity-95 hover:bg-white focus:opacity-35 focus:scale-10 transition-all duration-50   text-xs  rounded-md "
        onClick={() => {
          dipatch(addToCart({ id, img, name,size, price, qty: 1 }));
        }}
      >
        Add Cart
      </button>
    </>
  );
}

export default Card;
