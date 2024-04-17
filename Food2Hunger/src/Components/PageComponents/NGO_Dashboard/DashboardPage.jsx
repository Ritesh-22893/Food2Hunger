import React from 'react';
import { MdNotificationsActive } from "react-icons/md";
function DashboardPage() {
  return (
    <>
    <div className='flex justify-between px-5 py-2 bg-white drop-shadow-lg w-full h-24'>
        <div className='flex gap-5 items-center'>
         <input className='border-2 rounded-full w-[500px]  h-8 placeholder:pl-5 p-5' type='text ' placeholder='Search' />
            <label className='bg-[#F74B1B]  text-white  px-10 py-3 rounded-full'>Search</label>
        </div>
        <div className='flex items-center gap-5'>
            <div className='text-3xl'><MdNotificationsActive/></div>
        <div className='bg-[#F74B1B] h-10 w-10 rounded-full text-center pt-1.5 text-white font-bold'>B</div>
            
        </div>
    </div>
    </>
  );
}

export default DashboardPage;
