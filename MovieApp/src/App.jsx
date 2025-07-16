
import Movies from "./Movies";

function App() {

  return (
    <div className="bg-black">
      <div className="flex justify-between p-2">
        <h1 className="text-3xl p-3 font-bold text-purple-500">Boxed</h1> 
            <div className="flex ">
                <img className="mt-2 px-3 py-3" src="search.svg" alt="search"/>
                <input className="mt-2 px-3 py-3 max-h-[3rem] rounded" type="text" placeholder="Search"></input> 
            </div>
      </div>
      <div className="get">

      </div>
      <Movies />
    </div>
  )
}

export default App
