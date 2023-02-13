import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("* This field is required"),
  password: yup.string().max(20).required("* This field is required"),
});

export default loginSchema;
