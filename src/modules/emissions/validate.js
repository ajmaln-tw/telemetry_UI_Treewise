import * as Yup from "yup";

export const emissionRouteFilter = Yup.object({
    vesselType: Yup.string()
        .required("Vessel Type Required"),
    capacity: Yup.string()
        .required("Vessel Capacity Required"),
    departure: Yup.string()
        .required("Departure Required"),
    destination: Yup.string()
        .required("Designation Required")

});
