/* eslint-disable no-unused-vars */
import { Grid, IconButton, InputLabel } from "@mui/material";
import React from "react";
import { FormController } from "../../../../common/components";
import { AddCircleOutline } from "@mui/icons-material";
import { FieldArray } from "formik";

const FieldArrayVesselVariable = ({ view = false, push, form: { values: { vesselVariables = [] } } }) => {
    return (
        <>
            <InputLabel htmlFor={"vesselVariables"} sx={{ pb: 0.4 }}>{"Variables"}</InputLabel >

            <Grid container spacing={1}>
                {/* {!view && <IconButton onClick={() => push({
                name: "",
                label: ""
            })}
                sx={{ float: "right" }}>
                <AddCircleOutline />
            </IconButton>} */}

                {vesselVariables?.map((_item, index) => {
                    return (
                        <>
                            <Grid item xs={6} sm={4} md={3} lg={2}>
                                <FormController
                                    name={`vesselVariables[${index}].name`}
                                    control="checkbox"
                                    label={_item.label} />
                            </Grid>
                        </>
                    );
                })
                }
            </Grid>
        </>
    );
};

const EditVariables = () => {
    return (
        <>
            <Grid item pt={1}>
                <FieldArray
                    name="vesselVariables">
                    {(p) => <FieldArrayVesselVariable {...p} />}
                </FieldArray>
            </Grid>
        </>
    );
};

export default EditVariables;

