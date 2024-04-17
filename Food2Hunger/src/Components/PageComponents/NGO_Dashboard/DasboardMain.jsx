import axios from 'axios';
import React, { useState } from 'react';

function DasboardMain() {
  const [data, setData]=useState([])
  const getData=()=>{
    try {
        axios.get('http//:localhost:3000/Donation').then(res=>{

            console.log(res);
            setData(...res.data.data)
        }).catch(error=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
  }
    return (
      <div className='w-full '>
        <div className='grid grid-cols-3 gap-10'>
                <div className='  bg-blue-300 p-5 shadow-2xl rounded-3xl border-2-black'>
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3'>Request completed </div>
                        <div>200</div>
                    </div>
                </div>
                <div className='  bg-green-300 p-5 shadow-xl rounded-3xl border-2 ' >
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3 capitalize'>pending required </div>
                        <div>200</div>
                    </div>
                </div>
                <div className='bg-purple-300 p-5 shadow-xl rounded-3xl border-2 ' >
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3 capitalize'>delivery completed </div>
                        <div>200</div>
                    </div>
                </div>
        </div>
        {/* donation request */}
        <div className='mt-10 grid grid-cols-2  gap-20 px-10 items-center'>
            <div className=''>
                <div className='text-xl font-bold'>Donation Requests</div>
                <div className='bg-white drop-shadow-lg flex justify-between p-5'>
                    <div><img src="" alt="" srcset="" /></div>
                    <div className='flex flex-col gap-1'>
                        <div>FoodName</div>
                        <div>Location</div>
                    </div>
                    <button className='bg-[#F74B1B] text-white px-4  rounded-full'>See More</button>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
            <div className='text-xl font-bold'>Donation Requests</div>
                <div className='bg-white drop-shadow-lg flex justify-between p-5'>
                    <div><img src="" alt="" srcset="" /></div>
                    <div className='flex flex-col gap-1'>
                        <div>FoodName</div>
                        <div>Location</div>
                    </div>
                    <button className='bg-[#F74B1B] text-white px-4  rounded-full'>See More</button>
                </div>
            </div>
        </div>

        <div className='mt-10 grid grid-cols-2 gap-20 px-10 items-center '>
            <div className='flex flex-col gap-5'>
                <div className='text-xl font-bold'>Delivery Pending</div>
                <div className='bg-white drop-shadow-lg flex justify-between p-5'>
                    <div><img src="" alt="" srcset="" /></div>
                    <div className='flex flex-col gap-1'>
                        <div>FoodName</div>
                        <div>Location</div>
                    </div>
                    <button className='bg-[#F74B1B] text-white px-4  rounded-full'>See More</button>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
            <div className='text-xl font-bold'>Saled items</div>
                <div className='bg-white drop-shadow-lg flex justify-between p-5'>
                    <div><img src="" alt="" srcset="" /></div>
                    <div className='flex flex-col gap-1'>
                        <div>FoodName</div>
                        <div>Location</div>
                    </div>
                    <button className='bg-[#F74B1B] text-white px-4  rounded-full'>See More</button>
                </div>
            </div>
        </div>
      </div>
  );
}

export default DasboardMain;
