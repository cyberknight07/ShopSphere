import axios from "axios";

export const apiInterface = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-Type": "application/json",
    }
})

