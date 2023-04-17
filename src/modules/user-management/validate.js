/* eslint-disable camelcase */
import * as Yup from "yup";


export const signInSchema = Yup.object({
    email: Yup.string()
        .min(2)
        .max(100)
        .required("Email Required"),
    password: Yup.string()
        .max(150)
        .required("Password Required")
});


export const signUpSchema = Yup.object({
    companyName: Yup.string()
        .min(3)
        .max(100),
    email: Yup.string()
        .min(3)
        .max(100)
        .required("Email Required"),
    password: Yup.string()
        .max(150)
        .required("Password Required"),
    confirmPassword: Yup.string()
        .max(150)
        .required("Confrim Password Required"),
    vesselName: Yup.string()
        .max(150)
        .required("Confrim Password Required")

});

