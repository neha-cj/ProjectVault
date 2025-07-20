import { fetchMovies, searchMovies} from "./apiservice";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard"

const Movies =() =>{
  
}

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const fetchMoviesData= async() =>{
        const data= await fetchMovies()
        setMovies(data);
    }
    fetchMoviesData();
  },[])


  const [searchTerm, setSearchTerm] =useState('')
  
  const handleSearch = async(query) => {
    const results = await searchMovies(query);
    setMovies(results)
  }
  
  return (
    <div className="bg-black">
      <div className="flex justify-between p-2">
        <h1 className="text-3xl p-3 font-bold text-purple-500">Boxed</h1> 
            <div className="flex ">
                <img className="mt-2 px-3 py-3" src="search.svg" alt="search"/>
                <input className="mt-2 px-3 py-3 max-h-[3rem] rounded" type="text" placeholder="Search" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} 
                    onKeyDown={(e)=> {if (e.key==='Enter' && searchTerm){
                      handleSearch(searchTerm)}}
                    }
                />
            </div>
      </div>
      <div className="get">

      </div>
      <div className="text-white p-3"> 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map((movie) => ( 
                    <MovieCard key={movie.id} movie={movie} />
                ))}            
            </div>                                                                                                                                          
        </div> 
    </div>
  )
}

export default App
