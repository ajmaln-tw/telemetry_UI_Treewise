import React from "react";
import { AttachFile, CloudUpload } from "@mui/icons-material";
import { Box, Button, Grid, Input, InputLabel, Typography } from "@mui/material";
import { removeStringPortion } from "../../../../utils/commonUtils";


const FileUpload = ({ handleImage, fileError = "", handleUpload, isFileExists = false, fileName = "" }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Grid sx={{ width: { sm: "110px", xs: "110px", xl: "110px" }, borderRadius: "5px", border: "1px dotted grey", p: 0.2 }}>
                <InputLabel htmlFor="file-upload" sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <AttachFile /> <Typography sx={{ display: "inline", fontSize: "12px", fontWeight: 600 }}>
                        {isFileExists ? removeStringPortion(fileName) : "No File Chosen"}
                    </Typography>
                </InputLabel>
                <Input
                    id="file-upload"
                    type="file"
                    name="fileUpload"
                    onChange={(e) => {
                        handleImage(e); e.target.value = "";
                    }}
                    style={{ display: "none", "&:hover": { backgroundColor: "primary.light" } }}
                />
            </Grid>
            {fileError && <Typography color={"error"}> {fileError}</Typography>}

            {isFileExists && <Box>  <Button onClick={handleUpload} sx={{
                position: "static",
                backgroundColor: "primary.100", "&:hover": {
                    backgroundColor: "primary.200"
                }
            }}>
                <CloudUpload /> &nbsp; <Typography variant="p" sx={{ fontSize: 10 }}>Upload Profile Picture</Typography>
            </Button> </Box>}
        </Box>
    );
};

export default FileUpload;
