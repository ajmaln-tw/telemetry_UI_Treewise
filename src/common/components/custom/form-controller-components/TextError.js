import { Typography } from "@mui/material";

const TextError = (props) =>
  <Typography sx={{ color: "error.main", position: "absolute", bottom: "-12px" }} color="error.main" variant="p" >
    {props.children}
  </Typography>;

export default TextError;
