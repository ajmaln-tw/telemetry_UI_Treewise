/* eslint-disable no-unused-vars */

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import color from "../../themes/palette.json";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRef } from "react";
import { fromEpoch, toEpoch } from "../../../utils/dateUtils";


const CustomMultiSwitch = (props) => {
    const [dateSelection, setDateSelection] = useState(false);
    const [showDate, setShowDatePicker] = useState(false);
    const inputDateRef = useRef(null);
    const { handleToggle, fontSize = "16px", height = "50px", eachSwitchWidth = 20, bgColor = color.palette.primary[100],
        selectedFontColor = color.palette.primary.main, fontColor = color.palette.white.main, selectedSwitch = {},
        selectedBtnColor = color.palette.cyan.main, hoverBtnColor = color.palette.cyan.light, type = "Regular",
        items = [], handleDaySelection, clearPreviousSelection, selectedDate = {}, handleDateChange, dayValue = 1525765135200
    } = props;
    const handleDatePicker = (e) => {
        setShowDatePicker(prev => !prev);
        clearPreviousSelection();
        setDateSelection(true);
    };
    const value = fromEpoch(dayValue);
    const handleChange = ({ target: { value: date } = {} }) => {
        handleDateChange(toEpoch(date));
    };
    const handleDateRange = (item) => {
        handleToggle(item);
        dateSelection && setDateSelection(false);
    };
    if (type === "Date") {
        return <Box>
            <ButtonGroup sx={{ backgroundColor: bgColor }}>
                {items.map((item) => <Button
                    onClick={() => handleDateRange(item)}
                    variant="text"
                    sx={{
                        backgroundColor: selectedSwitch.name === item.name ? selectedBtnColor : bgColor, color: selectedSwitch === item.name ? fontColor : "#000",
                        width: eachSwitchWidth, maxWidth: "30px", maxHeight: "30px", minWidth: eachSwitchWidth, minHeight: "30px",
                        "&:hover": {
                            backgroundColor: hoverBtnColor,
                            color: fontColor
                        }
                    }}
                    key={item}>
                    <Typography sx={{ fontWeight: 700, color: selectedSwitch.name === item.name ? fontColor : "#000" }}>  {item.name}  </Typography>
                </Button>)}
                <Box sx={{
                    fontWeight: 700,
                    color: dateSelection ? fontColor : "#000",
                    display: "flex", justifyContent: "center",
                    alignItems: "center", cursor: "pointer",
                    backgroundColor: dateSelection ? selectedBtnColor : bgColor,
                    borderRadius: "10px", py: 0.5, px: 0.8
                }}>
                    <CalendarMonthIcon fontSize="small" onClick={handleDatePicker} className="calenderPicker" sx={{ color: dateSelection ? "#fff" : "#000" }} />
                </Box>
            </ButtonGroup >
            {showDate && <Box sx={{
                backgroundColor: bgColor, borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px",
                display: "flex", justifyContent: "center"
            }}>
                <input type="date" name="pickDay"
                    style={{ display: dateSelection ? "" : "none" }}
                    ref={inputDateRef}
                    onChange={handleChange}
                    value={value}
                    min="2018-01-01" max={new Date()} />
            </Box>}
        </Box>;
    }
    if (type === "Regular") {
        return <ButtonGroup sx={{ backgroundColor: bgColor }}>
            {items.map((item) => <Button
                onClick={() => handleToggle(item)}
                variant="text"
                sx={{
                    backgroundColor: selectedSwitch.name === item.name ? selectedBtnColor : bgColor, color: selectedSwitch === item.name ? fontColor : "#000",
                    width: eachSwitchWidth, maxWidth: "30px", maxHeight: "30px", minWidth: eachSwitchWidth, minHeight: "30px",
                    "&:hover": {
                        backgroundColor: hoverBtnColor,
                        color: fontColor
                    }
                }
                }
                key={item}>

                <Typography sx={{ fontWeight: 700, color: selectedSwitch.name === item.name ? fontColor : "#000" }}>  {item.name}  </Typography>
            </Button>)}
        </ButtonGroup >;
    }

};

export default CustomMultiSwitch;
