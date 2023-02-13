import * as yup from "yup";

const addVisitSchema = yup.object().shape({
  patient: yup.string().required("This is a required field"),
  rentgen: yup
    .mixed()
    .test({
      message: "Uploaded",
      test: (file) => {
        const isValid = file.size < 2000000;
        return isValid;
      },
    })
    .required("* Required"),
  ct: yup
    .mixed()
    .test({
      message: "Uploaded",
      test: (file) => {
        const isValid = file.size < 2000000;
        return isValid;
      },
    })
    .required("* Required"),
  echo: yup
    .mixed()
    .test({
      message: "Uploaded",
      test: (file) => {
        const isValid = file.size < 2000000;
        return isValid;
      },
    })
    .required("* Required"),
  type: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),
  injections: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),
  drugs: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),
  analysis: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),
  diagnosis: yup
    .string()
    .min(2, "Must not be less than 2 characters")
    .max(250, "Maximum characters exceeded. 250/250")
    .required("This is a required field"),
});

export default addVisitSchema;
