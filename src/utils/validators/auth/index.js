import * as Yup from "yup";

export const LoginValidator = () => {
  return Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
};

export const eventValidator = () => {
  return Yup.object({
    header: Yup.string().required("Event title is required"),
    eventDate:Yup.string().required('Event Date is Required'),
    body: Yup
      .string().required("Event bodt is required")
      .min(20, 'Event body caanot be less than 20 chaaracters'),
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
