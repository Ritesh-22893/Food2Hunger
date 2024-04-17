import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardPage from './DashboardPage';
import DasboardMain from './DasboardMain';

function NewDashboard() {
  return (
    <>
      <div className='grid grid-cols-11 w-screen h-screen bg-black/20'>
        <div className='col-span-2 '>
        <DashboardSidebar/>
        </div>
        <div className=' gap-10 col-span-9 grid '>
            {/* <DashboardPage/> */}
           <div className='bg-black/30 w-11/12 mx-auto'><DasboardMain/></div> 
        </div>
      </div>
    </>
  );
}

export default NewDashboard;
