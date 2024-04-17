import React, { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardPage from './DashboardPage';
import DasboardMain from './DasboardMain';
import Dashboard_Blog from './Dashboard_Blog';
import MarketDashboard from './MarketDashboard';
function NewDashboard() {
  const[click, setClick]=useState('Dashboard');
  return (
    <>
      <div className='grid grid-cols-11 w-screen h-screen'>
        <div className='col-span-2 '>
        <DashboardSidebar setClick={setClick} />
        </div>
        <div className=' gap-10 col-span-9 grid '>
            <DashboardPage/>
            {/* <Dashboard_Blog/> */}
           <div className=' w-11/12 mx-auto'>
           
             {
        click==='Dashboard'?<DasboardMain/>
        :
        click==='Blog'?<Dashboard_Blog/>

        :
        click==='Marketplace'?<MarketDashboard/>
        :
        <div></div>
      }
      </div>
        </div>
      </div>
    </>
  );
}

export default NewDashboard;
