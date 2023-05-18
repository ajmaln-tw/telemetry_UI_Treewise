import * as Yup from "yup";

export const profileInfoSchema = Yup.object({
    firstName: Yup.string()
        .min(3)
        .max(100)
        .required("First Name Required"),
    lastName: Yup.string()
        .min(3)
        .max(100)
        .required("Last Name Required"),
    designation: Yup.string()
        .max(100)
        .required("Designation Required")

});

export const changePasswordSchema = Yup.object({
    password: Yup.string()
        .required("Old Password Required"),
    newPassword: Yup.string()
        .min(3)
        .max(100)
        .required("New Password Required"),
    confirmPassword: Yup.string()
        .min(3)
        .max(100)
        .required("Confirm Password Required")

});
