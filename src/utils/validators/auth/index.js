import * as Yup from 'yup'

export const LoginValidator = ()=>{
    return Yup.object({
        username:Yup
            .string()
            .required('Username is required'),
        password:Yup
            .string()
            .required('Password is required')
       
    })
}


// export const RegisterValidator = ()=>{
//     return Yup.object({
//         email:Yup
//             .string()
//             .required('Email is required')
//             .email('Invalid email address'),
//         password:Yup
//             .string()
//             .required('Password is required')
//             .min(5,'Passsword should not be less than 5 characters'),
//         username:Yup
//             .string()
//             .required('Password is required')
//             .min(3,'Username should not be less than 3 characters'),
//         firstName:Yup
//             .string()
//             .required('FirstName is required'),
//         lastName:Yup
//             .string()
//             .required('LastName is required')
       
//     })
// }
export const RegisterValidator = ()=>{
    return Yup.object({
        firstName:Yup
            .string()
            .required('FirstName is required'),
        lastName:Yup
            .string()
            .required('LastName is required'),
        gender:Yup
            .string()
            .required('LastName is required'),
        dob:Yup
            .string()
            .required('LastName is required'),
        admissionDate:Yup
            .string()
            .required('LastName is required'),
        address:Yup
            .string()
            .required('LastName is required'),
        state:Yup
            .string()
            .required('LastName is required'),
        level:Yup
            .string()
            .required('LastName is required'),
        parentName:Yup
            .string()
            .required('LastName is required'),
        parentAddress:Yup
            .string()
            .required('LastName is required'),
        PhoneNumber:Yup
            .string()
            .required('LastName is required')
            .max(11, 'Phone number can not be more than 11'),
       
    })
}