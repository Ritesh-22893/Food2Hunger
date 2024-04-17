import * as yup from 'yup';

export const singUpvalidation = yup.object().shape({
    Your_name: yup.string().min(3).required("Enter your name"),
    Address: yup.string().min(4).required("Enter your address"),
    Email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    Phone_no: yup.string().length(10).required("Enter your phone number"),
    Food_name: yup.string().min(3).required("Enter food name"),
    Quantity: yup.string().required("Enter quantity"),
    Category: yup.boolean().oneOf([true], 'Please tick only one item'),
    Agreement: yup.boolean().oneOf([true], 'Please tick the agreement')
});
