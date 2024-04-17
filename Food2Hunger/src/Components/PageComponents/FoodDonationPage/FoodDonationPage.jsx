import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { singUpvalidation } from './Signupvalidation';
import axios from 'axios';

const initialvalues = {
    name: '',
    address: '',
    email: '',
    phone: '',
    foodname: '',
    Meal_type: '',
    quantity: '',
    Category: '',
    photo: '',
    Agreement: false
};

const foodCategories = ['Row', 'Cooked', 'Packed'];

function FoodForm() {
    return (
        <>
        <div className="container mx-auto p-8">
            <h1 className='text-3xl font-bold mb-8 pl-56'>Together, Let's End Hunger, One Donation at a Time!</h1>
            <div className='flex'>
            <div className='bg-white p-8 rounded-lg shadow-md border-2 '>
                <Formik 
                    initialValues={initialvalues}
                    validationSchema={singUpvalidation}
                    onSubmit={(values)=>{
                    try {
                        let data = new FormData();
                        data.append("name",values.name)
                        data.append("address",values.address)
                        data.append("email",values.email)
                        data.append("phone",values.phone)
                        data.append("foodname",values.foodname)
                        data.append("quantity",values.quantity)
                        data.append("photo",values.photo)
                        axios.post('http://localhost:3000/Donation',data).then(res=>{
                            console.log(res);
                        }).catch(err=>{
                            console.log(err);
                        })
                    } 
                    catch (error) {
                    console.log(error);    
                    }
                    }}
                >
                    {({handleSubmit,setFieldValue}) => {
                        

                        return(
                        <Form className="space-y-3 " onSubmit={handleSubmit}>
                            <div className='font-bold pl-32 pb-5 text-orange-600 text-3xl'>Donate Food</div>
                            <div className='flex flex-col'>
                                <label className='font-bold'>Your Name:</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="name" placeholder="Enter your name" />
                                <ErrorMessage name="name" component="div" className="text-red-500" />
                            </div>
                            <br/>
                            

                            <label  className='font-bold'>Address</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="address" placeholder="Enter your Address" />
                                <ErrorMessage name="address" component="div" className="text-red-500" />
                                <br/>
                              
                                <br/>

                                <label className='font-bold'>Email</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="email" placeholder="Enter your email" />
                                <br/>
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                                <br/>

                                <label  className='font-bold'>Phone No.</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="number" name="phone" placeholder="Enter your phone number" />
                                <br/>
                                <ErrorMessage name="phone" component="div" className="text-red-500" />
                                <br/>

                                <label className='font-bold'>Food Name</label>
                                <br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="foodname" placeholder="Enter name of food you want to donate" />
                                <br/>
                                <ErrorMessage name="foodname" component="div" className="text-red-500" />
                                <br/>

                                <label className='font-bold'>Meal Type</label>
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
                                
                                <label  className='font-bold'>Quantity</label><br/>
                                <Field className='border rounded-md px-4 py-2 mt-1' type="text" name="quantity" placeholder='Enter quantity' />
                                <br/>
                                <ErrorMessage name="quantity" component="div" className="text-red-500" />
                                <br/>

                                <label className='font-bold'>Category</label>
                                <br/> 
                                <div className='flex flex-row gap-5 align-middle'>
                                    {foodCategories.map((category, index) => (
                                        <div key={index}>
                                            <Field type="checkbox" name="Category" value={category} />
                                            <label htmlFor={category}>{category}</label>
                                        </div>
                                        
                                    ))}
                                </div>
                                <br/>
                                
                                <br/>

                                <label  className='font-bold'>Photo</label>
                                <br/>
                                <input onChange={event=>{
                                    setFieldValue('photo', event.target.files[0])
                                }} type='file' name='photo' />
                                <br/>
                                <br/>

                                <Field type='checkbox' name='Agreement' />
                                <label className='text-gray-500'>I assure that food quality and hygiene has maintained</label>
                                <br/>
                                <ErrorMessage name="Agreement" component="div" className="text-red-500" />
                                <br/>

                            <div className='flex justify-center'>
                                <button className='bg-orange-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed' type='submit' >Donate
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
            <img className=' h-96 w-96 rounded-full' src='./images/smile-slums-poor-support.jpg'/>
            </div>
            <div className='pl-2'>
            <img className=' h-96 w-96 rounded-full' src='./images/081013-n-6086c-125-105x70-1.jpg'/>
            </div>
            </div>
            <div className='pl-20 pt-24'>
            <h1 className='text-5xl font-bold flex gap-2'>Sharing<span className='text-orange-600'>Food</span>,<span>Sharing</span><span className='text-orange-600'>Joy!</span></h1>
        </div>
        <div className='pt-14 pl-36'>
            <img className=" border-5 rounded-full h-96 w-96 "  src="./images/main-qimg-755b2e6f121c3f1e5555a555267abe5e-lq.jpg"/>
        </div>
            </div>
        </div>
        
       
        
        </div>

        
        

        </>
        
        


    );
}

export default FoodForm;

