import { Box, IconButton, InputBase } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { connect, useDispatch } from "react-redux";
import { searchSuggestionsAction } from "../actions";
import { createStructuredSelector } from "reselect";
import { getSearchTerm } from "../selectors";
import { actions as sliceActions } from "../slice";
import SearchResults from "./SearchResults";
import BackspaceIcon from "@mui/icons-material/Backspace";

const SearchBox = (props) => {
    const dispatch = useDispatch();
    const { searchSuggestions, searchTerm = "" } = props;
    const handleSearch = ({ target: { value } = {} } = {}) => dispatch(searchSuggestions(value));
    const handleClear = () => dispatch(sliceActions.clearAll());
    const handleClick = () => {
        dispatch(sliceActions.setOpenClose());
    }
    return (
        <>
            <Box
                display="flex"
                backgroundColor={"#ffff"}
                p={0.6}
                ml={1}
                borderColor={"red.main"}
                borderRadius={5}
            >
                <IconButton type="button">
                    <BiSearch />
                </IconButton>
                <InputBase type="string" sx={{ ml: 1, flex: 1 }} value={searchTerm} onChange={handleSearch} onClick={handleClick} placeholder="Search for Vessels" />
                {searchTerm && <IconButton type="button" onClick={handleClear}>
                    <BackspaceIcon fontSize="small" />
                </IconButton>}
                <SearchResults />
            </Box>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    searchTerm: getSearchTerm
});

const mapDispatchToProps = (dispatch) => ({
    searchSuggestions: (data) => dispatch(searchSuggestionsAction(data))

});


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);

