import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:"Client-ID vKMCYLGLwNw7KZBoYmAeMrCbSgRVnyeU4hH0vRMWKSc"
    }
})