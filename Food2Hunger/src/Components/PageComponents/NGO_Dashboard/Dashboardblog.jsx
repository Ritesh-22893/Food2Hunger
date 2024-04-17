import React from 'react'

function Dashboardblog() {
  return (
    <>

<div className='flex'>
        <div className='side_bar border-2  h-auto   '>
            <div className='pt-20 pl-20'>

        <img className='h-40 w-40 border-2 rounded-full item-center ' src="/public/images/Ngo.jpg"/>
            </div>
        <br/>
        <h1 className='font-bold text-2xl capitalize pl-14'>Organization Name</h1>

        <br/>
        <br/>
        <div>
            <ul className='first_block_list'>
                <li className='py-4 text-lg px-24 '>Dashboard</li>
               < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
                <li className='py-4 text-lg px-16 font-semibold'>Blog Managament</li>
                < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
                <li className='py-4 text-lg px-14'>MarkrtPlace Managament</li>
                < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
                <li className='py-4 text-lg px-24'>Sign out</li>
                < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
            </ul>
        </div>
        </div>

    {/* search bar */}


      <div className='main_div'>
        <div className='search flex gap-72 border-2 shadow-xl h-19 w-[980px] '>
            <div className='flex pl-20 gap-4 py-5'> 
            <input className='border-2 rounded-xl w-80  h-8 placeholder:pl-10' type='text ' placeholder='Search' />
            <label className=' bg-orange-600 text-white w-24 px-7 rounded-xl h-7'>Search</label>
            </div>
            <div className='flex  gap-10 pt-5 '>
                <div className='flex gap-5  items-center'>
                <img className='bg-gray-400 h-6 w-6 border-1 rounded-black rounded-full ' src="\public\images\nor-removebg-preview.png"/>
                <img className='bg-gray-400 h-6 w-6 border-1 rounded-black rounded-full ' src="\public\images\nor-removebg-preview.png"/>
                <img className='bg-gray-400 h-6 w-6 border-1 rounded-black rounded-full ' src="\public\images\nor-removebg-preview.png"/>
                <img className='bg-gray-400 h-10 w-10 border-1 rounded-black rounded-full   ' src="\public/images/Ngo.jpg"/>

                </div>
            </div>
        </div>

        <div className='post_blog flex flex-col items-center justify-center  ' >
            <div>
                <h1 className='text-xl mt-6 font-bold '>Post Blog</h1>
            </div>
            <div className='flex border-2 border-black w-72 h-24 items-center justify-center mt-6'>
                <img  className='h-12 w-12' src="\public\images\images (2).png"/><p className='capitalize text-xl ml-4 font-semibold'>add image</p>
            </div>

        </div>
        <div className='title&Desc flex justify-center  gap-12 mt-4 '>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold capitalize text-lg'>tittle</h1>
                <input className='border-2 border-black rounded-lg w-96 h-12 pl-4' type="text" placeholder='Title name'/>
            </div>
            <div className='Des'>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold capitalize text-lg'>Description</h1>
                    <input className='border-2 border-black rounded-lg w-96 h-12 pl-4' type="text" placeholder='Describe here'/>
                </div>

            </div>

        </div>

        <div className='Blogs w-full  font-bold text-xl mt-12'>
            <h1 className='text-center'>Blogs</h1>
        

            <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3 h-full">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/public/images/blog1.jpg" alt="blog"/>
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Donating food</h1>
            <p class="text-sm mb-3"> Helping a community donating tons of foods in banke district.
                  Making the lives of people better and ease which will
                  ultimately lead in better living...</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-4 md:w-1/3 h-full">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="\public\images\blog3.jpeg" alt="blog"/>
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Donating Food</h1>
            <p class="text-sm mb-3"> Watch how NGO is providing healthy snacks to the people of
                    nearby locality making their day better in summer season.
                    With help of collaborating skill...</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-4 md:w-1/3 h-full">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="/public/images/blog1.jpg" alt="blog"/>
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Donating Food</h1>
            <p class="text-sm mb-3">Watch how NGO is providing healthy snacks to the people of
                    nearby locality making their day better in summer season.
                    With help of collaborating skill...</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

            

        </div>

      </div>
      </div>


      
    </>
  )
}

export default Dashboardblog
