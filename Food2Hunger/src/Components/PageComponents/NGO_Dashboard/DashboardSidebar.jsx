import React from 'react';

function DashboardSidebar() {
  return (
    <div className='flex flex-col items-center justify-center gap-1 bg-white drop-shadow-lg py-20 h-full'>
      <div className='flex flex-col gap-1 items-center'> 
        <div className='bg-[#F74B1B] h-14 w-14 rounded-full text-center'>B</div>
        <div>Organization Name</div>
      </div>
      <div className=' border-b-2 border-slate-600 px-5 py-1 w-full'>Dashboard</div>
      <div className=' border-b-2 border-slate-600 px-5 py-1 w-full'>Blog Management</div>
      <div className=' border-b-2 border-slate-600 px-5 py-1 w-full'> Marketplace</div>
      <div className=' border-b-2 border-slate-600 px-5 py-1 w-full'>Sign Out</div>
    </div>
  );
}

export default DashboardSidebar;
