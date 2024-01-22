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
        className="rounded-md lg:h-[200px] w-[250px] hover:scale-105 transition-all cursor-grab ease-in-out duration-200"
      />
      <div className="">
        <h5 className="mt-1 font-semibold">{name}</h5>
        <p className="mt- font-normal text-sm">
          {"this is some important text"}
        </p>
      </div>
      <div className="flex justify-between py-1">
        <select
          onChange={(e) => setSize(e.target.value)}
          className="bg-gray-200 rounded-md cursor-pointer"
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
        className="p-1 mt-1 hover:scale-105 transition-all duration-50 w-16 shadow-black text-xs shadow-sm hover: rounded-md  hover:opacity-80"
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
