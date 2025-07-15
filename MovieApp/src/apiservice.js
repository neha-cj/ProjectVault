import axios from "axios";
const API_KEY = "93a8f5c0c458da302c5e97c41a368ea3";
const apiService = axios.create({ baseURL: "https://api.themoviedb.org/3/",});
export const fetchMovies = async () => { 
    try { 
        const response = await apiService.get("movie/popular", { 
            params: { api_key: API_KEY, }, 
        }); 
        return response.data.results; 
    } 
    catch (error) { 
        console.error("Error fetching movies", error); 
        return []; 
    }
};

