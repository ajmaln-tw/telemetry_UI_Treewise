import * as Yup from "yup";

export const profileInfoSchema = Yup.object({
    firstName: Yup.string()
        .min(3)
        .max(100)
        .required("First Name Required"),
    lastName: Yup.string()
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


export const vesselDataSchema = Yup.object({
    vesselName: Yup.string()
        .required("Vessel Name Required"),
    apiURL: Yup.string()
        .required("Vessel API URL Required")
});


const acceptedFileTypesArray = ["image/x-png", "image/png", "image/jpg", "image/jpeg"];
const imageMaxSize = 10000000; // bytes

export const verifyFile = (files) => {
    if (files && files.length > 0) {
        const currentFile = files[0];
        const currentFileType = currentFile.type;
        const currentFileSize = currentFile.size;
        const sizeInMb = Math.round((currentFileSize / 1000000) * 100) / 100;
        if (currentFileSize > imageMaxSize) {
            return { isVerified: false, message: `${sizeInMb}mb not allowed, should be less than 10mb` };
        }
        if (!acceptedFileTypesArray.includes(currentFileType)) {
            return { isVerified: false, message: `${currentFileType} type file of Allowed` };
        }
        return { isVerified: true, status: "File Accepted", currFileName: currentFile.name || "Sample File" };
    }
};
