import UserProfile from './Components/UserProfile'

function App() {
  const user={
    name: "Kylo Ren",
    bio: "A dark warrior strong with the Force, Kylo Ren commands First Order missions with a temper as fiery as his unconventional lightsaber",
    email: "kyloren@starwars.com",
    location: "Starkiller Base"
  }
  return (
    <div className='flex flex-col items-center'> 
      <h1 className='text-3xl p-3' >USER PROFILE CARD</h1>
      <UserProfile{...user} />
    </div>
  )
}

export default App
