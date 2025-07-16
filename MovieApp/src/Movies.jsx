import React, { useEffect, useState } from "react";
import { fetchMovies } from "./apiservice";
const Movies = () => { 
    const [movies, setMovies] = useState([]); 
    const [hasLiked,setHasLiked]=useState(false);
    useEffect(() => { 
        const fetchMoviesData = async () => { 
            const moviesData = await fetchMovies(); 
            setMovies(moviesData); 
        }; 
        fetchMoviesData(); 
    }, []); 

    return ( 
        <div className="bg-black text-white"> 
            <div className="flex justify-between p-2">
                <h1 className="text-3xl p-3 font-bold text-purple-500">Boxed</h1> 
                <input className="mt-2 px-3 py-3 max-h-[3rem] rounded" placeholder="Search"></input> 
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map((movie) => ( 
                    <div key={movie.id} className="border rounded-lg p-4"> 
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full mb-4 rounded"/>
                        <h2>{movie.title}</h2> 
                        <button onClick={() =>setHasLiked(!hasLiked)}>
                            {hasLiked ? "❤️": "🤍"}
                        </button>
                        
                        
                    </div> 
                ))} 
            </div>
            
        </div> 
    );
};
export default Movies;