import { Button as MUIButton, Typography } from "@mui/material";

const style = { borderRadius: "5px", height: "35px", minWidth: "120px", fontSize: "14px", fontWeight: 700 }
const NavigateButton = (props) => {

    return (
        <div variant="contained" sx={{ ...style, ...props.sx }} {...props} >
            <Typography sx={{ color: "primary.main" }}>{props.title}</Typography>
        </div>
    );
};

export default NavigateButton;
