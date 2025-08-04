import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
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
export const searchMovies = async(query)=>{
    const res = await apiService.get('search/movie',{
        params: {api_key:API_KEY,query:query}
    })
    return res.data.results;
}
