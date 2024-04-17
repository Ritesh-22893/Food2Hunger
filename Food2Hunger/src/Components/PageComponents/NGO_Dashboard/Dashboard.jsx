import React from 'react'

function Dashboard() {
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
                <li className='py-4 text-lg px-24 font-semibold'>Dashboard</li>
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

        {/* all item below search section */}

        <div className='bottom'>

{/* card_section */}

            <div className='flex card_section'>
                <div className='m-8 card bg-blue-300 w-60 h-40 shadow-2xl rounded-3xl border-2-black' id='1'>
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3'>Request completed </div>
                        <div>200</div>
                    </div>
                </div>
                <div className='m-8 card bg-green-300 w-60 h-40 shadow-xl rounded-3xl border-2 ' id='2'>
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3 capitalize'>pending required </div>
                        <div>200</div>
                    </div>
                </div>
                <div className='m-8 card bg-purple-300 w-60 h-40 shadow-xl rounded-3xl border-2 ' id='3'>
                    <div className='p-4'>
                        <img className='h-14 w-14 rounded-full bg-white  ' src="/public/images/noun-clipboard-202115.png"/>
                        <div className='font-bold mt-3 capitalize'>delivery completed </div>
                        <div>200</div>
                    </div>
                </div>

            </div>

{/* posting section below card_section */}

            <div className='second_section flex gap-6'>
                <div className='Donation_rq'>
                    <h1 className='font-bold ml-10 text-xl'>Donation Requests</h1>
                    <div className='Dq1 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    <div className='Dq2 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    <div className='Dq3 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    

                </div>

                <div className='Marketplace'>
                <h1 className='font-bold ml-10 text-xl'>Marketplace Details</h1>  
                <div className='mp1 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    <div className='mp2 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    <div className='mp3 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>


                </div>

            </div>

{/* posting section below posting section */}
            <div className='third_section flex gap-8 '>

            <div className='Delivery_pending'>
                <h1 className='font-bold ml-10 text-xl mt-8'>Delivery pending</h1>  
                <div className='mp1 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    <div className='mp2 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>
                    </div>

                    

                    <div className='sale_item'>
                <h1 className='font-bold ml-10 text-xl mt-8'>Sale item</h1>  
                <div className='mp1 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    <div className='mp2 mt-2 ml-8 h-16 flex items-center border-2  rounded-lg shadow-sm w-96 gap-4 '>
                        <div>
                        <img className='h-5 w-5 ml-3 rounded-full' src="/public/images/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
                        </div>
                        <div>
                        <h1 className='font-bold text-sm'>Food Description</h1>
                        <p className='text-sm'>location</p>
                        </div>
                        <div className='ml-20'>
                            <button className='h-6 w-24 bg-orange-500 rounded-2xl font-bold text-white'>See more</button>
                        </div>

                    </div>

                    </div>
                    </div>

        </div>

      </div>
      </div>


    </>
  )
}

export default Dashboard
