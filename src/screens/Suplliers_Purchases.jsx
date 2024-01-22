import React, { useContext } from "react";
import Context from "../Hleper/Context";

function Suplliers_Purchases() {
  const { expanded } = useContext(Context);
  return (
    <div
      className={`h-[100vh] items-center ${
        expanded ? "custom-width" : "custom-width-small"
      }`}
    >
      <div className="h-[12%] bg-gray-200 flex items-center px-2 ">
        <h1 className="font-bold text-2xl  ">Suppliers Purchases</h1>
      </div>
      {/* costomar-details  */}
      <div className="w-full p-2 ">
        <h4 className="font-bold ml-1">Suppliers Details</h4>
        {/* top inputs */}
        <div className="lg:w-[40%] sm:w-[100%] ">
          <div className="  flex items-center mt-1 justify-center ">
            <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
              Supplliers
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-1 px-2 ml-2 text-gray-700 border-opacity-40 leading-tight "
              id="supplliers"
              type="text"
              placeholder="Supplliers"
            />
          </div>
        </div>
        <div className="flex">
          {/* left-inputs */}
          <div className="w-[60%]">
            <div className="  flex items-center mt-1 justify-center">
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
                id="addredd"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>
          {/* right-inputs */}
          <div className="w-[40%]">
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Mobile No
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="mobilNo"
                type="text"
                placeholder="Mobile No"
              />
            </div>
            <div className=" flex items-center mt-1 justify-center">
              <label className="block min-w-max mx-2 mt-2  text-gray-700 border-opacity-40 text-sm font-bold mb-2">
                Balance
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 border-opacity-40 leading-tight "
                id="balance"
                type="number"
                placeholder="Balance"
                value={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* search and table */}
      <div className="w-full ">
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
        <div className="overflow-x-auto">
          <table className="border-collapse border border-slate-500   ... w-full">
            <thead>
              <tr>
                <th className="border border-slate-600 border-opacity-40  ...">
                  {" "}
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Sr
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Full Name
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Mobile No
                </th>
                <th className="border border-slate-600 border-opacity-40 ...">
                  Balance
                </th>

                <th className="border border-slate-600 border-opacity-40 ...">
                  Last Visit
                </th>

                <th className="border border-slate-600 border-opacity-40 ...">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold  ">
                  {">"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {1}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"Customer1"}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {""}
                </td>
                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {0}
                </td>

                <td className="border border-slate-700 border-opacity-40 ... pl-3 pe-3 text-sm font-bold">
                  {"08/12/2023 10:23"}
                </td>

                <td className="border border-slate-700 border-opacity-40 text-center ... pl-3 pe-3 text-sm font-bold">
                  {"History"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Suplliers_Purchases;
