import React, { useState } from 'react';
import { MarketplaceData } from './MarketplaceData';
import axios from 'axios';


function Marketplace() {

  return (
    
    <div>
    <div className='mt-20'>
 <div className='text-center text-3xl font-bold mb-10'>Market Place</div>

   <div className='flex gap-10 px-10 '>
     {
         MarketplaceData.map((val,i)=>{
             return(
                 <div className='flex flex-col items-start gap-3 bg-white rounded-md p-5 drop-shadow-xl'>
                 <img src={val.img} alt="bg" className=' h-56 w-full rounded-md' />
                 <div className='font-bold text-xl'>{val.title}</div>
                 <div className='text-slate-500'>{val.description}</div>
                 <div className='font-bold '>{val.price}</div>
                 <div className='bg-[#F74B1B] text-white px-7 py-1 rounded-full'>{val.btn}</div>
                 </div>
             );
         })
     }
   </div>
 </div>
 </div>
  );
}

export default Marketplace;
