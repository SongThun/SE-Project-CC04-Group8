import axios from "axios";

const getBaseURL = () => {
    // Check if running in development and ngrok is used
    if (window.location.hostname.includes('ngrok')) {
        return window.location.origin + '/';
    }
    
    // Fallback to localhost or environment variable
    return import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/';
};

const api = axios.create({
    baseURL: getBaseURL(),
    headers: {
        'Content-Type': 'application/json'
    }
});
export default api;