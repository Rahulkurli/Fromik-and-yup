import * as yup from "yup";

export const signUpSchema = yup.object({
  fname: yup.string().min(2).max(25).required("Please enter your name"),
  lname: yup.string().min(2).max(25),
  email: yup.string().email().required("please enter your email"),
  password: yup.string().min(6).required("please enter your password"),
});
