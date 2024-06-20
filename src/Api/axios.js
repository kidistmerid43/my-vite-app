import axios from "axios";

const axiosInstance = axios.create({
	// "Local instance of firebase functions"
	// baseURL: "http://127.0.0.1:5001/clone-062024/us-central1/api",

	// "deployed version of amazon server on render.com "
	baseURL: "https://amazon-api-deploy-r1g2.onrender.com",
});

export {axiosInstance}