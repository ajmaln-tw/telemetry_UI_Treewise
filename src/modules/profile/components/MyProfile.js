import React, { useState } from "react";
import { Tab, Tabs, Typography, Box, Grid } from "@mui/material";
import { PROFILE_PATH } from "../constants";
import MyProfileWrapper from "./MyProfileWrapper";
import { PropTypes } from "prop-types";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`my-profile-tabpanel-${index}`}
            aria-labelledby={`my-profile-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `my-profile-${index}`,
        "aria-controls": `my-profile-tabpanel-${index}`
    };
}

const MyProfile = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid sx={{ m: 2, mt: 3, overflow: "visible" }}>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label={"Profile"} {...a11yProps(0)} />
                        <Tab label={"Change Password"} {...a11yProps(1)} />
                        <Tab label={"Settngs"} {...a11yProps(2)} />
                        <Tab label={"Subscription"} {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <MyProfileWrapper type={PROFILE_PATH.EDIT_PROFILE} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MyProfileWrapper type={PROFILE_PATH.CHANGE_PASSWORD} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MyProfileWrapper type={PROFILE_PATH.SETTINGS} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <MyProfileWrapper type={PROFILE_PATH.SUBSCRIPTION} />
                </TabPanel>
            </Box>
        </Grid >
    );
};

export default MyProfile;
