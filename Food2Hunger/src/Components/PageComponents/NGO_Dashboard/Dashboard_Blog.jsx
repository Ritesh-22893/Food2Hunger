import axios from 'axios';
import React, { useState,useEffect } from 'react';

function Dashboard_Blog() {
    const [image, setImage]=useState('');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [data,setData]=useState([])
    const fetchdata=()=>{
      try {
        axios.get("http://localhost:3000/Blog").then(res=>{
            console.log(res)
            setData([...res.data.data])
        }).catch(err=>[
            console.log(err)
        ])
      } catch (error) {
        console.log(error);
      }
    }
    const getdata=()=>{
        try {
            const data = new FormData();
            data.append("image",image)
            data.append("title",title)
            data.append("description",description)
            axios.post('http://localhost:3000/Blog',data).then(res=>[
                console.log(res)
            ]).catch(err=>{
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchdata()
      }, []);
  return (
    <div>
      <div>
      <div className='flex flex-col items-center justify-center  ' >
            <div>
                <h1 className='text-xl mt-6 font-bold '>Post Blog</h1>
            </div>
            <label htmlFor='image' className='flex border-2 border-black w-72 h-24 items-center justify-center mt-6'>
        {image?  <div>
            <img  className='h-12 w-12' src={URL.createObjectURL(image)}/>
            {/* <p className='capitalize text-xl ml-4 font-semibold'>add image</p> */}
            </div>:<div>
            <img  className='h-12 w-12' src="\public\images\images (2).png"/>
            <p className='capitalize text-xl ml-4 font-semibold'>add image</p>
            </div>}
            </label>
            <input onChange={(e)=>[
                        setImage(e.target.files[0])
                ]}  type="file" name="" id="image" className='hidden' />

        </div>
        <div className='title&Desc flex items-center justify-center  gap-12 mt-4 '>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold capitalize text-lg'>tittle</h1>
                <input onChange={(e)=>{
                    setTitle(e.target.value)
                }} className='border-2 border-black rounded-lg w-96 h-12 pl-4' type="text" placeholder='Title name'/>
            </div>
            <div className='Des'>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold capitalize text-lg'>Description</h1>
                    <input onChange={(e)=>{
                    setDescription(e.target.value)
                }}  className='border-2 border-black rounded-lg w-96 h-12 pl-4' type="text" placeholder='Describe here'/>
                </div>

            </div>
            <button onClick={()=>{
                console.log('sdf');
                    getdata()
            }} className='bg-[#F74B1B] text-white px-7 py-1 mt-5 rounded-full flex items-center justify-center'>Post</button>
      </div>

        </div>
      <div className='mt-10'>
        <div className='text-3xl font-bold text-center mb-10'>Blogs</div>
        <div className='grid grid-cols-3 mx-auto w-full gap-10'>
        {
            data.map((val,i)=>{
                    let image=`http://localhost:3000/public/${val.image}`
                    return(
                        <>
                    <div className='bg-white drop-shadow-lg flex flex-col pb-5 items-center gap-2'>
                <div><img src={image} alt="bg" className='w-fit' /></div>
                <div className='font-bold text-xl '>{val.title}</div>
                <div className='text-center'>{val.description}</div>
             </div>
                        </>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Dashboard_Blog;
