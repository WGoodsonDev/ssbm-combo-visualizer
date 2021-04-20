import axios from "axios";

export default axios.create({
    baseURL: "http://31.220.59.126:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});
