import axios from "axios";
import { toast } from "react-toastify";

// import logger from "./logService";
import auth from "./authService";

axios.defaults.headers.common["x-auth-token"] = auth.getJwt();

axios.interceptors.response.use(null, (error) => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log("Logging error message:", error);
        // alert("Unexpected error occured.");

        // logger.log(error)

        toast.error("Unexpected error occured.");
        // toast("Unexpected error occured.");
    }

    return Promise.reject(error);
});

// export default {
//     get: axios.get,
//     post: axios.post,
//     put: axios.put,
//     patch: axios.patch,
//     delete: axios.delete,
// };

const exportedObject = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};

export default exportedObject;
