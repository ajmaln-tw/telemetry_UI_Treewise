import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import I404 from "../../../assets/images/404.png";


const ErrorPage = (props) => {
    const navigate = useNavigate();

    // let { error: { status, message, statusText } = {}, image, title = "" } = props;
    let { image } = props;
    return (
        <Grid sx={{ display: "flex", minHeight: "600px", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{
                fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", py: 2
            }}>
                Oops! Looks like you lost in transit!
            </Typography>
            <Grid sx={{
                minWidth: "100%", minHeight: { md: "60%" }, display: "flex", justifyContent: "center",
            }}>
                <img src={image || I404} alt='' height={"220"} width={"37%"} />
            </Grid>
            {/* <Typography sx={{
                letterSpacing: "0.4rem", fontSize: "1.8rem", color: "grey", textAlign: "center"
            }}> {title && title}
                {status || DATA.STATUS}
            </Typography>

            {((message || statusText)) && < Typography sx={{
                letterSpacing: "0.2rem", fontSize: "0.8rem", color: "red.light", textAlign: "center"
            }}>
                {message || statusText}
            </Typography>} */}
            <Grid item xs={12} sx={{ bottom: "100px", position: "absolute" }}>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{
                        fontSize: "18px", fontWeight: 600, color: "black", textAlign: "center", pt: 2
                    }}>It seems like the information you're looking for has taken an unexpected detour.
                        Please double-check the address and try again.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ bottom: "10px", position: "absolute" }}>
                <Grid sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="contained" size="large" onClick={() => navigate("../dashboard")} sx={{ fontWeight: 700 }} >
                        Go to Dashboard
                    </Button>
                </Grid>
            </Grid>

        </Grid >
    );
};

export default ErrorPage;
