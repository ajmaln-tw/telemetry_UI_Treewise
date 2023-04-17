import { Switch, Grid, InputLabel } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { FORM_CONTROL_STYLE_ALT } from "./style";

import TextError from "./TextError";

const CustomSwitch = (props) => {
    const { label, name, onChangeFromController, isMandatory, ...rest } = props;

    return (
        <Grid container sx={{ ...FORM_CONTROL_STYLE_ALT }}>
            <Grid item xs={6} sm={6} md={3} lg={6}>
                <InputLabel htmlFor={name}>{label} {isMandatory && <span style={{ color: "red", fontSize: "14px" }}> *</span>}</InputLabel>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={6}>
                <Field name={name} >
                    {({ field, form }) => {
                        return <Switch sx={{ p: "8px 14px" }}
                            {...field}
                            {...rest}
                            id={name}
                            inputProps={{ "aria-label": label }}
                            selected={field.value || false}
                            onChange={() => {
                                form.setFieldValue(name, !field.value);
                                onChangeFromController && onChangeFromController(!field.value);
                            }
                            }
                        />;
                    }}
                </Field>
                <ErrorMessage component={TextError} name={name} />
            </Grid>
        </Grid>
    );
};
export default CustomSwitch;
