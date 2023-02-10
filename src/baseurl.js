import axios from "axios";

// instance creation
// for this we use methos create()

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",

})

export default instance