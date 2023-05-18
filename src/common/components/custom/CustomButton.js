import { Button as MUIButton } from "@mui/material";

const CustomButton = (props) => {
    return (
        <MUIButton variant="contained" sx={{ borderRadius: "5px", height: "35px", minWidth: "120px", fontSize: "14px", fontWeight: 700 }} {...props} />
    );
};

export default CustomButton;
