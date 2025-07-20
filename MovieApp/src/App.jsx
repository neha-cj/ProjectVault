import { fetchMovies, searchMovies} from "./apiservice";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard"

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
  const [debouncedTerm, setDebouncedTerm]= useState('')
  //stops typing
  useEffect(()=>{
    const timer = setTimeout(()=>{
      console.log("debouncedterm ", searchTerm);
      setDebouncedTerm(searchTerm)

    },500)
    return () => clearTimeout(timer)
  },[searchTerm])

  //when change in debouncedterm
  useEffect(()=>{
    const search = async() =>{
      console.log("searching ", debouncedTerm);
      if(debouncedTerm === ''){
        const data = await fetchMovies();
        setMovies(data)
      }
      else{
        const results = await searchMovies(debouncedTerm)
        setMovies(results);
      }
    }
    search();
  },[debouncedTerm]);
  
  return (
    <div className="bg-black">
      <div className="flex justify-between p-2">
        <h1 className="text-3xl p-3 font-bold text-purple-500">Boxed</h1> 
            <div className="flex ">
                <img className="mt-2 px-3 py-3" src="search.svg" alt="search"/>
                <input className="mt-2 px-3 py-3 max-h-[3rem] rounded" type="text" placeholder="Search" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)}/>
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
