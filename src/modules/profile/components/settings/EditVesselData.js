import { Grid } from "@mui/material";
import React from "react";
import { FormController } from "../../../../common/components";

const EditVesselData = (props) => {
    const { errors = {} } = props;
    return (
        <>
            <Grid item xs={12} md={12} lg={12}>
                <FormController statusError={true} errorName={errors?.vesselName} control="input2" label={"Vessel Name"} name="vesselName" mandatory={true} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <FormController statusError={true} errorName={errors?.apiURL} control="input2" label={"Vessel API URL"} name="apiURL" mandatory={true} />
            </Grid>
        </>
    );
};

export default EditVesselData;

