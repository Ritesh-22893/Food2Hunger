import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { singUpvalidation } from '../HOC/Signupvalidation';

const initialvalues = {
    Your_name: '',
    Address: '',
    Email: '',
    Phone_no: '',
    Food_name: '',
    Meal_type: '',
    Quantity: '',
    Category: '',
    Photo: '',
    Agreement: false
};

const foodCategories = ['Row', 'Cooked', 'Packed'];

function FoodForm() {
    const handleSubmit = (values, actions) => {
        // Handle form submission
        console.log(values);
        actions.setSubmitting(false); // Set submitting to false after handling submission
    };

    return (
        <>
        

        <div className="container mx-auto p-8">
            <h1 className='text-3xl font-bold mb-8 pl-56'>Together, Let's End Hunger, One Donation at a Time!</h1>
            <div className='flex'>
            <div className='bg-white p-8 rounded-lg shadow-md border-2 '>
                <Formik 
                    initialValues={initialvalues}
                    validationSchema={singUpvalidation}
                    // onSubmit={(values)}
                >
                    {({handleSubmit}) => {
                        

                        return(
                        <Form className="space-y-3 " onSubmit={handleSubmit}>
                            <div className='font-bold pl-32 pb-5 text-orange-600 text-3xl'>Donate Food</div>
                            <div className='flex flex-col'>
                                <label htmlFor="Your_name" className='font-bold'>Your Name:</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="Your_name" placeholder="Enter your name" />
                                <ErrorMessage name="Your_name" component="div" className="text-red-500" />
                            </div>
                            <br/>
                            

                            <label htmlFor="Address" className='font-bold'>Address</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="Address" placeholder="Enter your Address" />
                                <ErrorMessage name="Address" component="div" className="text-red-500" />
                                <br/>
                              
                                <br/>

                                <label htmlFor="Email" className='font-bold'>Email</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="Email" placeholder="Enter your email" />
                                <br/>
                                <ErrorMessage name="Email" component="div" className="text-red-500" />
                                <br/>

                                <label htmlFor="Phone No." className='font-bold'>Phone No.</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="number" name="Phone_no" placeholder="Enter your phone number" />
                                <br/>
                                <ErrorMessage name="Phone_no" component="div" className="text-red-500" />
                                <br/>

                                <label htmlFor="Food Name" className='font-bold'>Food Name</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="Food_name" placeholder="Enter name of food you want to donate" />
                                <br/>
                                <ErrorMessage name="Food_name" component="div" className="text-red-500" />
                                <br/>

                                <label htmlFor="Meal Type" className='font-bold'>Meal Type</label>
                                <br/>
                                <div className='flex flex-row gap-5 align-middle'>
                                    {['Non-Veg', 'Veg', 'Both'].map((type, index) => (
                                        <div key={index}>
                                            <Field type="radio" name="Meal_type" value={type} />
                                            <label htmlFor={type}>{type}</label>
                                            <ErrorMessage name="Meal_type" component="div" className="text-red-500" />
                                        </div>
                                    ))}
                                </div>
                                <br/>
                                
                                <br/>
                                
                                <label htmlFor='Quantity' className='font-bold'>Quantity</label><br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="Quantity" placeholder='Enter quantity' />
                                <br/>
                                <ErrorMessage name="Quantity" component="div" className="text-red-500" />
                                <br/>

                                <label htmlFor="Category" className='font-bold'>Category</label>
                                <br/> 
                                <div className='flex flex-row gap-5 align-middle'>
                                    {foodCategories.map((category, index) => (
                                        <div key={index}>
                                            <Field type="checkbox" name="Category" value={category} />
                                            <label htmlFor={category}>{category}</label>
                                            {/* <ErrorMessage name="Category" component="div" className="text-red-500" /> */}
                                        </div>
                                        
                                    ))}
                                </div>
                                <br/>
                                
                                <br/>

                                <label htmlFor='Photo' className='font-bold'>Photo</label>
                                <br/>
                                <Field type='file' name='Photo' />
                                <br/>
                                <br/>

                                <Field type='checkbox' name='Agreement' />
                                <label className='text-gray-500'>I assure that food quality and hygiene has maintained</label>
                                <br/>
                                <ErrorMessage name="Agreement" component="div" className="text-red-500" />
                                <br/>

                            <div className='flex justify-center'>
                                <button className='bg-orange-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed' type='submit' >
                                </button>
                            </div>
                        </Form>
                        );
                    }}
                </Formik>
            </div>

            <div className='pt-24'>
                <div className=' pl-10 flex gap-4'>
                <div>
            <img className=' h-96 w-96 rounded-full' src='public/smile-slums-poor-support.jpg'/>
            </div>
            <div className='pl-2'>
            <img className=' h-96 w-96 rounded-full' src='public\081013-n-6086c-125-105x70-1.jpg'/>
            </div>
            </div>
            <div className='pl-20 pt-24'>
            <h1 className='text-5xl font-bold flex gap-2'>Sharing<span className='text-orange-600'>Food</span>,<span>Sharing</span><span className='text-orange-600'>Joy!</span></h1>
        </div>
        <div className='pt-14 pl-36'>
            <img className=" border-5 rounded-full h-96 w-96 "  src="public/main-qimg-755b2e6f121c3f1e5555a555267abe5e-lq.jpg"/>
        </div>
            </div>
        </div>
        
       
        
        </div>

        
        

        </>
        
        


    );
}

export default FoodForm;

