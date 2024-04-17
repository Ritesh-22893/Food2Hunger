import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate()
  const navigation=()=>{
    navigate('/Donatepage')
  }
  return (
    <div className='flex justify-around h-[600px] w-screen items-center px-10'>
      <div className='flex flex-col items-start gap-5'>
        <div className='font-bold text-6xl'>Share a <br/>Meal & <br/>Share the love</div>
        <div className='font-semibold'>Together, Let's End Hunger, One Donation at a Time!</div>
        <div className='flex flex-col gap-2'>
            <div className='font-bold'>Join with us to</div>
            <div className='flex gap-3'>
                <button className='bg-[#F74B1B] text-white px-7 py-3' onClick={()=>{
                  navigation()
                }}>Donate Food</button>
                <button className='bg-[#188E4F] text-white px-7 py-3'>Receive Food</button>
            </div>
        </div>
      </div>
      <div>
        <img src="./images/bg1.jpg" alt="backgorund" className='h-[500px] w-[600px] border-[20px] border-yellow-300 rounded-full mt-20' />
      </div>
      
        <div className='flex flex-col items-center gap-5'>
            <div className='flex items-center gap-3'>
                <div><img src="./images/bg1.jpg" alt="bg" className='h-[30px] w-[30px] rounded-full' /></div>
                <div className=''>
                <div className='font-bold text-[#188E4F]'>Donate Food</div>
                 <div>Promise to anit-hunger</div>
            </div>
        </div>
        <div className='flex items-center gap-3'>
                <div><img src="./images/bg1.jpg" alt="bg" className='h-[30px] w-[30px] rounded-full' /></div>
                <div>
                <div className='font-bold text-[#188E4F]'>Donate Food</div>
                 <div>Promise to anit-hunger</div>
            </div>
        </div>
        <div className='flex items-center gap-3'>
                <div><img src="./images/bg1.jpg" alt="bg" className='h-[30px] w-[30px] rounded-full' /></div>
                <div>
                <div className='font-bold text-[#188E4F]'>Donate Food</div>
                 <div>Promise to anit-hunger</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
