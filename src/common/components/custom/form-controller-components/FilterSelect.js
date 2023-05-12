import * as React from "react";
import { createTheme, Grid, InputLabel, MenuItem, Select, ThemeProvider } from "@mui/material";

const selectTheme = createTheme({
    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f8f8f8", borderRadius: "5px", color: "#0000", minWidth: "170px", alignItems: "center"
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: "grey.main",
                    right: "9px"
                },
                select: {
                    paddingLeft: "20px",
                    fontSize: "12px"
                },
                root: {
                    color: "grey.main",
                    height: "25px",
                    boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px 0px rgba(71, 68, 68, 0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                    "&::before": {
                        borderBottom: 0
                    },
                    "&:hover": {
                        "&:not(.Mui-disabled, .Mui-error)::before": {
                            borderBottom: 0
                        }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: "11px",
                    "&&:hover": {
                        color: "#000",
                        backgroundColor: "#0784D6",
                        "& *": {
                            color: "grey.main"
                        }
                    }
                }
            }
        }
    }
});

const FilterSelect = ({ dataList = [], value = "", onItemSelect, name, placeholder = "Please Select One" }) => {

    const handleChange = (e) => {
        onItemSelect && onItemSelect(e.target.value);
    };

    return (
        <ThemeProvider theme={selectTheme}>
            <Grid sx={{ display: "flex", flexDirection: "column", pb: 1, my: 2 }}>
                <InputLabel htmlFor={name} sx={{ fontSize: "11px" }}>{placeholder} </InputLabel>
                <Select id={name} variant="standard" value={value.name} onChange={handleChange} placeholder={placeholder}>
                    {dataList.map((item) => (
                        <MenuItem key={item.name} value={item.id} >
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>

        </ThemeProvider>
    );
};

export default FilterSelect;