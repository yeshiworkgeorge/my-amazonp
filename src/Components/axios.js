import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	// baseURL: "http://127.0.0.1:5001/pp-741c0/us-central1/api",

	baseURL: "https://teal-lovely-coyote.cyclic.app/",
});

export default instance;
