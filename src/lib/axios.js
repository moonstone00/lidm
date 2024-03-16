import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://tanjung-koyeb-test-gunadarma.koyeb.app/api/v1"
})