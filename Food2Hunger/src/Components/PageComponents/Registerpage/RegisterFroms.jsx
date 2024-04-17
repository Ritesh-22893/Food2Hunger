import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function RegisterForms() {
    const initialValues = {
        Organization: '',
        Address: '',
        Phone_no: '',
        email: '',
        password: '',
        confirm_password: '',
        Document: ''
    };

    const validationSchema = Yup.object().shape({
        Organization: Yup.string().required('Organization name is required'),
        Address: Yup.string().required('Address is required'),
        Phone_no: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        Document: Yup.mixed().required('Document is required')
    });

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <div className="flex-col justify-center items-center h-screen bg-white-100 pt-20 space-y-3">
                <h1 className='font-bold text-3xl text-center mb-4'>WELCOME TO FOOD2HUNGER</h1>
                <div className='flex-col  px-80'>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8  border-2 rounded-md ">
                <div className="text-center mb-4 font-bold text-2xl capitalize">Register your Account</div>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="Organization" className="block text-gray-700 text-sm font-bold mb-2">Organization Name:</label>
                                <Field type="text" name="Organization" placeholder="Enter your Organization name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="Organization" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="Address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
                                <Field type="text" name="Address" placeholder="Enter your Address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="Address" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="Phone_no" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
                                <Field type="text" name="Phone_no" placeholder="Enter your Phone number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="Phone_no" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                                <Field type="email" name="email" placeholder="Enter your email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                                <Field type="password" name="password" placeholder="Enter password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="confirm_password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
                                <Field type="password" name="confirm_password" placeholder="Confirm Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="confirm_password" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="Document" className="block text-gray-700 text-sm font-bold mb-2">Organization Document:</label>
                                <Field type="file" name="Document" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="Document" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            
                            <div className=" pl-32   flex items-center justify-between i">
                                <button type="submit"  className="w-80 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            </div>
        </div>
    );
}

export default RegisterForms;

