import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate()
  const navigation=()=>{
    navigate('/Donatepage')
  }
  const imagearray=[
    {path: './images/1.jpg'},
    {path: './images/2.jpg'},
    {path: './images/3.jpg'},
    {path: './images/4.jpg'},
    {path: './images/5.jpg'},

]
const [imgs, setImage]= useState(0);
const nextFunction=()=>{
    if(imgs===imagearray.length-1){
        setImage(0);
    }
    else{
        setImage(prev=>prev+1);
    }
}
useEffect(()=>{
    let interval=setTimeout(()=>{
        nextFunction();
    },2000)
    return()=>{
        clearTimeout(interval)
    }
})
  return (
    <div className='flex justify-around h-[600px] w-screen items-center px-10'>
      <div className='flex flex-col items-start gap-5'>
        <div className='font-bold text-6xl'>Share a <br/><span className='text-[#F74B1B]'>Meal</span> & <br/>Share the <span className='text-[#F74B1B]'>Love</span></div>
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
      {
                            imagearray.map((val,i)=>{
                                if(imgs===i){
                                return  <img key={i} src={val.path} alt="backgorund" className='h-[500px] w-[500px] border-[10px] border-yellow-300 rounded-full mt-20' />
                                }else{
                                    return null
                                }
                            })
                        }

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
