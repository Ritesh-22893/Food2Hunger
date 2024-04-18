import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DasboardMain() {
  const [data, setData]=useState([])
  const getData=()=>{
    try {
        axios.get('http://localhost:3000/Donation').then(res=>{

            console.log(res);
            setData([...res.data.data])
        }).catch(error=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, []);
  const [data1, setData1]=useState([])
  const getData1=()=>{
    try {
        axios.get('http://localhost:3000/Market').then(res=>{

            console.log(res);
            setData1([...res.data.data])
        }).catch(error=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    getData1()
  }, []);

    return (
      <div className='w-full '>
        <div className='grid grid-cols-3 gap-10'>
                <div className='  bg-blue-300 p-5 shadow-2xl rounded-3xl border-2-black'>
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold text-xl mt-3'>Request completed </div>
                        <div>20</div>
                    </div>
                </div>
                <div className='  bg-green-300 p-5 shadow-xl rounded-3xl border-2 ' >
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3 text-xl capitalize'>pending required </div>
                        <div>13</div>
                    </div>
                </div>
                <div className='bg-purple-300 p-5 shadow-xl rounded-3xl border-2 ' >
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3 capitalize text-xl'>delivery completed </div>
                        <div>10</div>
                    </div>
                </div>
        </div>
        {/* donation request */}
        <div className='mt-10 grid grid-cols-2  gap-14  px-10 place-items-start'>
            <div className='w-full'>
                <div className='text-xl font-bold'>Donation Requests</div>
                <div className='flex flex-col gap-5'>
                { 
                data.map((val,i)=>{
                        let image =`http://localhost:3000/public/${val.photo}`
                        return(
                            <>
                    <div className='bg-white drop-shadow-lg flex justify-between p-5'>
                     <div className='flex gap-2'><img src={image} alt="bg" srcset=""  className='h-16 w-16 object-cover'/>
                    <div className='flex flex-col capitalize gap-1'>
                        <div className='font-bold '>{val.foodname}</div>
                        <div>{val.address}</div>
                    </div>
                    </div>
                <button className='bg-[#F74B1B] text-white px-4 h-10 rounded-full'>See More</button>
                </div>
                            </>
                        )
                    })
                }
                </div>
            </div>
            <div className='w-full'>
                <div className='text-xl font-bold'>Items Listed</div>
                <div className='flex flex-col gap-5'>
                { 
                data1.map((val,i)=>{
                        let image =`http://localhost:3000/public/${val.image}`
                        return(
                            <>
                    <div className='bg-white drop-shadow-lg flex justify-between p-5'>
                     <div className='flex gap-2'>
                        <img src={image} alt="bg" srcset=""  className='h-16 w-16 object-cover'/>
                    <div className='flex flex-col capitalize gap-1'>
                        <div className='font-bold '>{val.title}</div>
                        <div>{val.price}</div>
                    </div>
                    </div>
                <button className='bg-[#F74B1B] text-white px-4 h-10 rounded-full'>See More</button>
                </div>
                            </>
                        )
                    })

                }
                </div>
            </div>
       
        </div>
      </div>
  );
}

export default DasboardMain;
