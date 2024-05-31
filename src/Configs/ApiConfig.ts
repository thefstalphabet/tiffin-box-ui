export const getApiUrl = () => {
    console.log(process.env.REACT_APP_IS_DEV);
    
    if (process.env.REACT_APP_IS_DEV) {
        return "http://localhost:4000/api"
    } else {
        return process.env.REACT_APP_API_URL;
    }
}