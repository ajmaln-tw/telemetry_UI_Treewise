
// import { REQUEST_METHOD } from "../../common/constants";
// import { ACTION_TYPES } from "./actions";
// import { API_URL } from "./urls";
// import axios from "axios";

//for testing
// const api = axios.create({
//     baseURL: "http://jsonplaceholder.typicode.com"
// })
// export const fetUserById = (data) => {
//     return {
//         url: API_URL.USER.FETCH_USER_BY_ID,
//         method: REQUEST_METHOD.GET,
//         payload: {
//             types: [ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, ACTION_TYPES.FETCH_USER_BY_ID_FAILURE],
//             data
//         }
//     };
// };


export const searchSuggestions = (searchTerm = "") => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_query?=${searchTerm}&_limit=${10}`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));

    });
};
