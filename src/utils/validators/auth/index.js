import * as Yup from "yup";

export const LoginValidator = () => {
  return Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
};

export const eventValidator = () => {
  return Yup.object({
    header: Yup.string().required("Title is required"),
    body: Yup.string().required("Title is required"),
  });
};

export const RegisterValidator = () => {
  return Yup.object({
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date of Birth is required"),
    admissionDate: Yup.string().required("Admission Date is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    level: Yup.string().required("Level is required"),
    parentName: Yup.string().required("LastName is required"),
    parentAddress: Yup.string().required("Parent Name is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .min(10, "Phone number can not be less than 11 digits"),
  });
};


export const staffValidator= () =>{
  return Yup.object({
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    phoneNumber: Yup.string().required("Phone number is required").max(14),
    email: Yup.string().required("email is required"),
    role: Yup.string().required("email is required"),
    address: Yup.string().required("address is required"),
  })
}

