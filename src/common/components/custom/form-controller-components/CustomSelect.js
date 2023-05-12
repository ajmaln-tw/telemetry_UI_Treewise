import { Grid, InputLabel, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import Select from "react-select";
import { FORM_CONTROL_STYLE } from "./style";
import TextError from "./TextError";

function CustomSelect(props) {
  const { name = "", options = [], width = "150px", multiple = false, label = "", errorName = "", statusError = false, onChangeFromController, disabled = false, isMandatory = false, ...rest } = props;
  return (
    <Grid sx={FORM_CONTROL_STYLE}>
      <InputLabel htmlFor={name} sx={{ fontSize: "12px" }}>{label} {isMandatory && <span style={{ color: "red", fontSize: "14px" }}> *</span>}</InputLabel>
      <Field
        as='select'
        name={name}
      >
        {
          ({ field, form }) => {
            return (
              <>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      border: state.isFocused ? "1px solid #0784D6" : "1px solid #000",
                      boxShadow: "none",
                      color: "#000",
                      fontSize: "10px",
                      minHeight: "12px",
                      width: width,
                      fontWeight: 400,
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        borderColor: "#000"
                      }
                    }),
                    option: (provided) => ({
                      ...provided,
                      maxHeight: "30px", fontSize: "10px"
                    })
                  }}
                  {...field}
                  {...rest}
                  id={name}
                  options={options}
                  onChange={value => {
                    onChangeFromController && onChangeFromController(value);
                    form.setFieldValue(field.name, value);
                  }}
                  isDisabled={disabled}
                  dropdownHeight={600}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.id}
                  isMulti={multiple}
                  name={name}
                />
                {statusError ? <Typography variant="p" sx={{ color: "red.main", mt: 1, lineHeight: 0 }}>{errorName}</Typography> :
                  <ErrorMessage component={TextError} name={name} />}
              </>
            );
          }
        }
      </Field>
    </Grid >
  );
}

export default CustomSelect;
