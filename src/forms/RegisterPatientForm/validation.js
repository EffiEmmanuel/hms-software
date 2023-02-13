import * as yup from "yup";

const registerPatientSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(50, "Maximum characters exceeded. 50/50")
    .required("This is a required field"),

  middleName: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(50, "Maximum characters exceeded. 50/50")
    .required("This is a required field"),

  lastName: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(50, "Maximum characters exceeded. 50/50")
    .required("This is a required field"),

  gender: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(50, "Maximum characters exceeded. 50/50")
    .required("This is a required field"),

  dateOfBirth: yup.date().required("This is a required field"),

  bloodGroup: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(50, "Maximum characters exceeded. 50/50")
    .required("This is a required field"),

  height: yup.number().required("This is a required field"),
  weight: yup.number().required("This is a required field"),

  profession: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(50, "Maximum characters exceeded. 50/50")
    .required("This is a required field"),

  location: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),

  address: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),

  phone: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),

  email: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),
});

export default registerPatientSchema;
