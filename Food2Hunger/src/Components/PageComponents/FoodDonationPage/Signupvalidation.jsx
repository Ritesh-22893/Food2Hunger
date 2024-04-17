import * as yup from 'yup';

export const singUpvalidation = yup.object().shape({
    name: yup.string().min(3).required("Enter your name"),
    address: yup.string().min(4).required("Enter your address"),
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    phone: yup.string().length(10).required("Enter your phone number"),
    foodname: yup.string().min(3).required("Enter food name"),
    quantity: yup.string().required("Enter quantity"),
    Agreement: yup.boolean().oneOf([true], 'Please tick the agreement')
});
