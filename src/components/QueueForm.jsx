import React, { useState } from 'react'
import { FaUserPlus } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import { useTheme } from './ThemeToggler';
const QueueForm = ({ onAdd }) => {
  const { isDark } = useTheme();
  const [name, setName]=useState('');
  const [service, setService]=useState('');
  const [urgent, setUrgent]=useState(false);
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!name.trim() || !service.trim()){
        alert("All the fields are required");
        return ;
      }
      onAdd({name, service, urgent});
      setName("");
      setService("");
      setUrgent(false)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`p-5 shadow-md rounded-xl h-fit ${
          isDark ? "bg-gray-950" : "bg-gray-700"
        }`}
      >
        <h2
          className={`mt-0 mb-5 text-xl font-medium ${
            isDark ? "text-indigo-700" : " text-gray-300"
          }`}
        >
          Add to queue
        </h2>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-3 appearance-none rounded-md focus:outline-2 focus:-outline-offset-2  ${
              isDark
                ? "placeholder:text-gray-400 bg-gray-900 focus:outline-indigo-500"
                : " placeholder:text-gray-700 text-gray-900 bg-gray-400 focus:outline-indigo-950"
            }`}
          />
        </div>
        <div
          className={`${
            isDark ? "bg-gray-900" : "bg-gray-400 "
          } pr-1  mb-4 rounded-md`}
        >
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`col-start-1 row-start-1 w-full p-3 rounded-md cursor-pointer  text-base focus:outline-2 focus:-outline-offset-2   sm:text-sm/6 ${
              isDark
                ? "bg-gray-900  focus:outline-indigo-500 text-gray-400 placeholder:text-gray-400"
                : " placeholder:text-gray7100 text-gray-900 bg-gray-400 focus:outline-indigo-950"
            }`}
          >
            <option value="">Select service</option>
            <option value="consultancy">consultancy</option>
            <option value="Payment">Payment</option>
            <option value="Support">Support</option>
          </select>
          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div> */}
        </div>

        <span
          className={`${
            urgent
              ? `${
                  isDark
                    ? "bg-lime-400 hover:bg-lime-300 text-gray-800"
                    : "bg-orange-400 hover:bg-orange-300 text-gray-900"
                } `
              : `${
                  isDark
                    ? "bg-gray-700 hover:bg-gray-800"
                    : "bg-gray-900 hover:bg-gray-950"
                } `
          } 
          
          px-3 py-1 rounded-full  transition duration-200 cursor-pointer font-semibold text-gray-200`}
          onClick={() => setUrgent((prev) => !prev)}
        >
          URGENT
        </span>

        <button
          type="submit"
          className={`w-full border-none p-3 flex items-center justify-center gap-1 rounded-xl h-11 text-l font-semibold ${
            isDark ? "bg-indigo-800" : " bg-indigo-600"
          } mt-5 cursor-pointer hover:opacity-90`}
        >
          <FaUserPlus /> Add customer
        </button>
      </form>
    </>
  );
};

export default QueueForm;