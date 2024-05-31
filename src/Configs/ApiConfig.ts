export const getApiUrl = () => {
    if (window.location.hostname === "localhost") {
        return "http://localhost:4000/api"
    } else {
        return process.env.REACT_APP_API_URL;
    }
}