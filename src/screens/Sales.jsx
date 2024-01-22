import React, { useContext } from "react";
import Contex from "../Hleper/Context";

function Sales() {
  const { expanded } = useContext(Contex);
  // console.log(expanded)
  return (
    <div
      className={`h-[100vh] items-center ${
        expanded ? "custom-width" : "custom-width-small"
      }`}
    >
      <div className="h-[12%] bg-gray-200 flex items-center px-2 ">
        <h1 className="font-bold text-2xl  ">Customers Sales</h1>
      </div>
      {/* costomar-details  */}
      <div className="w-full p-2 ">
        <h4 className="font-bold ml-1">Customers Details</h4>
        <div className="flex">
          {/* left-inputs */}
          <div className="w-[60%]">
            <div className="  flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Customer
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="customer"
                type="text"
                placeholder="Customer"
              />
            </div>
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="fullName"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="address"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          {/* right-inputs */}
          <div className="w-[40%]">
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Profit
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="profit"
                type="text"
                placeholder="Profit"
              />
            </div>
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Balance
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="balance"
                type="text"
                placeholder="Balance"
              />
            </div>
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Mobile No
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="mobileNo"
                type="text"
                placeholder="Mobile No"
              />
            </div>
          </div>
        </div>
      </div>
      {/* search and table */}
      <div className=" w-full ">
        {/* search */}
        <div className="h-12  flex items-center  bg-gray-200">
          <div className=" w-[40%] ml-6 flex items-center mt-1 justify-center">
            <input
              className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
              id=""
              type="text"
              placeholder="Entre text to search"
            />
          </div>
          <button className="btn rounded-lg px-3 py-1 hover:opacity-80 transition-all bg-indigo-200 text-sm ml-1">
            Find
          </button>
          <button className="btn rounded-lg px-3 py-1 hover:opacity-80 transition-all  bg-indigo-200 text-sm ml-1">
            Clear
          </button>
        </div>
        {/* table */}
        <div>
          <table className="border-collapse border border-slate-500 ... w-full">
            <thead>
              <tr>
                <th className="border border-slate-600 border-opacity-40  ...">
                  {" "}
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  ...
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Sale Date
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Total Amount
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Previous Balance
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Sale Return
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Dicc...
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Paid Amount
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Exchange Return
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Sale
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  New Balance
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Credit Sale
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Totale Cost
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Total Profit
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Profit Percentage
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold  ">
                  {">"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {1}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"12/12/2024 11:45"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"2,987"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {2}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"2,500"}
                </td>
                <td
                  className="border border-slate-700 border-opacity-40 ... pl-3 pe-3
                 text-sm font-bold"
                >
                  {230}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"2,409"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"1,398"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"1,342"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"54.1%"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"View Sale"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sales;
