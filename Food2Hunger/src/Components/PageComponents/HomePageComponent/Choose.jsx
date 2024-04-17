import React from 'react';
import { ChooseSection } from './ChooseData';

function Choose() {
  return (
    <div className='mt-20'>
    <div className='text-center text-3xl font-bold mb-10'>Why Choose Us</div>

      <div className='flex gap-10 px-10 '>
        {
            ChooseSection.map((val,i)=>{
                return(
                    <div className='flex flex-col items-center gap-3'>
                    <img src={val.img} alt="bg" className='h-48 w-48' />
                    <div className='font-bold text-xl'>{val.title}</div>
                    <div className='text-center'>{val.description}</div>
                    </div>
                );
            })
        }
      </div>
    </div>
  );
}

export default Choose;
