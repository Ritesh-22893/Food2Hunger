import React from 'react';
import { NavData } from './NavData';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between bg-black/80 px-10 py-3 items-center'>
      <div className='text-3xl drop-shadow-md font-bold text-white'>Food2Hunger</div>
      <div className='text-white flex gap-10'>
        {
          NavData.map((val,i)=>{
            return(
              <>
              <Link to={val.path} key={i}>{val.title}</Link>
              </>
            );
          })
        }
      </div>
      <div className='flex gap-3 items-center'>
        <button className='bg-[#F74B1B] text-white px-7 py-1 rounded-full'>Log in</button>
        <button className='bg-[#188E4F] text-white px-7 py-1 rounded-full'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
