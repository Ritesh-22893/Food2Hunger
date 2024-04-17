import axios from 'axios';
import React, { useState } from 'react';

function Dashboard_Blog() {
    const [image, setImage]=useState('');
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
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
  return (
    <div>
      <div>
      <div className='post_blog flex flex-col items-center justify-center  ' >
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
        <div className='title&Desc flex justify-center  gap-12 mt-4 '>
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
            }}>Post</button>
        </div>
      </div>
      <div className='mt-10'>
        <div className='text-3xl font-bold text-center mb-10'>Blogs</div>
        <div className='flex gap-10 px-10'>
        <div className='bg-white drop-shadow-lg flex flex-col pb-5 items-center gap-2'>
                <div><img src="./images/bg1.jpg" alt="bg" className='w-full h-20' /></div>
                <div className='font-bold text-xl '>Title</div>
                <div className='text-center'>Loremadsfa ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt enim numquam voluptates mollitia totam non est debitis delectus nostrum error, nemo labore repellendus consequatur necessitatibus excepturi rerum quis vel!</div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_Blog;