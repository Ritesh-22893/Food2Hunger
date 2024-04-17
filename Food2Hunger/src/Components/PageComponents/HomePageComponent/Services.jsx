import React from 'react';
import { ServiceData } from './ServiceData';

function Services() {
  return (
    <div>
       <div className='mt-20 bg-[#EEEEEE] p-5 py-10'>
    <div className='text-center text-3xl font-bold mb-10'>Services</div>

      <div className='flex gap-10 px-10 '>
        {
            ServiceData.map((val,i)=>{
                return(
                    <div className='flex flex-col items-center gap-3 bg-white rounded-md p-5'>
                    <img src={val.img} alt="bg" className=' h-40 w-40' />
                    <div className='font-bold text-xl'>{val.title}</div>
                    <div className='text-center'>{val.description}</div>
                    </div>
                );
            })
        }
      </div>
    </div>
    </div>
  );
}

export default Services;
