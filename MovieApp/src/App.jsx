import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular`,
          {
            params: {
              api_key: "93a8f5c0c458da302c5e97c41a368ea3",
            },
          }
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);
  
  return (
    <div className='bg-black text-gray-200 flex flex-col items-center '>
     <h1 className="text-4xl font-bold mb-6">Popular Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-black">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg p-4 hover:p-5 transition transition-delay: 100ms"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-gray-500">Rating: {movie.vote_average}</p>
            <p className="text-gray-400 text-sm">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
