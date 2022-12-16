import * as Yup from 'yup'

export const UploadResultValidator = ()=>{
    return Yup.object({
        regNumber:Yup
            .string()
            .required('Registration Number is required'),
        session:Yup
            .string()
            .required('Session is required')
       
    })
}