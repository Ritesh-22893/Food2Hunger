import React from 'react';
import * as yup from 'yup'
import axios from 'axios'
import Box from '@mui/material/Box';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';

const validationSchema = Yup.object().shape({
    organizationname: Yup.string().required('Organization name is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    document: Yup.mixed().required('Document is required')
});

function Signup() {
    const formData=[
            {
                label: "Organizationname",
                type:"text",
                placeholder: "Enter you Firstname",
                api: "organizationname"
            },
            {
                label: "Address",
                type: "text",
                placeholder: "Enter you Last Name",
                api: "address"
            },{
                label: "Email",
                type:"email",
                placeholder: "Enter you Email",
                api: "email"
            },{
                label: "Password",
                type:"password",
                placeholder: "password",
                api: "password"
            } ]
        
            const [rows, setrows] = useState([]);
        
            const getdata=()=>{
                try {
                    axios.get('http://localhost:3000/NewUser').then(res=>{
                        console.log(res);
                        setrows([...res.data.data])
                    }).catch(err=>{
                        console.log(err);
                    })
                } catch (error) {
                    console.log(error);
                }
            }
        
            useEffect(() => {
             getdata()
            }, []);
        
  return (
    <>
   <Formik 
            initialValues={{
                organizationname: '',
                address: '',
                phone: '',
                email: '',
                password: '',
                confirm_password: '',
                document: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values)=>{
                    console.log(values);
                    try {
                        axios.post('http://localhost:3000/Data',values).then(res=>{
                            console.log(res);
                        }).catch(err=>{
                            console.log(err);
                        })
                    } catch (error) {
                        console.log(error);
                    }
            }}
            >
                {({handleSubmit})=>{
                    return(

                        <Form onSubmit={handleSubmit} className="p-5 bg-slate-100 h-fit w-fit">
                            <div className="text-center text-2xl raleway font-bold p-10 ">Sign Up Form</div>
            <div className="grid grid-cols-2 w-fit h-fit  gap-4">
                {
                    formData.map((val,i)=>{
                        return(
                         <>
                            <div className="text-black flex flex-col gap-2 " key={i}>
                                <label htmlFor=""> {val.label}</label>
                                        <Field name={val.api} type={val.type} placeholder={val.placeholder} 
                                        className="border-2 border-gray-400 px-5 py-1 rounded-md" />
                                        <ErrorMessage name={val.api} component='div' className="text-red-500" />
                            </div>
                            </>
                        )
                    })
                }
            </div>
        <button type="submit" className="bg-blue-700 text-white p-2 px-5 mt-5">submit</button>
</Form>
                    )
                }}
            
 </Formik> 
    </>
  );
}

export default Signup;
