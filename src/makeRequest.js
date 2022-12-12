import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
});
