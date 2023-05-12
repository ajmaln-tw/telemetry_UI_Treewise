import * as Yup from "yup";

export const emissionRouteFilter = Yup.object().shape({
    vesselType: Yup.object().required("Vessel Type Required"),
    vesselSize: Yup.object().required("Vessel Size Required"),
    departure: Yup.object().required("Departure Port Required"),
    destination: Yup.object().required("Destination Port Required")
});


