import React from 'react'

function Dashboard() {
  return (
    <>
        <div className='flex'>
      <div>
        <div className='first_bar border-2 border-black h-screen   '>
            <div className='pt-20 pl-20'>

        <img className='h-40 w-40 border-2 rounded-full item-center ' src="/public/images/Ngo.jpg"/>
            </div>
        <br/>
        <h1 className='font-bold text-2xl capitalize pl-14'>Organization Name</h1>

        <br/>
        <br/>
        <div>
            <ul className='first_block_list'>
                <li className='py-4 text-lg px-24'>Dashboard</li>
               < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
                <li className='py-4 text-lg px-16'>Blog Managament</li>
                < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
                <li className='py-4 text-lg px-14'>MarkrtPlace Managament</li>
                < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
                <li className='py-4 text-lg px-24'>Sign out</li>
                < hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700 w-96"/>
            </ul>
        </div>
        </div>

      </div>
      <div>
        <div className='top border-2 shadow-xl h-16 w-auto'>
            <div className='flex pl-20 gap-9 py-5'> 
            <input className='border-2 rounded-xl w-80 placeholder:pl-10' type='text ' placeholder='Search' />
            <label className=' bg-orange-600 text-white w-24 px-7 rounded-xl h-7'>Search</label>
            </div>
            <div className='flex gap-10'>
                <img className='bg-gray-400' src=""/>
            </div>
        </div>
        <div className='bottom'>

        </div>

      </div>
      </div>


    </>
  )
}

export default Dashboard
