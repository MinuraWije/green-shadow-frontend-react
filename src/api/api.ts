import axios, {AxiosError} from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})

api.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error:AxiosError) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            return handleTokenRefresh(error);
        }
        return Promise.reject(error);
    }
)

async function handleTokenRefresh(error) {
    try {
        const { data } = await api.post("/refresh-token", {}, { withCredentials: true });

        // Storing new access token
        localStorage.setItem("accessToken", data.accessToken);

        // Retry failed request with new token
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        return api(error.config);
    } catch (e) {
        console.error("Session expired, redirecting to login...");
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
    }
}

export default api