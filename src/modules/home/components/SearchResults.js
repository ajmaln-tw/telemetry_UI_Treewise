import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../constants";
import { actions as sliceActions } from "../slice";
import { createStructuredSelector } from "reselect";
import { getResults } from "../selectors";
import { MdClose } from "react-icons/md";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";

const itemStyle = {
    display: "flex",
    flexDirection: "column",
    p: 1,
    my: 0.1,
    "&:hover": {
        backgroundColor: "#f4f4f4",
        cursor: "pointer",
        borderRadius: "10px"
    }
};

const SearchResults = ({ results = [] }) => {
    const dispatch = useDispatch();
    const { open, searchTerm = "" } = useSelector(state => state[STATE_REDUCER_KEY]);
    const requestInProgress = useSelector(state => state[STATE_REDUCER_KEY]).searchResult.requestInProgress;
    const handleClose = () => {
        dispatch(sliceActions.setOpenClose(false));
        dispatch(sliceActions.clearSearchResults());
    };
    let loading = requestInProgress && searchTerm.length > 2;
    if (searchTerm.length > 2) {
        return (
            <Box sx={{
                width: { xs: "200px", sm: "230px", md: "300px" },
                backgroundColor: "white.main",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                pb: 1,
                borderRadius: 1,
                display: open ? "flex" : "none", position: "fixed",
                flexDirection: "column",
                justifyContent: "flex-end",
                top: 70, left: 80
            }}>
                {(loading || results.length > 0) && <>
                    <IconButton sx={{ alignSelf: "flex-end" }} type="button" onClick={handleClose}>
                        <MdClose />
                    </IconButton>
                    <LoadingCustomOverlay active={loading} spinnerProps="skeleton">
                        <Box sx={{ overflowY: "scroll", width: "100%", height: "180px", px: 1, pb: 1 }}>
                            {results.map((ele, i) => <Box sx={itemStyle} key={i} onClick={handleClose}>
                                <Typography sx={{ fontSize: "13px", fontWeight: 700, color: "grey.dark" }}>
                                    {ele.title.slice(0, 10)}
                                </Typography>
                                <Typography sx={{ fontWeight: 500, fontSize: "11px", color: "grey.light", cursor: "pointer" }}>
                                    {ele.title.slice(0, 40)}
                                </Typography>
                            </Box>)}
                        </Box>
                    </LoadingCustomOverlay>
                </>
                }
                {!loading && results.length < 1 && <>
                    <IconButton sx={{ alignSelf: "flex-end" }} type="button" onClick={handleClose}>
                        <MdClose />
                    </IconButton>
                    <Box sx={{ width: "300px" }}>   <Typography sx={{ textAlign: "center" }}> No results found</Typography>
                    </Box>
                </>}

            </Box >
        );
    }

};

const mapStateToProps = createStructuredSelector({
    results: getResults
});

// const mapDispatchToProps = (dispatch) => ({
//     searchSuggestions: (data) => dispatch(searchSuggestionsAction(data))

// });

export default connect(mapStateToProps)(SearchResults);

