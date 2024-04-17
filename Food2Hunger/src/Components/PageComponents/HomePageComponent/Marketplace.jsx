import React, { useState , useEffect} from 'react';
import { MarketplaceData } from './MarketplaceData';
import axios from 'axios';

function Marketplace() {
  const [data, setData]=useState([])
  const getData=()=>{
    try {
      axios.get('http://localhost:3000/Market').then(res=>{
        console.log(res);
        setData([...res.data.data])
      })
    } catch (error) {
      console.log(error);
    }
    }
    useEffect(() => {
      getData()
    }, []);
    
  return (
    
    <div>
    <div className='mt-20'>
 <div className='text-center text-3xl font-bold mb-10'>Market Place</div>

   <div className='grid grid-cols-3 w-10/12 mx-auto gap-10 '>
     {
         data.map((val,i)=>{
          let image = `http://localhost:3000/public/${val.image}`
             return(
                 <div className='flex flex-col items-start gap-3 bg-white rounded-md p-5 drop-shadow-xl'>
                 <img src={image} alt="bg" className=' h-56 w-full rounded-md' />
                 <div className='font-bold text-xl'>{val.title}</div>
                 <div className='text-slate-500'>{val.description}</div>
                 <div className='font-bold '>{val.price}</div>
                 <div className='bg-[#F74B1B] text-white px-7 py-1 rounded-full'>See More</div>
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
