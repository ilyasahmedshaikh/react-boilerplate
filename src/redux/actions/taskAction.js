import axios from 'axios';

import {
    GET_USERS,
} from "./actions";

export const GetUsers = () => {
    console.log("GetUsers");

    return dispatch => {
        console.log("GetUsers dispatch");

        axios.get(`https://reqres.in/api/users`)
        .then(res => {
            const persons = res.data;

            dispatch({
                type: GET_USERS,
                users: persons
            });
        })
    };
};

export const AddUser = (params) => {
    console.log("AddUser");

    return dispatch => {
        console.log("Add User dispatch");

        axios.post(`https://reqres.in/api/users`, {params})
        .then(response => {
            console.log(response);

            axios.get(`https://reqres.in/api/users`)
            .then(res => {
                console.log(res);

                dispatch({
                    type: GET_USERS,
                    users: response
                });
            })
        })
    };
};