import React, { useState } from "react";

function DashboardSidebar({ setClick }) {
  // const[click, setClick]=useState('Dashboard');
  return (
    <div className="flex flex-col items-center  gap-1 bg-white drop-shadow-lg py-20 h-full">
      <div className="flex flex-col gap-4 items-center mb-10">
        <div className="bg-[#F74B1B] h-28 w-28 text-white rounded-full  text-3xl font-bold  flex items-center justify-center">
          B
        </div>
        <div className="text-2xl font-bold">Organization Name</div>
      </div>
   <div className="grid">
   <div
        className=" border-b-2 border-slate-300 px-5 py-5 text-left font-bold text-gray-500 w-full"
        onClick={() => {
          setClick("Dashboard");
        }}
      >
        Dashboard
      </div>
      <div
        className=" border-b-2 border-slate-300 px-5 py-5 text-left font-bold text-gray-500 w-full"
        onClick={() => {
          setClick("Blog");
        }}
      >
        Blog Management
      </div>
      <div
        className=" border-b-2 border-slate-300 px-5 py-5 text-left font-bold text-gray-500 w-full"
        onClick={() => {
          setClick("Marketplace");
        }}
      >
        Marketplace
      </div>
      <div
        className=" border-b-2 border-slate-300 px-5 py-5 text-left font-bold text-gray-500 w-full"
        onClick={() => {
          console.log("djkfl");
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Sign Out
      </div>
   </div>
    </div>
  );
}

export default DashboardSidebar;
