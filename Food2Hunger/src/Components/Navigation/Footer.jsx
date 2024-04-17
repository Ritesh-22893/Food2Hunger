import React from 'react';
import Facebook from '/facebook.svg'
import Instagram from '/instagram.svg'
import {AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-black/80 px-10 py-2 flex justify-between text-white items-center mt-20'> 
      <div>
        <img src="" alt="" />
        <div className='text-3xl drop-shadow-lg font-bold'>Food2Hunger</div>
      </div>
      <div className='text-white'>Copyright  @ Food2Hunger, 2024</div>
      <div className='flex gap-5 items-center'>
                <a href="#" target='_blank'>    <img src={Facebook}  alt="facebook" srcset="" className='h-9' /></a>
                <a href="#" target='_blank'>    <img src={Instagram}  alt="instagram" srcset="" className='h-9' /></a>
                <a href="#" target='_blank'>    <AiFillGithub className='text-white text-4xl' />  </a>
            </div>
    </div>
  );
}

export default Footer;
