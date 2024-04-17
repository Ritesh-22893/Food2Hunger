import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function RegisterForms() {
    const initialValues = {
        organizationname: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        // confirm_password: '',
        document: ''
    };

    const validationSchema = Yup.object().shape({
        organizationname: Yup.string().required('Organization name is required'),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        // confirm_password: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        //     .required('Confirm password is required'),
        // document: Yup.mixed().required('Document is required')
    });

    return (
        <div className="flex-col justify-center items-center h-screen bg-white-100 pt-20 space-y-3">
                <h1 className='font-bold text-3xl text-center mb-4'>WELCOME TO FOOD2HUNGER</h1>
                <div className='flex-col  px-80'>
            <div className="bg-white shadow-md px-8 pt-6 pb-8  border-2 rounded-md ">
                <div className="text-center mb-4 font-bold text-2xl capitalize">Register your Account</div>
                <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema }
            onSubmit={(values)=>{
                    console.log(values);
                    try {
                        let data = new FormData();
                        data.append("organizationname",values.organizationname)
                        
                        data.append("address",values.address)
                        data.append("phone",values.phone)
                        data.append("email",values.email)
                        data.append("password",values.password)
                        data.append("document",values.document)

                        axios.post('http://localhost:3000/Data',data).then(res=>{
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
                {({handleSubmit, setFieldValue})=>{
                    return(

                        <Form onSubmit={handleSubmit} >
                        <div className="mb-4">
                                <label  className="block text-gray-700 text-sm font-bold mb-2">Organization Name:</label>
                                <Field type="text" name="organizationname" placeholder="Enter your Organization name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="organizationname" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label  className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                                <Field type="text" name="address" placeholder="Enter your Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label  className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                                <Field type="text" name="phone" placeholder="Enter your Phone number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                <Field type="email" name="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                                <Field type="password"  name="password" placeholder="Enter password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                                <Field type="password" name="confirm_password" placeholder="Confirm Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Organization Document:</label>
                                <input onChange={event=>{
                                    setFieldValue('document', event.target.files[0])
                                }} type="file" name="document" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="document" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className=" pl-32   flex items-center justify-between i">
                                <button type="submit"  className="w-80 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                Sign up</button>
                            </div>
</Form>
                    )
                }}
            
 </Formik> 
            </div>
            </div>
        </div>

    );
}

export default RegisterForms;

