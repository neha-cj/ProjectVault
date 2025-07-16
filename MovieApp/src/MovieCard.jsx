import React, { useState } from "react";
const MovieCard = ({movie: {title, vote_average, poster_path, release_date}}) =>{ 
    const [hasLiked,setHasLiked]=useState(false);

    return(
        <div className="border rounded-lg p-4">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="w-full mb-4 rounded"/>
            <h2>{title}</h2> 
            <button onClick={() =>setHasLiked(!hasLiked)}>
                {hasLiked ? "❤️": "🤍"}
            </button>      
        </div>       
    )
}
export default MovieCard