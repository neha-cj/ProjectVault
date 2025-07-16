import React, { useEffect, useState } from "react";
import { fetchMovies } from "../apiservice";
import MovieCard from "./MovieCard"

const Movies = () => { 
    const [movies, setMovies] = useState([]); 

    useEffect(() => { 
        const fetchMoviesData = async () => { 
            const moviesData = await fetchMovies(); 
            setMovies(moviesData); 
        }; 
        fetchMoviesData(); 
    }, []); 

    return ( 
        <div className="text-white"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map((movie) => ( 
                    <MovieCard key={movie.id} movie={movie} />
                ))}            
            </div>                                                                                                                                          
        </div> 
    );
};
export default Movies;